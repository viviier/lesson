/**
 * @file reducer
 * @date 2018/4/4
 */

import { combineReducers } from 'redux';

function mkds(state = [], action) {
    switch (action.type) {
        case 'ADD_MKD':
            return [
                ...state,
                {
                    id: action.id,
                    title: '',
                    value: ''
                }
            ];
        default: return state;
    }
}

export default combineReducers({
    mkds
});