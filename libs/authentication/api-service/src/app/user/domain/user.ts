import { User } from '@authentication/models';

export class UserModel implements User {
  id?: string;
  firstName: string;
  lastName: string;
  testMich: string;

  constructor({ id, firstName, lastName }: Partial<UserModel>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setId(id: string) {
    this.id = id;
  }

  toDto(): User {
    const { id, firstName, lastName } = this;
    return { id, firstName, lastName };
  }
}
