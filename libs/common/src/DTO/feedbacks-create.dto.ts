import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FeedBacksCreateDTO {
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
    description: 'ngày sinh nhật',
  })
  @IsNotEmpty()
  brithDay: string;

  @ApiProperty({
    example: '',
    description: 'giới tính',
  })
  @IsNotEmpty()
  gender: string;

  @ApiProperty({
    example: '',
    description: 'địa chỉ',
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
    description: 'danh sách email',
  })
  @IsNotEmpty()
  emails: string[];

  @ApiProperty({
    example: '',
    description: 'danh sách số điện thoại',
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
    description: 'công việc',
  })
  @IsNotEmpty()
  jobs: string;
}
