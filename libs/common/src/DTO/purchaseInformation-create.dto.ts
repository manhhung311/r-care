import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PurchaseInformationCreateDTO {
  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  product: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  currencyUnit: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  describe: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  unit: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  transportFee: number;

  ComId: string;
}
