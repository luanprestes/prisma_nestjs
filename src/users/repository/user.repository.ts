import { Injectable, Module } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { PrismaService } from '../../app/adapters/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private database: PrismaService) {}

  async create(data: User): Promise<User> {
    return await this.database.user.create({ data });
  }

  async findMany(): Promise<User[]> {
    return await this.database.user.findMany();
  }

  async findUnique(id: string): Promise<User> {
    return await this.database.user.findUnique({ where: { id } });
  }

  async update(id: string, data: User): Promise<User> {
    return await this.database.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<User> {
    return await this.database.user.delete({ where: { id } });
  }
}
