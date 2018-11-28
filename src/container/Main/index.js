import React, {Component} from 'react'
import './index.scss'
import Back from '../../assets/img/back.png'
import Right from '../../assets/img/right.png'
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
      {
        infoData && <div className='section'>
        <Link to='/info'>
          <dl>
            <dt>
              <img src={`http://m.pingdaren.cn/${infoData.photo}`}/>
            </dt>
            <dd>
              <h3>{infoData.cnname}</h3>
              <p><span>{infoData.sex == 1 ? '男' : '女'}</span><span>{infoData.age}</span>
              <span>{infoData.cnname}</span></p>
              <p>{infoData.autograph}</p>
              <img src={Right}/>
            </dd>
          </dl></Link>
        </div>
      }
    </div>
    )
  }
}