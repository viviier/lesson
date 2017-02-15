import React, { Component } from 'react'

export default class UserAdd extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      age: 0,
      gender: ''
    }
  }
  render(){
    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form>
            <label>用户名:<input type='text' /></label>
            <br/>
            <label>年龄:<input type='number' /></label>
            <br/>
            <label>性别: </label>
            <select>
              <option value=''>请选择</option>
              <option value='male'>男</option>
              <option value='famale'>女</option>
            </select>
            <br/>
            <br/>
            <input type='submit' value='提交' />
          </form>
        </main>
      </div>
    )
  }
}
