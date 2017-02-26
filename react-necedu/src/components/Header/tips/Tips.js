import React, {Component} from 'react'
import styles from './styles.less'
import {getLocal, setLocal} from '../../../utils/localstorage'
import {message, Row, Col, Icon} from 'antd'

const tipsState = getLocal('tips')

export default class Tips extends Component {
    constructor(props){
        super(props)
         this.state = {
            show: true
        }
    }
    componentWillMount(){
        if(tipsState) {
             this.setState({
                show: false
            })
        }
    }
    handleClick = ()=>{
        this.setState({
            show: false
        })
        message.success('设置成功')
        setLocal('tips', 'none')
    }
    render(){
        let {show} = this.state;
        if(show) {
            const {data: {msg}} = this.props
            return(
                <Row className={styles.wrap}>
                    <Row className={styles.content}>
                        <Col span={20}>{msg} <a href='#' className={styles.a}>立即查看 <Icon type='right' /></a></Col>
                        <Col span={4} onClick={this.handleClick}><span className={styles.span}><Icon type='close' />不再提醒</span></Col>
                    </Row>
                </Row>
            )
        }
        return null
    }
}