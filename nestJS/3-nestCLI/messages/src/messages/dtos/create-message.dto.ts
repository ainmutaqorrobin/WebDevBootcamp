import { IsString } from 'class-validator';

export class CreateMessageDTO {
  @IsString()
  message: string;
}
