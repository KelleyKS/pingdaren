import React, {Component} from 'react'
import './index.scss'
import Back from './images/back.png'
import {Link} from 'react-router-dom'
import {info} from '../../services/code'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoData: null
    }
  }
  componentDidMount(){
    info()
    .then(res => res.json())
    .then(res => this.setState({infoData: res.data}))
  }
  render() {
    const {infoData} = this.state
    console.log(infoData, 'info')
    return (<div className='main'>
      <div className='head'>
        <Link to='/'><img src={Back}/></Link>
        <span>
            个人中心
        </span>
      </div>
      <div className='section'>
        
      </div>
    </div>
    )
  }
}