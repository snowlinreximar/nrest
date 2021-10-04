import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './interfaces/auth.interface';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>, 
                private jwtService: JwtService) {}

    async signinLocal(auth: Auth) {
        
    
        const a_user = await this.userModel.findOne({ emailid: auth.emailid, password: auth.password});
        if (!a_user) throw new UnauthorizedException('Credentials incorrect');  
        return this.signUser(a_user.id, a_user.emailid, 'user');
        
        //return await this.userModel.findOne({password: user.password, emailid: user.emailid}).exec();
    }

    signUser(id: string, email: string, type: string ){
        return this.jwtService.sign({
            sub: id,
            email,
            claim: type
        })
    }

}
