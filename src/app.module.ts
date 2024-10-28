import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoDBModule } from './dynamodb/dynamodb.module';

@Module({
  imports: [DynamoDBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
