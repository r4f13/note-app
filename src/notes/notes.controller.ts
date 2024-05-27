import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Get()
    getAll(){
        return this.notesService.getAll();
    }

    @Post()
    create(@Body() note:{title:string,content:string}){
        return this.notesService.create(note);
    }

    @Patch(":id")
    edit(@Param('id') id:number,@Body() note:{title:string,content:string}){
        return this.notesService.edit(id,note);
    }

    @Delete(":id")
    remove(@Param('id') id:number){
        return this.notesService.remove(id);
    }
}
