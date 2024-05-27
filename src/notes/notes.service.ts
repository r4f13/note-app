import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
    private notes=[
        {
            id:1,
            title:"First note",
            content:"This is the first note"
        }
    ]
    
    getAll(){
        return this.notes;
    }
}
