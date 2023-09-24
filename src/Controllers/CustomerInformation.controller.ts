import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CustomerInformationService } from 'src/Services/CustomerInformation.service';

@Controller('customerInformation')
export class CustomerInformationController {
  constructor(
    private readonly customerInformationService: CustomerInformationService,
  ) {}

  @Get()
  query(@Query() query?: CustomerInformationQueryDTO) {
    return this.customerInformationService.query(query);
  }

  @Post()
  async create(@Body() data: CustomerInformationCreateDTO) {
    return this.customerInformationService.create(data);
  }
}
