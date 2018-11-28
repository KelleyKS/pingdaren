import React from 'react'
import './index.scss'
import {Input, Rate, Icon} from 'antd';

const Search = Input.Search;

const data = [
  {
    id: 1,
    name: '张大仙也不美',
    name1: '办公室游戏兼得，办公室游戏兼得办公室游戏兼得办公室游戏兼得办公室游戏兼得高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    aimg: 'http://m.pingdaren.cn/static/image/image02.png',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 1
  },
  {
    id: 2,
    name: '张大仙也不美2',
    name1: '办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 2
  },
  {
    id: 3,
    name: '张大仙也不美3',
    name1: '办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    aimg: 'http://m.pingdaren.cn/static/image/image02.png',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 3
  },
  {
    id: 4,
    name: '张大仙也不美4',
    name1: '办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    aimg: 'http://m.pingdaren.cn/static/image/image02.png',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 3
  },
  {
    id: 5,
    name: '张大仙也不美5',
    name1: '办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    aimg: 'http://m.pingdaren.cn/static/image/image02.png',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 1
  },
  {
    id: 6,
    name: '张大仙也不美6',
    name1: '办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    aimg: 'http://m.pingdaren.cn/static/image/image02.png',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 3
  },
  {
    id: 7,
    name: '张大仙也不美7',
    name1: '办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁',
    biati: '评价褒贬不一，iPhone X到底怎么样？',
    baoliao: '@假货爆料',
    W3C: '@W3C',
    aixin: 3366,
    bx: 6666,
    tm: 2
  },
]

export default class List extends React.Component {
  constructor(props, content) {
    super(props, content)
    this.setState({})
  }

  componentDidMount() {

  }

  render() {
    return <div className='list-box'>
      <div className='search-box'>
        <Search
            placeholder="请输入商品名称或内容"
            onSearch={value => console.log(value)}
        />
      </div>
      <div className='list-item-box'>
        {
          data.map((item, index) => {
            let dom = ''
            switch (item.tm) {
              case 1:
                dom = <ListItemOne data={item} key={index}/>
                break;
              case 2:
                dom = <ListItemTwo data={item} key={index}/>
                break;
              case 3:
                dom = <ListItemThree data={item} key={index}/>
                break;
            }
            return dom
          })
        }
      </div>
    </div>
  }
}

const ListItemOne = ({data}) => {
  return <div className='list-item-box-'>
    <div className='list-item-box-one'>
      <div className='list-item-box-one-left'>
        <div><i></i>{data.name}</div>
        <div>{data.biati}</div>
        <div>{data.name1}</div>
      </div>
      <div className='list-item-box-one-right'>
        <div className='img-box'>
          <img src={data.aimg} alt=""/>
        </div>
      </div>
    </div>
    <ListItemBoxBottom data={data}/>
  </div>
}
const ListItemTwo = ({data}) => {
  return <div className='list-item-box- list-item-box-two'>
    <div className='list-item-box-two'>
      <div className='list-item-box-two-left'>
        <div><i></i>{data.name}</div>
        <div>{data.biati}</div>
        <div>{data.name1}</div>
      </div>
      <div className='list-item-box-one-right'>
        <div className='img-box'>
          <img src={data.aimg} alt=""/>
        </div>
      </div>
    </div>
    <ListItemBoxBottom data={data}/>
  </div>
}
const ListItemThree = ({data}) => {
  return <div className='list-item-box-'>
    <div className='list-item-box-three'>
      <div className='list-item-box-three-left'>
        <div><i></i>{data.name}</div>
        <div><img src={data.aimg} alt=""/></div>
        <div>{data.biati}</div>
        <div>{data.name1}</div>
      </div>
    </div>
    <ListItemBoxBottom data={data}/>
  </div>
}

const ListItemBoxBottom = ({data}) =>{
  return  <div className='list-item-box-bottom'>
    <div className='list-item-box-bottom-left'>
      <div>{data.baoliao}</div>
      <div>{data.W3C}</div>
    </div>
    <div className='list-item-box-bottom-right'>
      <div>
        <Icon type="heart" style={{marginRight:'4px'}}/>
        {data.aixin}
      </div>
      <div>
        <Icon type="edit" style={{marginRight:'4px'}}/>
        {data.bx}
      </div>
    </div>
  </div>
}