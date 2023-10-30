import { FeedBacksCreateDTO } from '@app/common/DTO/feedbacks-create.dto';
import { FeedBacksQueryDTO } from '@app/common/DTO/feedbacks-query.dto';
import { FeedBacksUpdateDTO } from '@app/common/DTO/feedbacks-update.dto';
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
import { ACTION, SUBJECT, TYPEROLE } from 'src/Models/Roles.entity';
import { Users } from 'src/Models/Users.entity';
import { FeedBacksService } from 'src/Services/FeedBacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedBacksService) {}

  @Get()
  @Roles({ action: ACTION.GET, subject: SUBJECT.feedBacks })
  query(@User() user: Users, @Query() query?: FeedBacksQueryDTO) {
    return this.feedbacksService.query(user, query);
  }

  @Get(':id')
  @Roles({ action: ACTION.GET, subject: SUBJECT.customer })
  getById(@Param('id') id: string, @User() user: Users) {
    return this.feedbacksService.getById(id, user);
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
