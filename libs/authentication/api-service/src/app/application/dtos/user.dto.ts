import { User } from '@authentication/models';

export class UserDto implements User {
  name: string;
}
