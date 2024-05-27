import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [NotesModule],
  controllers: [AppController, NotesController],
  providers: [AppService],
})
export class AppModule {}
