import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('signup')
    signup(@Body(ValidationPipe) dto:AuthDto){
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body(ValidationPipe) dto:AuthDto){
        return this.authService.signin(dto);
    }
}
