// Import required libraries
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>

// Replace with your network credentials
const char* ssid = "G110";
const char* password = "gracious2";

// ultrsonic sensor pins & state
String distanceState = "distance: ";
const int trigPin = D6;
const int echoPin = D7;

// light pin & state
bool ledState = 0;
const int ledPin = D2;

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

void sendLedState() {
  String text = "led: " + String(ledState);
  ws.textAll(text);
}

void sendDistanceState() {
  ws.textAll(distanceState);
}

void handleWebSocketMessage(void *arg, uint8_t *data, size_t len) {
  AwsFrameInfo *info = (AwsFrameInfo*)arg;
  if (info->final && info->index == 0 && info->len == len && info->opcode == WS_TEXT) {
    data[len] = 0;
    if (strcmp((char*)data, "toggleLed") == 0) {
      ledState = !ledState;      
      sendLedState();
    }
    if (strcmp((char*)data, "getDistance") == 0) {
      sendDistanceState();
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
    if (ledState){
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
  
  digitalWrite(trigPin, 0);
  delayMicroseconds(2);
  
  digitalWrite(trigPin, 1);
  delayMicroseconds(5);
  digitalWrite(trigPin, 0);

  duration = pulseIn(echoPin, HIGH);
  float _time = duration/2;
  float _speed = 0.03475;
  distance = _time * _speed;
  distanceState =  "distance: " + String(distance);
}

void setup(){
  // Serial port for debugging purposes
  Serial.begin(115200);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
  
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
  digitalWrite(ledPin, ledState);
  processDistance();
  Serial.println(distanceState);
}
