import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NotesService {
    constructor(private readonly databaseService: DatabaseService) { }
    
    async getAll(){
        return this.databaseService.note.findMany()
    }

    async getOne(id:number){
        return this.databaseService.note.findUnique({
            where:{id}
        })
    }

    async create(note:Prisma.NoteCreateInput){
        return this.databaseService.note.create({
            data: note
          })
    }

    async edit(id:number,noteUpdate:Prisma.NoteUpdateInput){
        return this.databaseService.note.update({
            where: {
              id,
            },
            data: noteUpdate,
          })
    }

    async remove(id:number){
        return this.databaseService.note.delete({
            where: {
              id,
            }
          })
    }
}
