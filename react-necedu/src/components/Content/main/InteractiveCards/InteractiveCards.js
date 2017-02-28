import React, {Component} from 'react'
import {Row, Col, Card, Tag, Spin, Icon, Pagination, Radio} from 'antd'
import {get} from '../../../../utils/fetch'
import styles from './styles.less'

const RadioButton = Radio.Button,
      RadioGroup = Radio.Group

export default class InteractiveCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNo: 1,
            psize: 20,
            type: 10,
            current: 1,
            res: {}
        }
    }
    getUrlDate = () => {
        let url = `${this.props.url}?pageNo=${this.state.pageNo}&&psize=${this.state.psize}&&type=${this.state.type}`
        get(url).then(res => {this.setState({res})})
    }
    onPageChange = (pageNo) => {
        this.setState({
            pageNo,
            current: pageNo
        }, () => {
             this.getUrlDate()
        })
    }
    onRadioChange = (e) => {
        let type = e.target.value
        this.setState({
            type,
            pageNo: 1,
            current: 1,
        }, () => {
             this.getUrlDate()
        })
       
    }
    componentDidMount(){
        this.getUrlDate()
    }
    render(){
        let {tabs} = this.props
        let {res, type} = this.state
        let count = 'calc(100% / 4 - 20px)'
        return(
            <Row>
                <Col span={8}>
                    <RadioGroup
                    className={styles.radioGroup}
                        size="large"
                        defaultValue='10' 
                        onChange={this.onRadioChange}
                        defaultChecked={true} >
                       {
                           tabs.map((item, index) => {
                              return  <RadioButton value={item.type} key={index} className={`${styles.radio} ${type === item.type?styles.checked : ''}`}>{item.name}</RadioButton>
                           })
                       }
                    </RadioGroup>
                </Col>
                <Col span={24}>
                    {res.list? res.list.map((item, index) => {
                        return (
                            <Card key={index} style={{width: count, marginLeft: index %4 === 0 ? 0 : '20px'}} className={styles.card}>
                                <div>
                                    <img src={item.bigPhotoUrl} alt="" className={styles.cardImg}/>
                                </div>
                                <div>
                                    <p className={styles.cardName}>{item.name}</p>
                                    <p className={styles.cardProvider}>{item.provider}</p>
                                    <Tag><Icon type='user' />{item.learnerCount}</Tag>
                                    <p className={styles.cardPrice}>{item.price? `¥ ${item.price}.00` : '免费'}</p>
                                </div>
                            </Card>
                        )
                    }) : <Icon type="loading">加载中...</Icon>}
                </Col>
                <Col span={24} className={styles.colPagination}>
                    <Pagination 
                        defaultCurrent={1} 
                        current={this.state.current}
                        total={res.totalCount} 
                        pageSize={this.state.psize}
                        onChange={this.onPageChange}
                        />
                </Col>
            </Row>
        )
    }
}