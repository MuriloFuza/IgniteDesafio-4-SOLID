import { Request, Response } from "express";

import { User } from "../../model/User";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user = new User();
    try {
      user = this.turnUserAdminUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: "Unable to change to admin" });
    }

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
