import * as TYPES from '../actionTypes';


// 1 定义默认的数据
const defaultState = {
  cityName: "cityAAAAAAA"
}
// 2 导出去 这个函数 当修改数据的时候 会被触发！！！
export default (state = defaultState, action) => {
  console.log(action);
  console.log(TYPES.CITY_B);
  switch (action.type) {
    case TYPES.CITY_B:
      state.cityName = action.value;
      break;
    case TYPES.CITY_C:
      state.cityName = action.value;
      break;
    case TYPES.CITY_D:
      state.cityName = action.value;
      break;
    default:
      return state;
      break;
  }
  return state;
}