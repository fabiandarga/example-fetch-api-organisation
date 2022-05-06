import {  getUserById, saveUser } from './api/UserApi';

/**
 * inside the React/Vue Components or other JS Files.
 * Just use the "api" methods with the actual data/parameters
 */

const user =  await getUserById(1);
user.name = "Peter";

await saveUser(user);

const [name, setName] = useSate("");

await saveUser({
    firstName: name,
    LastName: 'Peter',
    //....
});