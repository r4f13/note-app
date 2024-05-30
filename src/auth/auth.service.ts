import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
    constructor(private readonly databaseService: DatabaseService){}

    async signup(dto:AuthDto){
        try{
            const hash = await argon.hash(dto.password);
            const user =  await this.databaseService.user.create({
                data: {
                    username:dto.username,
                    hash
                }
            });
            delete user.hash;
            return user;
        }catch(error){
           if(error instanceof PrismaClientKnownRequestError && error.code=="P2002")throw new ForbiddenException("Username is taken");
            throw error;
        } 
    }

    async signin(dto:AuthDto){
        const user = await this.databaseService.user.findUnique({
            where:{username:dto.username}
        })
        if(!user)throw new ForbiddenException("Username or password is incorrect");

        const match=await argon.verify(user.hash,dto.password);
        if(!match)throw new ForbiddenException("Username or password is incorrect");

        delete user.hash;
        return user;
    }
}
