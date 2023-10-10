import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { CustomerInformationUpdateDTO } from '@app/common/DTO/customerInformation-update.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// import axios from 'axios';
import { Roles } from 'src/Decorators/roles.decorator';
import { User } from 'src/Decorators/users.decorator';
import { ACTION, SUBJECT, TYPEROLE } from 'src/Models/Roles.entity';
import { Users } from 'src/Models/Users.entity';
import { CustomerInformationService } from 'src/Services/CustomerInformation.service';

@Controller('mangament')
export class MangamentController {
  constructor() {}

  @Get()
  @Roles({
    role: TYPEROLE.ADMIN,
    action: ACTION.GET,
    subject: SUBJECT.customer,
  })
  getAllUser(@User() user: Users) {
    // return axios.get('');
  }

  @Post()
  @Roles({ action: ACTION.CREATE, subject: SUBJECT.customer })
  create(@User() user: Users, @Body() data: CustomerInformationCreateDTO) {
    // return this.customerInformationService.create(user, data);
  }

  @Put()
  @Roles({ action: ACTION.UPDATE, subject: SUBJECT.customer })
  update(@User() user: Users, @Body() data: CustomerInformationUpdateDTO) {
    // return this.customerInformationService.update(user, data);
  }

  @Delete()
  @Roles({ action: ACTION.DELETE, subject: SUBJECT.customer })
  deleteInfo(@User() user: Users) {
    //
  }
}
