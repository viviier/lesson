import React, {Component} from 'react'
import {Row, Col} from 'antd'
import styles from './styles.less'

export default class Container extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        let {title, logo, copyright, list} = this.props
        return(
            <Row className={styles.wrap}>
                <Row className={styles.content}>
                    <Col span={12}>
                        <h1 className={styles.title}>{title}</h1>
                        {copyright.map((item, index) => <span key={index}>{item}</span>)}
                    </Col>
                    <Col span={12} className={styles.right}>
                        {list.map((item, index) => {
                            return(
                                <ul key={index} className={styles.ul}>
                                    <li>{`${item.title}:`}</li>
                                    {item.data.map((item, index) => {
                                        return (<li key={index} className={styles.li}>
                                           <a href='#'>{item}</a>
                                        </li>)
                                    })}
                                </ul>
                            )
                        })}
                    </Col>
                </Row>
            </Row>
        )
    }
}