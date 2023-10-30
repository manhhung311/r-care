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
    await infoCustom.save();
    information.customer = infoCustom;
    await information.save();
    const newInfomationCustom = await (
      await this.customerInformationRepository.findOneById(data.idUser)
    ).populate([{ path: 'feedBacks' }, { path: 'purchases' }]);
    return {
      ...newInfomationCustom,
      _doc: {
        ...(<any>newInfomationCustom)._doc,
        star:
          newInfomationCustom.feedBacks.reduce((n, { rate }) => n + rate, 0) /
            newInfomationCustom.feedBacks.length || 0,
      },
      secret: user.secret,
    };
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
    const newInfomationCustom = await (
      await this.customerInformationRepository.findOneById(info.idUser)
    ).populate([{ path: 'feedBacks' }, { path: 'purchases' }]);
    await this.create(user, info);
    return {
      ...newInfomationCustom,
      _doc: {
        ...(<any>newInfomationCustom)._doc,
        star:
          newInfomationCustom.feedBacks.reduce((n, { rate }) => n + rate, 0) /
            newInfomationCustom.feedBacks.length || 0,
      },
    };
  }

  public async deletePurchase(user: Users, id: string) {
    const infoCustom = await this.purchaseInformationRepository.findOneById(id);
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    return this.purchaseInformationRepository.softDelete(id);
  }
}
