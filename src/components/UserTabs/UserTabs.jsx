import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExpenseIncomeForm from 'components/ExpenseIncomeForm/ExpenseIncomeForm';
import Table from 'components/Table/Table';
import {
  expenseList,
  expensePlaceholder,
} from 'components/ExpenseIncomeForm/expenseList';
import {
  incomeList,
  incomePlaceholder,
} from 'components/ExpenseIncomeForm/incomeList';
import 'react-tabs/style/react-tabs.css';
import Summary from 'components/Summary/Summary';

const UserTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Расход</Tab>
      <Tab>Доход</Tab>
    </TabList>

    <TabPanel>
      <ExpenseIncomeForm list={expenseList} placeholder={expensePlaceholder} />
      <Table/>
      <Summary />
    </TabPanel>
    <TabPanel>
      <ExpenseIncomeForm list={incomeList} placeholder={incomePlaceholder} />
       <Table/>
      <Summary />
    </TabPanel>
  </Tabs>
);

export default UserTabs;
