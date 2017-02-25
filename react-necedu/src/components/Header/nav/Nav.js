import React, {Component} from 'react'
import {Row, Col} from 'antd'
import styles from './styles.less'


export default class Nav extends Component {
    render(){
        const {data: {logo, list}} = this.props
        return (
            <Row className={styles.wrap}>
                <Row className={styles.content}>
                    <Col span={16}>
                        <img src={logo} alt=""/>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </Row>
        )
    }
}