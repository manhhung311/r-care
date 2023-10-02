import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CustomerInformationCreateDTO } from './customerInformation-create.dto';

export class CustomerInformationUpdateDTO extends CustomerInformationCreateDTO {
  @ApiProperty({
    example: '',
    description: 'id khach hang',
  })
  @IsNotEmpty()
  id: string;
}
