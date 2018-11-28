import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (<div>
      home
      <div className="bomNav">
          <span><Link to='/'>HOME</Link></span>
          <span><Link to='/add'>+</Link></span>
          <span><Link to='/main'>我的</Link></span>
        </div>
    </div>
    )
  }
}