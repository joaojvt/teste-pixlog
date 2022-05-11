import { PrismaClient, User } from "@prisma/client";

class UserService {
  constructor(private prisma = new PrismaClient()) { }

  public findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }
}

export default UserService