import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('notes')
export class NotesController {
    @Get()
    getAll(){
        return "get all"
    }

    @Post()
    upload(@Body() note:{}){
        return note;
    }
}
