import React,{Component} from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            list: ['nihao']
        }
    }
    addTodo = (value) => {
        this.setState({
            list: [
                ...this.state.list,
                value
            ]
        })
    }
    render(){
        let input
        return(
            <div>
                <p><input type='text' ref={node => input=node} />
                <button onClick={() => this.addTodo(input.value)}>Add</button></p>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}