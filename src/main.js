import {  getUserById, saveUser } from './api/UserApi';


const user =  await getUserById(1);

user.name = "Peter";

await saveUser(user);

const [name, setName] = useSate("");

await saveUser({
    firstName: name,
    LastName: 'Peter',
    //....
});