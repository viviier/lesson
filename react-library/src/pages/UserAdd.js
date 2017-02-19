import React, { Component } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import UserEditor from '../components/UserEditor'

export default class UserAdd extends Component {
  render() {
    return (
        <HomeLayout title="添加用户">
            <UserEditor />
        </HomeLayout>
    )
  }
}