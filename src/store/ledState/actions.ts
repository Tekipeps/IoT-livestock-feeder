export enum Type {
  LED_ON = "LED_ON",
  LED_OFF = "LED_OFF",
  LED_TOGGLE = "LED_TOGGLE",
}

export const onLed = () => ({
  type: Type.LED_ON,
});

export const toggleLedState = () => ({
  type: Type.LED_TOGGLE,
});

export const offLed = () => ({
  type: Type.LED_OFF,
});
