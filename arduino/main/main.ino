// Import required libraries
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>

// Replace with your network credentials
const char* ssid = "Software Lab";
const char* password = "";

// ultrsonic sensor pins & state
float distanceState = 0;
const int trigPin = D1;
const int echoPin = D2;

// FEEDER CLOSED STATE
const int sw1 = D5;
const int sw2 = D6;
int relay_grp_1 = 0;

// FEEDER OPENED STATE
const int sw3 = D7;
const int sw4 = D8;
int relay_grp_2 = 1;

// Create AsyncWebServer object on port 80
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");

const char index_html[] PROGMEM = R"rawliteral(
<html>
<body>
<p>led: <span>%LED%</span></p>
</body>
</html>
)rawliteral";

void sendDistanceState() {
  ws.textAll("FEED_DISTANCE: " + String(distanceState));
}

void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo*)arg;
  if (info->final && info->index == 0 && info->len == len && info->opcode == WS_TEXT) {
    data[len] = 0;
    if (strcmp((char*)data, "getDistance") == 0) {
      sendDistanceState();
    } else if(strcmp((char*)data, "DISCHARGE_FEED") == 0){
      if(distanceState < 7) {
        ws.textAll("FEEDER_FULL");
      } else {
        ws.textAll("DISCHARGING_FEED");
        toggleAcutator(1);
      }
     }
  }
}

void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type,
             void *arg, uint8_t *data, size_t len) {
    switch (type) {
      case WS_EVT_CONNECT:
        Serial.printf("WebSocket client #%u connected from %s\n", client->id(), client->remoteIP().toString().c_str());
        break;
      case WS_EVT_DISCONNECT:
        Serial.printf("WebSocket client #%u disconnected\n", client->id());
        break;
      case WS_EVT_DATA:
        handleWebSocketMessage(arg, data, len);
        break;
      case WS_EVT_PONG:
      case WS_EVT_ERROR:
        break;
  }
}

void initWebSocket() {
  ws.onEvent(onEvent);
  server.addHandler(&ws);
}

String processor(const String& var){
  Serial.println(var);
  if(var == "LED"){
    if (1){
      return "ON";
    }
    else {
      return "OFF";
    }
  }
}

void processDistance(){
  unsigned long duration;
  float distance;
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(5);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  float _time = duration/2;
  float _speed = 0.03475;
  distance = _time * _speed;
  distanceState = distance;
  if(distance <= 7){
      ws.textAll("FEED_FULL");
      toggleAcutator(0);
  }
  delay(100);
  sendDistanceState();
}

 void toggleAcutator(bool state) {
  if(state){
    digitalWrite(sw1, LOW);
    digitalWrite(sw2, LOW);
    digitalWrite(sw4, HIGH);
    digitalWrite(sw3, HIGH);
    relay_grp_1 = 0;
    relay_grp_2 = 1;
   } else {
    digitalWrite(sw1, HIGH);
    digitalWrite(sw2, HIGH);
    digitalWrite(sw3, LOW);
    digitalWrite(sw4, LOW);
    relay_grp_1 = 1;
    relay_grp_2 = 0;
   }
 }

void setup(){
  // Serial port for debugging purposes
  Serial.begin(115200);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(sw1, OUTPUT);
  pinMode(sw2, OUTPUT);
  pinMode(sw3, OUTPUT);
  pinMode(sw4, OUTPUT);
  
  digitalWrite(sw1, HIGH);
  digitalWrite(sw2, HIGH);
  digitalWrite(sw3, LOW);
  digitalWrite(sw4, LOW);
  
  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }

  // Print ESP Local IP Address
  Serial.println(WiFi.localIP());

  initWebSocket();

  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/html", index_html, processor);
  });

  // Start server
  server.begin();
}

void loop() {
  ws.cleanupClients();
  processDistance();
  Serial.println(distanceState);
}
