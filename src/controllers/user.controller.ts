import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  private userService = new UserService();

  public async findAll(_req: Request, res: Response) {
    const users = await this.userService.findAll()
    return res.send(users)
  }

  public async saveFile(req: Request, res: Response) {
    const file = req.file
    
    res.send(file)
  }
  
}

export default UserController