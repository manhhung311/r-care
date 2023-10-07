import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { CustomerInformationUpdateDTO } from '@app/common/DTO/customerInformation-update.dto';
import { FeedBacksCreateDTO } from '@app/common/DTO/feedbacks-create.dto';
import { FeedBacksUpdateDTO } from '@app/common/DTO/feedbacks-update.dto';
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
import { ACTION, SUBJECT, TYPEROLE } from 'src/Models/Roles.entity';
import { Users } from 'src/Models/users.entity';
import { FeedBacksService } from 'src/Services/FeedBacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedBacksService) {}

  @Get()
  @Roles({ action: ACTION.GET, subject: SUBJECT.feedBacks })
  query(@User() user: Users, @Query() query?: CustomerInformationQueryDTO) {
    return this.feedbacksService.query(user, query);
  }

  @Post()
  @Roles({ action: ACTION.CREATE, subject: SUBJECT.feedBacks })
  create(@User() user: Users, @Body() data: FeedBacksCreateDTO) {
    return this.feedbacksService.create(user, data);
  }

  @Put()
  @Roles({ action: ACTION.UPDATE, subject: SUBJECT.feedBacks })
  update(@User() user: Users, @Body() data: FeedBacksUpdateDTO) {
    return this.feedbacksService.update(user, data);
  }

  @Delete()
  @Roles({
    role: TYPEROLE.ADMIN,
    action: ACTION.DELETE,
    subject: SUBJECT.feedBacks,
  })
  deleteInfo(@User() user: Users) {
    //
  }
}
