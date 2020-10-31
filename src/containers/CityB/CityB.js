import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'


export class CityB extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <Fragment>
      <h1>我是CityB</h1>
      <h1>我是组件A传过来的数据:{this.props.cityName}</h1>
    </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cityName:state.reducerA.cityName
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CityB))

