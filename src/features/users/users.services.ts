import userModel from "./users.model";
import { IUser } from "../../interfaces/users.interface";

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<IUser[]> {
    // const users: IUser[] = await this.users.find();
    // return users;

    // custom data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            _id: "52342",
            username: "Md.Rakibuzzaman",
            email: "rakib@gmail.com",
            password: "rakib1234",
          },
          {
            _id: "49283",
            username: "Md.Tomal Kazi",
            email: "tomal@gmail.com",
            password: "tomal123",
          },
        ]);
      }, 500);
    });
  }

  // public async findUserById(userId: string): Promise<User>{

  // }
}

export default UserService;
