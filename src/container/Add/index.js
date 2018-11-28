import React, {Component} from 'react'
import './index.scss'
import Back from '../../assets/img/back.png'
import {Link} from 'react-router-dom'

export default class Add extends Component {
  render() {
    return (<div>
      <div className='head'>
        <Link to='/'><img src={Back}/></Link>
        <span>
            添加
        </span>
      </div>
    </div>
    )
  }
}