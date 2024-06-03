import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { CreateNoteDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class NotesService {
    constructor(private readonly databaseService: DatabaseService) { }
    
    async getAll(authorId:number){
        return await this.databaseService.note.findMany({where:{authorId}})
    }

    async getOne(authorId:number,id:number){
        const note=await this.databaseService.note.findUnique({
            where:{authorId,id}
        })
        if(!note)throw new NotFoundException("Note not found");
        return note;
    }

    async create(authorId:number,dto:CreateNoteDto){
        return this.databaseService.note.create({
            data: {
              ...dto,
              author:{connect:{id:authorId}}
            }
          })
    }

    async edit(authorId:number,id:number,dto:Prisma.NoteUpdateInput){
      try{
        return await this.databaseService.note.update({
            where: {
              id,
              authorId
            },
            data: dto,
          })
      }catch(error){
        if(error instanceof PrismaClientKnownRequestError && error.code=="P2025")throw new NotFoundException("Note not found");
        return error;
      }
    }

    async remove(authorId:number,id:number){
      try{
        return await this.databaseService.note.delete({
            where: {
              id,
              authorId
            }
          })
      }catch(error){
        if(error instanceof PrismaClientKnownRequestError && error.code=="P2025")throw new NotFoundException("Note not found");
        return error;
      }
    }
}
