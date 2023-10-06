import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { PurchaseInformationCreateDTO } from './purchaseInformation-create.dto';

export class PurchaseInformationUpdateDTO extends PurchaseInformationCreateDTO {
  @ApiProperty({
    example: '',
    description: 'id khach hang',
  })
  @IsNotEmpty()
  id: string;
}
