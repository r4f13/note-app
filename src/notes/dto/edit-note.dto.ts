import { CreateNoteDto } from "./create-note.dto";
import { PartialType } from "@nestjs/swagger";

export class EditNoteDto extends PartialType(CreateNoteDto){}