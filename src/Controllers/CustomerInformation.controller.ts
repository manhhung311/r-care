import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Roles } from 'src/Decorators/roles.decorator';
import { User } from 'src/Decorators/users.decorator';
import { ACTION, SUBJECT } from 'src/Models/Roles.entity';
import { Users } from 'src/Models/Users.entity';
import { CustomerInformationService } from 'src/Services/CustomerInformation.service';

@Controller('customerInformation')
export class CustomerInformationController {
  constructor(
    private readonly customerInformationService: CustomerInformationService,
  ) {}

  @Get()
  @Roles({ action: ACTION.GET, subject: SUBJECT.customer })
  query(@User() user: Users, @Query() query?: CustomerInformationQueryDTO) {
    return this.customerInformationService.query(user, query);
  }

  @Post()
  @Roles({ action: ACTION.CREATE, subject: SUBJECT.customer })
  async create(
    @User() user: Users,
    @Body() data: CustomerInformationCreateDTO,
  ) {
    return this.customerInformationService.create(user, data);
  }
}
