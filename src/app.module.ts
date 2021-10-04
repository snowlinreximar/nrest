import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import config from './config/keys'
import { JwtStrategy } from './auth/strategy/jwt.strategy';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(config.mongoURI), AuthModule, PassportModule],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
