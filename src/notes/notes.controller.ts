import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto, EditNoteDto } from './dto';
import { User } from 'src/auth/decorator/user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService){}

    @UseGuards(JwtGuard)
    @Get()
    getAll(@User() user){
        return this.notesService.getAll();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    getOne(@Param('id',ParseIntPipe) id:number){
        return this.notesService.getOne(id);
    }

    @UseGuards(JwtGuard)
    @Post()
    create(@Body(ValidationPipe) note:CreateNoteDto){
        return this.notesService.create({...note,author:{}});
    }

    @UseGuards(JwtGuard)
    @Patch(":id")
    edit(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) noteUpdate:EditNoteDto){
        return this.notesService.edit(id,noteUpdate);
    }

    @UseGuards(JwtGuard)
    @Delete(":id")
    remove(@Param('id',ParseIntPipe) id:number){
        return this.notesService.remove(id);
    }
}
