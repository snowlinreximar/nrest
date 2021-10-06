import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/strategy/jwt.strategy';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('/products')
  @UseGuards(AuthGuard('jwt')) 
  getProducts(): string {
    return this.appService.getProducts();
  }
}
