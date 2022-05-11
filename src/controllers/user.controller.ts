import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  private userService = new UserService();

  public async findAll(_req: Request, res: Response) {
    const users = await this.userService.findAll()
    return res.send(users)
  }
  
}

export default UserController