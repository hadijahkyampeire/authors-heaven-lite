import { unAuthenticatedInstance } from "../http";
import { UserData } from "../types/user";

const signUp = (data: UserData) => {
  return unAuthenticatedInstance.post("/auth/users/register/", data);
};

const login = (data: UserData) => {
  return unAuthenticatedInstance.post("/auth/users/login/", data);
};


const UserService = {
  signUp,
  login
};

export default UserService;
