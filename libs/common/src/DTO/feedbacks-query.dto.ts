import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';

export class QueryDTO {
  lastName: string;
}
export class FeedBacksQueryDTO {
  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  conditions?: QueryDTO;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  skip?: number;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  limit?: number;
}
