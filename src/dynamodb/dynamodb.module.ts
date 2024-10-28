import { Module } from '@nestjs/common';
import { DynamoDBService } from './services/dynamodb.service';
import { DynamoDBController } from './controllers/dynamodb.controller';

@Module({
  controllers:[DynamoDBController],
  providers: [DynamoDBService],
  exports: [DynamoDBService],
})
export class DynamoDBModule {}