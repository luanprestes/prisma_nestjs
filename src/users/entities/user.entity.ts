import { v4, validate } from 'uuid';

export class User {
  id?: string;
  name: string;
  email: string;

  constructor(props: User) {
    Object.assign(this, props);

    if (!props.id) {
      this.id = v4();
    } else if (!validate(this.id)) {
      throw new Error('User id is not UUID format');
    }
  }
}
