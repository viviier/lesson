import React, {Component} from 'react'


export default class Nav extends Component {
    render(){
        const {data: {logo, list}} = this.props
        return (
            <div>
                <img src={logo} alt=""/>
            </div>
        )
    }
}