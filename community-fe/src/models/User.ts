export interface RegisterUserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
}

export interface LoginUserModel {
  email: string;
  password: string;
}


export interface UserModel {
  id: number;
  name: string;
  lastname: string;
  email: string;
  gender: string;
  birthday: number;
}
