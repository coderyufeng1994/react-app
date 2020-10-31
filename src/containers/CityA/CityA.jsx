import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { asynSetCityB } from '../../store/actionCreator';

export class CityA extends Component {

  constructor(props){
    super(props);
    this.cities = React.createRef();
    this.state = {
      A:'广东',
      B:'北京',
      C:'上海',
      D:'深圳',
    }

  }
  
  componentDidMount(){
  }

  // 点击按钮
  passCity=(cicty) => {
    this.cities.current.focus();
    this.props.Setcity(this.state.A);
    this.setState({
      A:this.props.cityName0
    })
    console.log(this.props)
  }

  changeCity=(e) => {
    this.setState({
      A:e.currentTarget.value
    });
    // this.props.Setcity(e.currentTarget.value)
  }


  render() {
    return (
      <Fragment>
        <h1>我是cityA</h1>
        <h1>这是从cityA过来的数据:{this.state.A}</h1>
        <h1>这是从cityB过来的数据:{this.props.cityName1}</h1>
        <h1>这是从cityC过来的数据:{this.props.cityName2}</h1>
        <h1>这是从cityD过来的数据:{this.props.cityName3}</h1>
        <input type="text" value={this.state.A} onChange={this.changeCity.bind(this)} ref={this.cities}/>
        <button onClick={this.passCity}>点我</button>
      </Fragment>
    )
  }
}

// 接收来自store的数据
const mapStateToProps=(state) => {
  return {
    cityName0:state.reducerA.cityName,
    cityName1:state.reducerB.cityName,
    cityName2:state.reducerC.cityName,
    cityName3:state.reducerD.cityName
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    Setcity(city){
      dispatch(asynSetCityB(city))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CityA)

