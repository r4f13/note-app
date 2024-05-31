import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto, EditNoteDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAll(){
        return this.notesService.getAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getOne(@Param('id',ParseIntPipe) id:number){
        return this.notesService.getOne(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body(ValidationPipe) note:CreateNoteDto){
        return this.notesService.create({...note,author:{}});
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(":id")
    edit(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) noteUpdate:EditNoteDto){
        return this.notesService.edit(id,noteUpdate);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(":id")
    remove(@Param('id',ParseIntPipe) id:number){
        return this.notesService.remove(id);
    }
}
