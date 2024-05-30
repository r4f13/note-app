import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { authDto } from './dto';

@Controller('auth')
export class AuthController {
    @Post()
    signup(@Body(ValidationPipe) dto:authDto){
        return dto;
    }
    signin(@Body(ValidationPipe) dto:authDto){
        return dto;
    }
}
