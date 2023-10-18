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
import { Users } from 'src/Models/Users.entity';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { PurchaseInformationRepository } from 'src/Repositories/PurchaseInformation.repository';

@Injectable()
export class PurchaseInformationService {
  constructor(
    private readonly purchaseInformationRepository: PurchaseInformationRepository,
    private readonly customerInformationRepository: CustomerInformationRepository,
  ) {}

  public async create(user: Users, data: PurchaseInformationCreateDTO) {
    data.ComId = user.ComId;
    const infoCustom = await this.customerInformationRepository.findOneById(
      data.idUser,
    );
    if (!infoCustom) throw new NotFoundException('cannot find customer by id');
    const information = await this.purchaseInformationRepository.create(data);
    infoCustom.purchases.push(information);
    infoCustom.save();
    return { ...information, secret: user.secret };
  }

  public async query(user: Users, query?: PurchaseInformationQueryDTO) {
    return {
      ...(await this.purchaseInformationRepository.findAllByCompany(
        user.ComId,
        query,
      )),
      secret: user.secret,
    };
  }

  public async getById(id: string, user: Users) {
    const purchase = await this.purchaseInformationRepository.findOneById(id);
    if (!purchase) throw new NotFoundException();
    console.log('service', { ...purchase, secret: user.secret });
    return { ...purchase, secret: user.secret };
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
    delete info.id;
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
