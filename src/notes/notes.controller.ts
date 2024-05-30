import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Prisma } from '@prisma/client';
import { CreateNoteDto, EditNoteDto } from './dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Get()
    getAll(){
        return this.notesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id',ParseIntPipe) id:number){
        return this.notesService.getOne(id);
    }


    @Post()
    create(@Body(ValidationPipe) note:CreateNoteDto){
        return this.notesService.create(note);
    }

    @Patch(":id")
    edit(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) noteUpdate:EditNoteDto){
        return this.notesService.edit(id,noteUpdate);
    }

    @Delete(":id")
    remove(@Param('id',ParseIntPipe) id:number){
        return this.notesService.remove(id);
    }
}
