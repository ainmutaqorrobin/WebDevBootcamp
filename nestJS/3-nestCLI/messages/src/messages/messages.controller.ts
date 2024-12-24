import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return [];
  }
  @Get('/:id')
  getMessage(id: number) {
    return `this is message for id ${id}`;
  }

  @Post()
  createMessage(payload) {
    console.log(payload);
  }
}
