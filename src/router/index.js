import React, {Component} from 'react'

import {Router, Route, Switch, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from '../container/Home/index'
import Main from '../container/Main/index'
import Add from '../container/Add/index'
import Login from '../container/Login/index'


let history = createBrowserHistory()
export default class RouterMap extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="wrap">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/main' component={Main}/>
            <Route path='/add' component={Add}/>
            <Route path='/login' component={Login}/>
        </Switch>
        </div>  
      </Router>
    )
  }
}