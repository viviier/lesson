import React, {Component} from 'react'
import {Row, Col} from 'antd'
import styles from './styles.less'
// import InteractiveCards from './InteractiveCards/InteractiveCards'
import SidebarCards from './sidebarCards/SidebarCards'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        let {data: {sidebarCards}}= this.props
        return (
            <Row className={styles.wrap}>
                <Row className={styles.content}>
                    <Col span={9}>
                     <SidebarCards {...sidebarCards}/>
                     </Col>
                </Row>
            </Row>
        )
    }
}