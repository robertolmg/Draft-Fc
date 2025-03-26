export class NewRegisterRequest {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  type!: UserTypeEnum;
}

export enum UserTypeEnum {
  Admin = 0,
  Athlete = 1,
  TeamScout = 2,
  University = 3
}
