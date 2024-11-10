export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserQueryParams {
  loginAfterCreate?: boolean;
}

export interface User {
  id: number;
  email: string;
  username: string;
}
