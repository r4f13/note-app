import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { DatabaseModule } from './database/database.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NotesModule, DatabaseModule,ThrottlerModule.forRoot([{
    ttl: 200,
    limit: 1
  }]), AuthModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }
  ],
})
export class AppModule {}
