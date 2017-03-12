import React, {Component} from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ul/RaisedButton'
import TextField from 'material-ul/TextField'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        let {userId, onSubmitUserId, onChangeUserId} = this.props
        return(
            <div>
                <TextField
                    hintText='输入github id'
                    onchange={onChangeUserId}
                    />
                    <Link to={{
                        pathname: '/result',
                        query: {userId: userId}
                    }}>
                        <RaisedButton label='submit' onClick={onSubmitUserId(userId)} primary />
                        </Link>
            </div>
        )
    }
}