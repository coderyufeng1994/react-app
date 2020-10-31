// import SetCityA from './SetCityA';
// import SetCityB from './SetCityB';
// import SetCityC from './SetCityC';
// import SetCityD from './SetCityD';
import * as TYPES from '../actionTypes';

// console.log(SetCityA)
// 同步修改城市数据
export const synSetCityB = city => {
  return {
    type: TYPES.CITY_B,
    value: city
  }
}

// 异步修改城市数据
export const asynSetCityB = (city) => {
  return (dispatch) => {
    dispatch({
      type: TYPES.CITY_B,
      value: city
    })
  }
}
// export default {
  // ...SetCityA,
  // SetCityB,
  // SetCityC,
  // SetCityD
// }