export enum Type {
  FEEDER_GET_DISTANCE = "FEEDER_GET_DISTANCE",
  FEEDER_GET_LEVEL = "FEEDER_GET_LEVEL",
}

export const setFeedDistance = (payload: string) => ({
  type: Type.FEEDER_GET_DISTANCE,
  payload,
});

export const getFeedLevel = (payload: string) => ({
  type: Type.FEEDER_GET_LEVEL,
  payload,
});

export default { setFeedDistance, getFeedLevel };
