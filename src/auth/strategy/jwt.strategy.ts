import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { PassportModule } from "@nestjs/passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true,
          secretOrKey: 'super-dumb-secret',
        });
      }
    
      async validate(payload: any) {
        console.log('validate()', payload); 
        return payload;
        //return { userId: payload.sub, username: payload.username };
      }
    
}