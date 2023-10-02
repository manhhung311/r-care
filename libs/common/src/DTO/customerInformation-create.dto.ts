import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CustomerInformationCreateDTO {
  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  firstName: string;

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
  @IsNotEmpty()
  emails: string[];

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  phoneNumber: string[];

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  linkSocial: string[];

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  jobs: string;

  ComId?: string;
}
