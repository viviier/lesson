import React from 'react'
import UserEditor from '../components/UserEditor'
import request, {get} from '../utils/request'

export default class UserEdit extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			user: null
		}
	}

	componentWillMount(){
		const userId = this.context.router.params.id
		get('http://localhost:3000/user/' + userId)
			.then(res => {
				this.setState({
					user: res
				})
			})
	}

	render(){
		const {user} = this.state
		return user ? <UserEditor editTarget={user} /> : <span>'加载中...'</span>
	}
}

UserEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
};