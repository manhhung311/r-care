import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FeedBacksCreateDTO {
  @ApiProperty({
    example: '',
    description: '',
  })
  @IsNotEmpty()
  idInfo: string;

  @ApiProperty({
    example: '',
    description: '',
  })
  @IsNotEmpty()
  idPurchase: string;

  @ApiProperty({
    example: '',
    description: 'tên sản phẩm',
  })
  @IsNotEmpty()
  product: string;

  @ApiProperty({
    example: '',
    description: 'nhận xét của khách hàng',
  })
  @IsNotEmpty()
  comment: string;

  @ApiProperty({
    example: '',
    description: 'khuyên nghị của khách hàng',
  })
  @IsNotEmpty()
  recommendations: string;

  @ApiProperty({
    example: '',
    description: 'gợi ý của khách hàng cho sản phẩm',
  })
  @IsNotEmpty()
  suggestion: string;

  @ApiProperty({
    example: '',
    description: 'số sao đánh giá 1 - 5',
  })
  @IsNotEmpty()
  rate: number;

  ComId: string;
}
