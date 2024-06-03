import { IsString,IsNotEmpty, IsNumber } from "class-validator";

export class CreateNoteDto{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    content: string;
}