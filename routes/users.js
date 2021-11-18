import express from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser } from "../Controllers/users.js";

const router = express.Router();


router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router;