import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesModule } from './notes/notes.module';
import { NotesService } from './notes/notes.service';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [NotesModule, DatabaseModule],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService, DatabaseService],
})
export class AppModule {}
