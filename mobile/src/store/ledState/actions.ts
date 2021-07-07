export enum Type {
  LED_ON = "LED_ON",
  LED_OFF = "LED_OFF",
  LED_TOGGLE = "LED_TOGGLE",
}

export const onLed = () => ({
  type: Type.LED_ON,
});

export const toggleLedState = (data: string) => {
  return {
    type: Type.LED_TOGGLE,
    value: data === "0" ? false : true,
  };
};

export const offLed = () => ({
  type: Type.LED_OFF,
});
