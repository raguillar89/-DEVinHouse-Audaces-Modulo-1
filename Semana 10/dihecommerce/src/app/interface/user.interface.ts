export interface IUser{
  id?: number,
  userEmail: string,
  userPassword: string
}

export class User implements IUser {
  id?: number | undefined;
  userEmail!: string;
  userPassword!: string;
}
