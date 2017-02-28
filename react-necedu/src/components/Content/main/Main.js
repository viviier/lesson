import React, {Component} from 'react'
import {Row, Col} from 'antd'
import styles from './styles.less'
import InteractiveCards from './InteractiveCards/InteractiveCards'
import SidebarCards from './sidebarCards/SidebarCards'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        let {data: {interactiveCaards,sidebarCards}}= this.props
        return (
            <Row className={styles.wrap}>
                <Row className={styles.content}>
                    <Col span={18} className={styles.interactiveCards}>
                        <InteractiveCards {...interactiveCaards}/>
                    </Col>
                    <Col span={6} className={styles.sidebarCards}>
                     <SidebarCards {...sidebarCards}/>
                     </Col>
                </Row>
            </Row>
        )
    }
}