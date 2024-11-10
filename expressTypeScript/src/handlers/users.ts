import { Request, Response } from "express-serve-static-core";
import { CreateUserDTO, CreateUserQueryParams, User } from "../dto/model";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}
export function getUserById(request: Request, response: Response) {
  response.send({});
}
export function createUser(
  request: Request<{}, {}, CreateUserDTO, CreateUserQueryParams>,
  response: Response<User>
) {
  response.status(201).send({
    id: 1,
    email: "ainmutaqorrobin@gmail.com",
    username: "ainmutaqorrobin",
  });
}
