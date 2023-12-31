import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CustomerInformationCreateDTO {
  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  brithDay: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  wards: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  district: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  province: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  country: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  email: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  phoneNumber: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  jobs: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  income: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  facebook: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  linked: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  instagram: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  website: string;

  ComId?: string;
}
