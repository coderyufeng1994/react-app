import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'
import React, { Component,Fragment } from 'react'

import Home from '../containers/Home/Home'
import CityA from '../containers/CityA/CityA'
import CityB from '../containers/CityB/CityB'
import CityC from '../containers/CityC/CityC'
import CityD from '../containers/CityD/CityD'

export class AllRouters extends Component {
  render() {
    return (
      <Fragment> 
        <Router>
          <Route path='/' exact render={(props) =><Home {...props}></Home>}></Route>
          <Route path='/CityA' render={(props) =><CityA {...props}></CityA>}></Route>
          <Route path='/CityB' render={(props) =><CityB {...props}></CityB>}></Route>
          <Route path='/CityC' render={(props) =><CityC {...props}></CityC>}></Route>
          <Route path='/CityD' render={(props) =><CityD {...props}></CityD>}></Route>
        </Router>
      </Fragment>
    )
  }
}

export default AllRouters
