import { Request, Response } from "express";

import { User } from "../../model/User";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  // eslint-disable-next-line prettier/prettier
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user = new User();

    try {
      user = this.showUserProfileUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: "User not found" });
    }

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
