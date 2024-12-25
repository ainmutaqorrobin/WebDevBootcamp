import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return [];
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(typeof id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    console.log(body);
  }
}
