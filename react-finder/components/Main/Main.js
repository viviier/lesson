import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <AppBar
                    title='Github Finder'
                    showMenuIconButton={false}
                    />
                    <div>
                        {this.props.children}
                    </div>
            </div>
        )
    }
}