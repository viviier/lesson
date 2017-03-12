import React, {Component} from 'react'
import GithubBox from '../../components/GithubBox'

export default class ResultPage extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <GithubBox data={this.props.data} userId={this.props.location.query.userId} />
            </div>
        )
    }
}