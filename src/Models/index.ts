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
import { Users, UsersSchema } from './Users.entity';
import { Roles, RolesSchema } from './Roles.entity';

type Schema = {
  name: string;
  schema: any;
};
const entities: Schema[] = [
  { name: CustomerInformation.name, schema: CustomerInformationSchema },
  { name: Expenses.name, schema: ExpensesSchema },
  { name: Feedbacks.name, schema: FeedbacksSchema },
  { name: PurchaseInformation.name, schema: PurchaseInformationSchema },
  { name: Users.name, schema: UsersSchema },
  { name: Roles.name, schema: RolesSchema },
];

export default entities;
