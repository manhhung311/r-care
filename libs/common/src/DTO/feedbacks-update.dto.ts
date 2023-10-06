import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { FeedBacksCreateDTO } from './feedbacks-create.dto';

export class FeedBacksUpdateDTO extends FeedBacksCreateDTO {
  @ApiProperty({
    example: '',
    description: 'id khach hang',
  })
  @IsNotEmpty()
  id: string;
}
