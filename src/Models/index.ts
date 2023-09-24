import {
  CustomerInformation,
  CustomerInformationSchema,
} from './CustomerInformation.entity';
import {
  PurchaseInformation,
  PurchaseInformationSchema,
} from './PurchaseInformation.entity';
import { Expenses, ExpensesSchema } from './expenses.entity';
import { Feedbacks, FeedbacksSchema } from './feedbacks.entity';
import { Updates, UpdatesSchema } from './updates.entity';
import { Users, UsersSchema } from './users.entity';

type Schema = {
  name: string;
  schema: any;
};
const entities: Schema[] = [
  { name: CustomerInformation.name, schema: CustomerInformationSchema },
  { name: Expenses.name, schema: ExpensesSchema },
  { name: Feedbacks.name, schema: FeedbacksSchema },
  { name: PurchaseInformation.name, schema: PurchaseInformationSchema },
  { name: Updates.name, schema: UpdatesSchema },
  { name: Users.name, schema: UsersSchema },
];

export default entities;
