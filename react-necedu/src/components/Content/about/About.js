import React, {Component} from 'react'
import {Card, Row, Col, Icon} from 'antd'
import styles from './styles.less'

export default class About extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const {data: {list}} = this.props
        let len = list.length
         let  span = Math.floor(24 / len)
        return(
            <Row className={styles.wrap}>
                <Row className={styles.content}>
                    {list.map((item, index) => {
                        return (
                           <Col span={span} key={index}>
                                <Card extra={<a>了解更多<Icon type='right'/></a>} bodyStyle={{ display: 'flex' }} bordered={false}>
                                    <div className={styles.img}>
                                        <img src={item.logo}/>
                                    </div>
                                    <div className={styles.text}>
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>                     
                                    </div>
                                </Card>
                           </Col>
                        )
                    })}
                </Row>
            </Row>
        )
    }
}