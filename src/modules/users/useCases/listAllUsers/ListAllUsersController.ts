import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let allusers = [];
    try {
      allusers = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
    } catch (error) {
      return response.status(400).json({ error: "List users is empty" });
    }
    console.log(allusers);
    return response.status(200).json(allusers);
  }
}

export { ListAllUsersController };
