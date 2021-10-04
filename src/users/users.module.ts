import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema';
import { AuthModule } from 'src/auth/auth.module';
import { AuthSchema } from 'src/auth/schemas/auth.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}