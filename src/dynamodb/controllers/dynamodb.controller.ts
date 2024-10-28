import { Controller, Get, Post, Body } from '@nestjs/common';
import { DynamoDBService } from '../services/dynamodb.service';

@Controller('dynamodb')
export class DynamoDBController {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  @Post('add')
  async addItem(@Body() item: Record<string, any>) {
    return await this.dynamoDBService.putItem('Test', item);
  }

  @Get('get')
  async getItem(@Body() key: Record<string, any>) {
    console.log('test')
    return await this.dynamoDBService.getItem('Test', key);
  }
}