import React, {Component} from 'react'
import {Row, Col, Card, Modal, Icon} from 'antd'
import styles from './styles.less'
import {get} from '../../../../utils/fetch'

export default class SidebarCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vVisible: false,
            vKey: Math.random() * 100,
            res: []
        }
    }
    // video
    showVideo = () => {
        this.setState({
            vVisible: true
        })
    }
    hiddenVideo = () => {
        this.setState({
            vVisible: false,
            vKey: Math.random() * 100
        })
    }
    // list 
    componentWillMount(){
        get(this.props.randomList.url).then(res => {
            this.setState({
                res
            })
        })
    }
    componentDidMount(){
        this.autoReplaceList()
    }
    autoReplaceList = () => {
        let shift = this.state.res.slice(0, 1)
        let newRes = this.state.res.slice(1).concat(shift)
       this.setState({
           res: [...newRes]
       })
        setTimeout(this.autoReplaceList, 5000)
    }
    render(){
        let {video, randomList} = this.props
        // video
        let {vVisible, vKey} = this.state
        // list
        let {res} = this.state
        return(
            <Row>
            <Row>
                <Col span={24}>
                    <Card title={video.title}>
                        <p>{video.text}</p>
                        <img src={video.logo} onClick={this.showVideo} />
                        <Modal 
                            visible={vVisible} 
                            onCancel={this.hiddenVideo} 
                            footer={null}
                            key={vKey}>
                                <video controls src={video.src} className={styles.video}/>
                        </Modal>
                    </Card>
                </Col>
            </Row>
            <Row style={{
                marginTop: '20px'
            }}>
                <Col span={24}>
                    <Card title={randomList.title}>
                        {  res.map((item, index) => {
                            if(index < 10) {
                                return <Row key={index} gutter={8} className={styles.listWrap}>
                                <Col span={8}>
                                    <img src={item.smallPhotoUrl} className={styles.img}/>
                                </Col>
                                <Col span={16}>
                                    <p className={styles.p}>{item.name}</p>
                                    <span><Icon type='user' /> {item.learnerCount}</span>
                                </Col>
                                </Row>
                            }
                        })}
                    </Card>
                </Col>
            </Row>
            </Row>
        )
    }
}