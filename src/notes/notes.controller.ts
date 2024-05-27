import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { EditNoteDto } from './dto/edit-note.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @Get()
    getAll(){
        return this.notesService.getAll();
    }

    @Post()
    create(@Body(ValidationPipe) note:CreateNoteDto){
        return this.notesService.create(note);
    }

    @Patch(":id")
    edit(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) note:EditNoteDto){
        return this.notesService.edit(id,note);
    }

    @Delete(":id")
    remove(@Param('id',ParseIntPipe) id:number){
        return this.notesService.remove(id);
    }
}
