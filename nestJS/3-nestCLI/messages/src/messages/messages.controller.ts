import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }
  @Get()
  getAllMessages() {
    return this.messagesService.findAll();
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    return this.messagesService.createOne(body.message);
  }
}
