import { User } from '../entities/user.entity';

describe('User Entity', () => {
  it('should created new user', () => {
    const user = new User({ name: 'bar', email: 'foo@bar' });
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('id');
  });

  it('should created new user with UUID', () => {
    const user = new User({ name: 'bar', email: 'foo@bar' });
    expect(user.id).toHaveLength(36);
  });

  it('should validate user if id is wrong', () => {
    const errorHandlerUserId = () =>
      new User({ name: 'bar', email: 'foo@bar', id: '1234' });
    expect(errorHandlerUserId).toThrowError('User id is not UUID format');
  });

  it('should validate user id in format UUID', () => {
    const user = new User({
      name: 'bar',
      email: 'foo@bar',
      id: '77a31012-04fc-43b2-bc34-8fbdc533c41f',
    });

    expect(user).toEqual({
      name: 'bar',
      email: 'foo@bar',
      id: '77a31012-04fc-43b2-bc34-8fbdc533c41f',
    });
  });
});
