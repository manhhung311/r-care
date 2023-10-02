import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserCreateDTO {
  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  UserAvatar: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  UserId: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  ComId: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  GroupId: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  FullName: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  ComName: string;

  @ApiProperty({
    example: '',
    description: 'asaa',
  })
  @IsNotEmpty()
  UserRole: string;
}
