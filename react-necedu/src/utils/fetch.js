import fetch from 'isomorphic-fetch'

function request(method, url, body){
    method = method.toUpperCase()

    if(method === 'GET') {
        body = undefined
    } else {
        body = body && JSON.stringify(body)
    }

    return fetch(url, {
        method,
        body
    }).then((res) => {
        if(res.status === 401) {
            return Promise.reject('failed')
        }
        return res.json()
    })
}


export const get = url => request('GET', url)