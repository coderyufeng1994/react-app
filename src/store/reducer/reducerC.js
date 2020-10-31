// 1 定义默认的数据
const defaultState = {
  cityName: "cityCCCCCCC"
}
// 2 导出去 这个函数 当修改数据的时候 会被触发！！！
export default (state = defaultState, action) => {
  return state;
}