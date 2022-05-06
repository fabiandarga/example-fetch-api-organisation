let globalToken = '';

export const setToken = (token) => {
    globalToken = token;
}

export const get = (url) => {
    return fetch(url, {
        method: 'GET',
    })
}
export const post = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        
        //....
    })
}