import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>我是首页</h1>
        <h1>我是首页</h1>
        <h1>我是首页</h1>
        <Link to='/CityA'>CityA</Link><br/>
        <Link to='/CityB'>CityB</Link><br/>
        <Link to='/CityC'>CityC</Link><br/>
        <Link to='/CityD'>CityD</Link><br/>
      </Fragment>
    )
  }
}

export default Home
