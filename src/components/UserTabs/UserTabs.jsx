import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExpenseIncomeForm from 'components/ExpenseIncomeForm/ExpenseIncomeForm';
import { expenseList, expensePlaceholder} from 'components/ExpenseIncomeForm/expenseList';
import { incomeList, incomePlaceholder }  from 'components/ExpenseIncomeForm/incomeList';

import 'react-tabs/style/react-tabs.css';

const UserTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Расход</Tab>
      <Tab>Доход</Tab>
    </TabList>

    <TabPanel>
     <ExpenseIncomeForm list={expenseList} placeholder={expensePlaceholder}/>
    </TabPanel>
    <TabPanel>
     <ExpenseIncomeForm list={incomeList} placeholder={incomePlaceholder}/>

    </TabPanel>
  </Tabs>
);

export default UserTabs;