import { get } from  '../core/fetch';

const serverUrl = 'http://....';

export const getAllEvents = async (userId) => {
    const result = await get(serverUrl + '/events/');
    const data = await result.json();
    return data;
}
