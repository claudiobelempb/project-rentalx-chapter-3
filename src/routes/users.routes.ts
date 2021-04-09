import { Router } from "express";

import { IndexUserController } from "../modules/accounts/useCase/IndexUser/IndexUserController";
import { CreateUserController } from '../modules/accounts/useCase/CreateUser/CreateUserController';

const usersRoutes = Router();

const indexUserController = new IndexUserController();
const createUserController = new CreateUserController();

usersRoutes.get('/', indexUserController.handle);
usersRoutes.post('/', createUserController.handle);

export { usersRoutes };