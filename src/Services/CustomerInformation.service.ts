import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { CustomerInformationUpdateDTO } from '@app/common/DTO/customerInformation-update.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Users } from 'src/Models/Users.entity';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { FeedbacksRepository } from 'src/Repositories/FeedBacks.repository';

@Injectable()
export class CustomerInformationService {
  constructor(
    private readonly customerInformationRepository: CustomerInformationRepository,
    private readonly feedbacksRepository: FeedbacksRepository,
  ) {}

  public async create(user: Users, info: CustomerInformationCreateDTO) {
    info.ComId = user.ComId;
    const information = await this.customerInformationRepository.create(info);
    return { ...information, secret: user.secret };
  }

  public async query(user: Users, query?: CustomerInformationQueryDTO) {
    const { skip, limit, ...data } = query;
    const infoCustom =
      await this.customerInformationRepository.findAllByCompany(
        skip,
        limit,
        data,
        user.ComId,
      );
    const info = infoCustom.items.map((item) => {
      return {
        ...item,
        _doc: {
          ...(<any>item)._doc,
          star:
            item.feedBacks.reduce((n, { rate }) => n + rate, 0) /
              item.feedBacks.length || 0,
        },
      };
    });
    return {
      ...infoCustom,
      items: info,
      secret: user.secret,
    };
  }

  public async getById(id: string, user: Users) {
    const customer = await this.customerInformationRepository.findOneById(id);
    if (!customer) throw new NotFoundException();
    const customerData = await customer.populate([
      { path: 'feedBacks' },
      { path: 'purchases' },
    ]);
    return {
      ...customerData,
      _doc: {
        ...(<any>customerData)._doc,
        star:
          customerData.feedBacks.reduce((n, { rate }) => n + rate, 0) /
            customerData.feedBacks.length || 0,
      },
      secret: user.secret,
    };
  }

  public async update(user: Users, info: CustomerInformationUpdateDTO) {
    const infoCustom = await this.customerInformationRepository.findOneById(
      info.id,
    );
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    await this.customerInformationRepository.update(info.id, {
      ...info,
      isHidden: true,
    });
    delete info.id;
    const newInfo = await this.create(user, info);
    return {
      ...newInfo,
      _doc: {
        ...(<any>newInfo)._doc,
        star:
          newInfo.feedBacks.reduce((n, { rate }) => n + rate, 0) /
            newInfo.feedBacks.length || 0,
      },
      secret: user.secret,
    };
  }

  public async deleteCustom(user: Users, idInfo: string) {
    const infoCustom = await this.customerInformationRepository.findOneById(
      idInfo,
    );
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    return this.customerInformationRepository.softDelete(idInfo);
  }
}
