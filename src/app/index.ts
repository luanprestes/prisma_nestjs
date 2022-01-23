import { Module } from '@nestjs/common';

// App Modules
import { UsersModule } from '../users/users.module';

// Adapters Modules
import { PrismaModule } from './adapters/prisma/prisma.module';

@Module({
  imports: [UsersModule, PrismaModule],
})
export class AppModule {}
