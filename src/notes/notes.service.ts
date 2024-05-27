import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
    private notes=[
        {
            id:1,
            title:"First note",
            content:"This is the first note"
        },
        {
            id:2,
            title:"Second note",
            content:"This is the second note"
        },
        {
            id:3,
            title:"Third note",
            content:"This is the third note"
        }
    ]
    
    getAll(){
        return this.notes;
    }

    create(note:{title:string,content:string}){
        const id=this.notes.reduce((highest,now)=>{
            return now.id>highest?now.id:highest;
        },0)+1;

        this.notes.push({id,...note})
        return this.notes;
    }

    edit(id:number,note){
        this.notes=this.notes.map(n=>n.id==id?{...n,...note}:n)
        return this.notes;
    }

    remove(id:number){
        this.notes=this.notes.filter(n=>n.id!=id)
        return this.notes;
    }
}
