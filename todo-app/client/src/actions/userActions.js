import axios from 'axios';
import { push } from 'react-router-redux'

export function userLogin(loginInfo) {
	return (dispatch) => {

		axios.post('/auth/login', loginInfo)
		.then(res => {
			dispatch({
				type: 'CREATE_USER',
				payload: res.data.userInfo
			});
			dispatch({
				type: 'CREATE_TODO',
				payload: res.data.list
			});
			
			localStorage.setItem('token', res.data.token);
		});
	}
}

export function userLoginOut() {
	return (dispatch) => {
		localStorage.removeItem('token');
		
		dispatch({
			type: 'LOGINOUT_USER'
		});
	}
}