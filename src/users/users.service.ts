import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(new User(createUserDto));
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findMany();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findUnique(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.update(id, new User(updateUserDto));
  }

  async remove(id: string): Promise<User> {
    return await this.userRepository.delete(id);
  }
}
