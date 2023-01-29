export interface CreateUserModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
}

export interface FindUserModel {
  email: string;
  password: string;
}
