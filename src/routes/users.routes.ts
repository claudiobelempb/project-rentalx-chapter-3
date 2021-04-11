import { Router } from "express";

import { IndexUserController } from "../modules/accounts/useCase/IndexUser/IndexUserController";
import { ShowUserController } from "../modules/accounts/useCase/ShowUser/ShowUserController";
import { CreateUserController } from "../modules/accounts/useCase/CreateUser/CreateUserController";
import { UpdateUserController } from "../modules/accounts/useCase/UpdateUser/UpdateUserController";
import { DeleteUserController } from "../modules/accounts/useCase/DeleteUser/DeleteUserController";

const usersRoutes = Router();

const indexUserController = new IndexUserController();
const showUserController = new ShowUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.get("/", indexUserController.handle);
usersRoutes.get("/:id", showUserController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);

export { usersRoutes };
