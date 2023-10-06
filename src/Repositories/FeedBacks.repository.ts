import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import { Feedbacks, FeedbacksDocument } from 'src/Models/feedbacks.entity';
import { FeedBacksQueryDTO } from '@app/common/DTO/feedbacks-query.dto';

@Injectable()
export class FeedbacksRepository extends BaseRepositoryAbstract<FeedbacksDocument> {
  constructor(
    @InjectModel(Feedbacks.name)
    private readonly feedbacks_model: Model<FeedbacksDocument>,
  ) {
    super(feedbacks_model);
  }

  public async findAllByCompany(
    ComId: string,
    query: FeedBacksQueryDTO,
  ): Promise<FeedbacksDocument> {
    const [count, items] = await Promise.all([
      this.feedbacks_model.count({
        ...query.conditions,
        ComId: ComId,
        deleted_at: null,
      }),
      this.feedbacks_model
        .find({ ...query.conditions, ComId: ComId, deleted_at: null })
        .populate('feedBacks')
        .skip(query.skip)
        .limit(query.limit),
      ,
    ]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { count, items };
  }
}
