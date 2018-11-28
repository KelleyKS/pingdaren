import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Back from '../../assets/img/back.png'
import Right from '../../assets/img/right.png'
import './index.scss'
import {info} from '../../services/code'
import {Form, Input, Button, DatePicker} from 'antd'

const { MonthPicker, RangePicker } = DatePicker;
const FormItem = Form.Item;

class SetInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          infoData: null
        }
      }
    componentDidMount(){
        info()
        .then(res => res.json())
        .then(res => {
            const data = res.data;
            console.log(res.data)
            this.setState({infoData: data, name: data.cnname, 
                birthday: data.birthday, sex: data.sex, autograph: data.autograph,
                province: data.province})
        })
    }
    handleSubmit = (e) => {
        const {token} = this.state
        const _this = this
        e.preventDefault();
        _this.props.form.validateFields((err, values) => {
          if (!err) {
            const {phone, code} = values
            // sign(token,{phone, code})
            // .then(res => res.json())
            // .then(res => {
            //   if(res.status){
            //     _this.context.router.history.push('/')
            //   } else {
            //     this.setState({
            //       msg: res.msg
            //     })
            //   }
            // })
          }
        });
    }
    render() {
        const {infoData, name, birthday, sex, autograph,province} = this.state
        const { getFieldDecorator } = this.props.form;
        console.log(this.state, '')
        console.log(infoData)
        return (<div className='SetInfo'>
        <Form onSubmit={this.handleSubmit}>
        
        <div className='head'>
            <Link to='/'><img src={Back}/></Link>
            <span>
                修改信息
            </span>
            <span htmlType="submit">保存</span>
        </div>
        <div className='section'>
        <FormItem label='昵称'>
        {/* {getFieldDecorator('phone')( */}
            <Input placeholder='点击输入您的手机号码'  value={name}/>
          {/* )} */}
        </FormItem>
        <FormItem label='生日' className='code_num'>
        {getFieldDecorator('code')(
            <DatePicker value={birthday} onChange={(e) => {console.log(e, 'eeeeee')}} />
          )}
        </FormItem>
        <FormItem label='性别'>
        {getFieldDecorator('phone')(
            <Input placeholder='点击输入您的手机号码'/>
          )}
        </FormItem>
        <FormItem label='家乡' className='code_num'>
        {getFieldDecorator('code')(
            <Input placeholder='点击输入验证码'/>
          )}
        </FormItem>
        <FormItem label='个性签名' className='code_num'>
        {getFieldDecorator('code')(
            <Input placeholder='点击输入验证码'/>
          )}
        </FormItem>
        <FormItem label='性别' className='bom_submit'>
          <Button className='submit' htmlType="submit">确定</Button>
        </FormItem>
        </div>

      </Form></div>
        )
    }
}

const WrappedApp = Form.create()(SetInfo);

export default WrappedApp
