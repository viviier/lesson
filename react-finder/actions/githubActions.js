import 'whatwg-fetch'

import {
    GET_GITHUB_INITIAFE,
    GET_GITHUB_SUCCESS,
    GET_GITHUB_FAIL,
    CHAGE_USER_ID,
} from '../constants/actionTypes.js'

import {
    showSpinner,
    hideSpinner,
} from './uiActions.js'

export const getGithub = (userId = 'torvalds') => {
    return (dispatch) => {
        dispatch({type: GET_GITHUB_INITIAFE})
        dispatch(showSpinner())
        fetch('https://api.github.com/users/' + userId)
            .then(res => res.json)
            .then(res => {
                dispatch({type: GET_GITHUB_SUCCESS, payload: {data: res}})
                dispatch(hideSpinner())
            })
            .catch(res => dispatch({types: GET_GITHUB_FAIL}))
    }
}

export const changeUserId = (text) => ({type: CHAGE_USER_ID, payload: {userId: text}})