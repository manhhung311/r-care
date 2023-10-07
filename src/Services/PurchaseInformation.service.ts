import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { CustomerInformationUpdateDTO } from '@app/common/DTO/customerInformation-update.dto';
import { PurchaseInformationCreateDTO } from '@app/common/DTO/purchaseInformation-create.dto';
import { PurchaseInformationQueryDTO } from '@app/common/DTO/purchaseInformation-query.dto';
import { PurchaseInformationUpdateDTO } from '@app/common/DTO/purchaseInformation-update.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Users } from 'src/Models/users.entity';
import { PurchaseInformationRepository } from 'src/Repositories/PurchaseInformation.repository';

@Injectable()
export class PurchaseInformationService {
  constructor(
    private readonly purchaseInformationRepository: PurchaseInformationRepository,
  ) {}

  public async create(user: Users, data: PurchaseInformationCreateDTO) {
    data.ComId = user.ComId;
    const information = await this.purchaseInformationRepository.create(data);
    return information;
  }

  private converStringToJson(obj) {
    try {
      return JSON.parse(<any>obj);
    } catch (ex) {
      return null;
    }
  }

  public async query(user: Users, query?: PurchaseInformationQueryDTO) {
    query.conditions = this.converStringToJson(query.conditions);
    return this.purchaseInformationRepository.findAllByCompany(
      user.ComId,
      query,
    );
  }

  public async update(user: Users, info: PurchaseInformationUpdateDTO) {
    const infoCustom = await this.purchaseInformationRepository.findOneById(
      info.id,
    );
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    await this.purchaseInformationRepository.update(info.id, {
      ...info,
      isHidden: true,
    });
    const newInfo = await this.create(user, info);
    return newInfo;
  }

  public async deletePurchase(user: Users, id: string) {
    const infoCustom = await this.purchaseInformationRepository.findOneById(id);
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    return this.purchaseInformationRepository.softDelete(id);
  }
}
