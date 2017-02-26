import React, {Component} from 'react'
import {Row, Col} from 'antd'
import styles from './styles.less'

export default class ViewImg extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {data: {img}} = this.props
        return (
            <Row className={styles.wrap}>
                <Col span={24}>
                    <img src={img} />
                </Col>
            </Row>
        )
    }
}