/**
 * Here we have all code to deal with the fetch api and all the
 * configuration we need to make fetch calls.
 */

// Here we can also deal with token, as they are part of the request config
let globalToken = '';
export const setToken = (token) => {
    globalToken = token;
}

/**
 * Create one function for each HTTP-method you need (get/post/delete/update/...)
 */
export const get = (url) => {
    return fetch(url, {
        method: 'GET',
        // token?
    })
}
export const post = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        // token?
        //....
    })
}