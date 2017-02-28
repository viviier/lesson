import React, {Component} from 'react'
import {Row, Col, Button, Modal, Form, Icon, Input, Checkbox,message, notification} from 'antd'
import styles from './styles.less'
import {get} from '../../../utils/fetch'
import md5 from 'md5'

const FormItem = Form.Item

const LoginForm = Form.create()((props) => {
    const {visible, form, handleCancel, handleFollowSucToggle} = props
    const {getFieldDecorator, validateFields, setFieldsValue} = form

     function handleSubmit(e){
         e.preventDefault()
        validateFields((err, values) => {
            if(!err){
                const arg = {
                    message: '登录成功',
                    description: '欢迎回来',
                    duration: 2
                }
                let {userName, password} = values
                userName = md5(userName),
                password = md5(password)
                let url = 'http://study.163.com/webDev/login.htm'
                url = `${url}?userName=${userName}&&password=${password}`
                 get(url).then(res => {
                     console.log(res)
                     if(res === 1){
                    setFieldsValue({
                        userName: '',
                        password: ''
                    })
                     handleCancel()
                     handleFollowSucToggle()
                     message.success('关注成功')
                     notification.open(arg)
                     document.cookie = 'followSuc=yes'
                     } else {
                        message.warning('帐号或密码输入错误！')
                     }})
            }
        })
    }
    return (
        <Modal
            visible={visible}
            title='Login In'
            footer={null}
            onCancel={handleCancel}
        >
        <Form onSubmit={handleSubmit} className={styles.login-form}>
            <FormItem>
                {getFieldDecorator('userName', {
                    initialValue: 'studyOnline',
                    rules: [{
                        required: true,
                        message: 'Please input your username!'
                    }]
                })(
                    <Input addonBefore={<Icon type='user' />} placeholder='username' />
                )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        initialValue: 'study.163.com',
                        rules: [{
                            required: true,
                            message: 'Please input your Password!'
                        }]
                    })(
                        <Input addonBefore={<Icon type='lock' />} type='passsword' placeholder='Password' />
                    )}
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('remember',{
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )
                    }
                    <Button type="primary" htmlType="submit">
                        Login In
                    </Button>
                </FormItem>
        </Form>
        </Modal>
    )
})

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            followSuc: false
        }
    }
    showModal = () => {
        // 点击关注按钮，先判断cookie
        let followed = document.cookie.indexOf('followSuc') === -1
        if(!followed) {
            this.setState({
                followSuc: true
            })
            message.success('关注成功')
        } else {
        this.setState({
            visible: true
        })
        }
    }
    handleFollowSucToggle = () => {
        this.setState({
            followSuc: !this.state.followSuc
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    render(){
        const {data: {logo, list}} = this.props
        const {visible, followSuc} = this.state
        return (
            <Row className={styles.wrap}>
                <Row className={styles.content}>
                    <Col span={16}>
                        <img src={logo} alt="" className={styles.img} />

                        {followSuc? <Button size='small' className={`${styles.button} ${styles.check}`}>
                                        <Icon type='check'/>已关注 | <a href='#' onClick={this.handleFollowSucToggle}>取消</a>  
                                     </Button>
                                   :   <Button 
                                        size='small' 
                                        className={styles.button}
                                        onClick={this.showModal}>
                                        <Icon type='plus' /> 关注
                                     </Button>}
                        <span>粉丝 43</span>
                        <LoginForm 
                            visible={visible}
                            handleCancel={this.handleCancel}
                            handleFollowSucToggle={this.handleFollowSucToggle}
                        />
                    </Col>
                    <Col span={8}>
                        {
                            list.map((item, index) => {
                                return(
                                    <a href={item.src} className={styles.a} key={index} target={'_blank'}>{item.name}</a>
                                )
                            })
                        }
                        <Icon type='search' className={styles.search} />
                    </Col>
                </Row>
            </Row>
        )
    }
}