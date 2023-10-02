import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryAbstract } from './base.repository';
import { Expenses, ExpensesDocument } from 'src/Models/expenses.entity';

@Injectable()
export class ExpensesRepository extends BaseRepositoryAbstract<ExpensesDocument> {
  constructor(
    @InjectModel(Expenses.name)
    private readonly expenses: Model<ExpensesDocument>,
  ) {
    super(expenses);
  }
}
