import { User } from '@authentication/models';

export class UserModel implements User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor({
    id,
    firstName,
    lastName,
    email,
    password,
  }: Partial<UserModel>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  setId(id: string) {
    this.id = id;
  }

  isPasswordEquals(password: string): boolean {
    return password === this.password;
  }

  toDto(): User {
    const { id, firstName, lastName, email } = this;
    return { id, firstName, lastName, email };
  }
}
