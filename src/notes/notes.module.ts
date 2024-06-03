import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { DatabaseService } from 'src/database/database.service';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

@Module({
  controllers: [NotesController],
  providers: [NotesService,DatabaseService,JwtStrategy]
})
export class NotesModule {}
