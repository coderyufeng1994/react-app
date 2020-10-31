import * as TYPES from '../actionTypes';
let SetCityA = {
    SetCityB(city) {
        return dispatch => {
            dispatch({
                type: TYPES.CITY_B,
                value: city
            })
        }
    },
    SetCityC(city) {
        return {
            type: TYPES.CITY_C,
            value: city
        }
    },
    SetCityD(city) {
        return {
            type: TYPES.CITY_D,
            value: city
        }
    }
};
export default SetCityA;