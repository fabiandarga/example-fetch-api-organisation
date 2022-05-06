import { get, post } from  '../core/fetch';

const serverUrl = 'http://....';

export const getUserById = async (userId) => {
    const result = await get(serverUrl + '/user/'+userId);
    // ... json <- userData
    return userData;
}

/**
 * Sends user data to server and stores it.
 * @param {*} userData 
 * @returns 
 */
export const saveUser = async (firstName, lastName) => {
    const result = await post(serverUrl + '/user/',
            { firstName, lastName });

    return result;
}