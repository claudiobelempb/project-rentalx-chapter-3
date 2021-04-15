import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import configUpload from "../config/upload";

import { IndexUserController } from "../modules/accounts/useCase/IndexUser/IndexUserController";
import { ShowUserController } from "../modules/accounts/useCase/ShowUser/ShowUserController";
import { CreateUserController } from "../modules/accounts/useCase/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCase/UpdateUserAvatar/UpdateUserAvatarController";
import { UpdateUserController } from "../modules/accounts/useCase/UpdateUser/UpdateUserController";
import { DeleteUserController } from "../modules/accounts/useCase/DeleteUser/DeleteUserController";

const usersRoutes = Router();
const uploadAvatar = multer(configUpload.upload("./tmp/avatar"));

const indexUserController = new IndexUserController();
const showUserController = new ShowUserController();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.get("/", indexUserController.handle);
usersRoutes.get("/:id", showUserController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);
usersRoutes.delete("/:id", deleteUserController.handle);

export { usersRoutes };
