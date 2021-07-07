export enum Type {
  FEEDER_GET_DISTANCE = "FEEDER_GET_DISTANCE",
  FEEDER_GET_LEVEL = "FEEDER_GET_LEVEL",
  FEEDER_RELEASE_FEED = "FEEDER_RELEASE_FEED"
}

export const setFeedDistance = (payload: string) => ({
  type: Type.FEEDER_GET_DISTANCE,
  payload,
});

export const getFeedLevel = (payload: string) => ({
  type: Type.FEEDER_GET_LEVEL,
  payload,
});

export const releaseFeed = (payload: string) => ({
  type: Type.FEEDER_RELEASE_FEED,
  payload
})

export default { setFeedDistance, getFeedLevel };
