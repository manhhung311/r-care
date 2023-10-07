import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { CustomerInformationUpdateDTO } from '@app/common/DTO/customerInformation-update.dto';
import { PurchaseInformationCreateDTO } from '@app/common/DTO/purchaseInformation-create.dto';
import { PurchaseInformationQueryDTO } from '@app/common/DTO/purchaseInformation-query.dto';
import { PurchaseInformationUpdateDTO } from '@app/common/DTO/purchaseInformation-update.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Roles } from 'src/Decorators/roles.decorator';
import { User } from 'src/Decorators/users.decorator';
import { ACTION, SUBJECT } from 'src/Models/Roles.entity';
import { Users } from 'src/Models/users.entity';
import { CustomerInformationService } from 'src/Services/CustomerInformation.service';
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
