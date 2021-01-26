export enum Type {
  DRINKER_GET_DISTANCE = "DRINKER_GET_DISTANCE",
  DRINKER_GET_LEVEL = "DRINKER_GET_LEVEL",
}

export const setDrinkerDistance = (payload: string) => ({
  type: Type.DRINKER_GET_DISTANCE,
  payload,
});

export const getDrinkerLevel = (payload: string) => ({
  type: Type.DRINKER_GET_LEVEL,
  payload,
});

export default { setDrinkerDistance, getDrinkerLevel };
