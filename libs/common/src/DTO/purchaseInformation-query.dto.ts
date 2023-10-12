import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';

export class PurchaseInformationQueryDTO {
  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  skip: number;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  limit: number;
}
