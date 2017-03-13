import React, {Component} from 'react'
import {Link} from 'react-router'
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
                <input type='text'
                    onChange={onChangeUserId}
                    />
                    <Link to={{
                        pathname: '/result',
                        query: {userId: userId}
                    }}>
                        <input type='submit' onClick={onSubmitUserId(userId)} value='click' />
                        </Link>
            </div>
        )
    }
}