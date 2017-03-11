import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
import fetch from 'isomorphic-fetch'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'nico'
        }
    }
    LoginTodo = () => {
        fetch('/auth/user', {
            method: 'POST',
            body: {...this.state}
        }).then((res) => {
            if(res) {
                sessionStorage.setItem('demo-token', res.formData.token)
            alert('dengluchenggong')
            }else {
                alert('shiabai')
            }
        })
    }
    render(){
        return(
            <div>
                <p>帐号：<input type='text' name='username' /></p>
                <p>密码：<input type='password' name='pwd' /></p>
                <p><button onClick={this.LoginTodo}> <Link to='/list'>登录</Link></button></p>
                </div>
        )
    }
}