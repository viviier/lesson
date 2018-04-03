/**
 * @file actions
 * @date 2018/4/4
 */

import uuid from 'uuid/v4';

export function addMkd() {
    return {
        type: 'ADD_MKD',
        id: uuid()
    };
}