export interface UserCredential {
  name: string;
  email: string;
  password: string;
}

export interface UserWithPassword extends UserCredential {
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends Omit<UserWithPassword, "password"> {
  id: string;
}
