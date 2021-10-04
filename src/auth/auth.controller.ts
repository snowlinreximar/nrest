import { Body, Controller, Post, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Auth } from './interfaces/auth.interface';
import { User } from './interfaces/user.interface';
import { AuthDto } from "./dto";
import { CreateUserDto } from './dto/create-user.dto';

@Controller()

export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @Post('local/signin')
    signinLocal(@Body() authDto: AuthDto) {
        return this.authService.signinLocal(authDto);
    }
}