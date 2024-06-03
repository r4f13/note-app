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
    getAll(@User('sub') userId:number){
        return this.notesService.getAll(userId);
    }

    @UseGuards(JwtGuard)
    @Get(':noteId')
    getOne( @User('sub') userId:number,@Param('noteId',ParseIntPipe) noteId:number){
        return this.notesService.getOne(userId,noteId);
    }

    @UseGuards(JwtGuard)
    @Post()
    create(@User('sub') userId:number,@Body(ValidationPipe) dto:CreateNoteDto){
        return this.notesService.create(userId,dto);
    }

    @UseGuards(JwtGuard)
    @Patch(':noteId')
    edit(@User('sub') userId:number,@Param('noteId',ParseIntPipe) noteId:number,@Body(ValidationPipe) noteUpdate:EditNoteDto){
        return this.notesService.edit(userId,noteId,noteUpdate);
    }

    @UseGuards(JwtGuard)
    @Delete(':noteId')
    remove( @User('sub') userId:number,@Param('noteId',ParseIntPipe) noteId:number){
        return this.notesService.remove(userId,noteId);
    }
}
