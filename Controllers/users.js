import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    let user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId };

    users.push(userWithId);

    res.send(`User with the name ${user.firstname} was created`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;

    const newUsers = users.filter(user => user.id !== id);

    res.send(newUsers);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age, num } = req.body;

    const foundUser = users.find((user) => user.id === id);

    if(firstName) foundUser.firstName = firstName;
    if(lastName) foundUser.lastName = lastName;
    if(age) foundUser.age = age;
    if(num) foundUser.num = num;

    res.send(`User with the ${id} has been updated`);
}