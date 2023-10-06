import { CustomerInformationCreateDTO } from '@app/common/DTO/customerInformation-create.dto';
import { CustomerInformationQueryDTO } from '@app/common/DTO/customerInformation-query.dto';
import { FeedBacksCreateDTO } from '@app/common/DTO/feedbacks-create.dto';
import { FeedBacksQueryDTO } from '@app/common/DTO/feedbacks-query.dto';
import { FeedBacksUpdateDTO } from '@app/common/DTO/feedbacks-update.dto';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Users } from 'src/Models/Users.entity';
import { CustomerInformationRepository } from 'src/Repositories/CustomerInformation.repository';
import { FeedbacksRepository } from 'src/Repositories/FeedBacks.repository';
import { PurchaseInformationRepository } from 'src/Repositories/PurchaseInformation.repository';

@Injectable()
export class FeedBacksService {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly customerInformationRepository: CustomerInformationRepository,
    private readonly purchaseInformationRepository: PurchaseInformationRepository,
  ) {}

  // public async create(user: Users, info: CustomerInformationCreateDTO) {
  //   this.customerInformationRepository.create(info);
  //   const feedbacks = new Feedbacks();
  //   feedbacks.comment = '123';
  //   feedbacks.product = '123';
  //   feedbacks.rate = 5;
  //   const model = Model<FeedbacksDocument>;
  //   model.create(Feedbacks);
  // }

  // public async query(user: Users, query?: CustomerInformationQueryDTO) {
  //   return this.customerInformationRepository.findAll(query);
  // }

  public async create(user: Users, data: FeedBacksCreateDTO) {
    data.ComId = user.ComId;
    const customer = await this.customerInformationRepository.findOneById(
      data.idInfo,
    );
    if (!customer) throw new ForbiddenException();
    const purchase = await this.purchaseInformationRepository.findOneById(
      data.idPurchase,
    );
    const feedback = await this.feedbacksRepository.create(data);
    customer.feedBacks = [...customer.feedBacks, feedback];
    await customer.save();
    purchase.feedBack = feedback;
    await purchase.save();
    return feedback;
  }

  private converStringToJson(obj) {
    try {
      return JSON.parse(<any>obj);
    } catch (ex) {
      return null;
    }
  }

  public async query(user: Users, query?: FeedBacksQueryDTO) {
    query.conditions = this.converStringToJson(query.conditions);
    return this.feedbacksRepository.findAllByCompany(user.ComId, query);
  }

  public async update(user: Users, feedBack: FeedBacksUpdateDTO) {
    const infoCustom = await this.feedbacksRepository.findOneById(feedBack.id);
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    const customer = await this.customerInformationRepository.findOneById(
      feedBack.idInfo,
    );
    if (!customer) throw new ForbiddenException();
    const purchase = await this.purchaseInformationRepository.findOneById(
      feedBack.idPurchase,
    );
    await this.feedbacksRepository.update(feedBack.id, {
      ...feedBack,
      isHidden: true,
    });
    const newFeedBack = await this.create(user, feedBack);
    customer.feedBacks = [
      ...customer.feedBacks.filter((item) => item.id !== feedBack.id),
      newFeedBack,
    ];
    purchase.feedBack = newFeedBack;
    await customer.save();
    await purchase.save();
    return newFeedBack;
  }

  public async deleteFeedbacks(user: Users, id: string) {
    const infoCustom = await this.feedbacksRepository.findOneById(id);
    if (!infoCustom) throw new NotFoundException();
    if (infoCustom.ComId !== user.ComId) throw new ForbiddenException();
    return this.feedbacksRepository.softDelete(id);
  }
}
