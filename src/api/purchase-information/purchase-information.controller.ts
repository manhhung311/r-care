import { PurchaseInformationCreateDTO } from '@app/common/DTO/purchaseInformation-create.dto';
import { PurchaseInformationQueryDTO } from '@app/common/DTO/purchaseInformation-query.dto';
import { PurchaseInformationUpdateDTO } from '@app/common/DTO/purchaseInformation-update.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { User } from 'src/Decorators/users.decorator';
import { Roles } from 'src/Decorators/roles.decorator';
import { ACTION, SUBJECT } from 'src/Models/Roles.entity';
import { Users } from 'src/Models/Users.entity';
import { PurchaseInformationService } from 'src/Services/PurchaseInformation.service';

@Controller('PurchaseInformation')
export class PurchaseInformationController {
  constructor(
    private readonly purchaseInformationService: PurchaseInformationService,
  ) {}

  @Get()
  @Roles({ action: ACTION.GET, subject: SUBJECT.purchase })
  query(@User() user: Users, @Query() query?: PurchaseInformationQueryDTO) {
    return this.purchaseInformationService.query(user, query);
  }

  @Get(':id')
  @Roles({ action: ACTION.GET, subject: SUBJECT.customer })
  getById(@Param('id') id: string, @User() user: Users) {
    return this.purchaseInformationService.getById(id, user);
  }

  @Post()
  @Roles({ action: ACTION.CREATE, subject: SUBJECT.purchase })
  create(@User() user: Users, @Body() data: PurchaseInformationCreateDTO) {
    return this.purchaseInformationService.create(user, data);
  }

  @Put()
  @Roles({ action: ACTION.UPDATE, subject: SUBJECT.purchase })
  update(@User() user: Users, @Body() data: PurchaseInformationUpdateDTO) {
    return this.purchaseInformationService.update(user, data);
  }

  @Delete()
  @Roles({ action: ACTION.DELETE, subject: SUBJECT.purchase })
  deleteInfo(@User() user: Users) {
    //
  }
}
