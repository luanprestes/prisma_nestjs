import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';
import { UserRepository } from '../repository/user.repository';
import { PrismaService } from '../../app/adapters/prisma/prisma.service';

describe('UsersService', () => {
  let user: User;
  let service: UsersService;
  let userRepository: UserRepository;
  let prismaService: PrismaService;

  beforeEach(() => {
    user = null;
    prismaService = new PrismaService();
    userRepository = new UserRepository(prismaService);
    service = new UsersService(userRepository);
  });

  afterEach(async () => {
    if (user) {
      const userFinded = await service.findOne(user.id);
      if (userFinded) {
        await service.remove(user.id);
      }
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create new User', async () => {
    user = await service.create({
      name: 'foo',
      email: 'foo@gmail.com',
    });
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('id');
  });

  it('should find One User', async () => {
    user = await service.create({
      name: 'foo',
      email: 'bar@foo',
    });

    expect(await service.findOne(user.id)).toEqual(user);
  });

  it('should update data user by id', async () => {
    user = await service.create({
      name: 'foo',
      email: 'bar@gmail.com',
    });

    const userMock = {
      id: user.id,
      name: 'john',
      email: 'bar1@gmail.com',
    };

    expect(await service.update(user.id, userMock)).toEqual(userMock);
  });

  it('should deleted user by id', async () => {
    user = await service.create({
      name: 'foo',
      email: 'bar2@gmail.com',
    });

    expect(await service.remove(user.id)).toEqual(user);
  });
});
