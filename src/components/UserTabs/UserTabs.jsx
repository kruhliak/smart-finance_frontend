import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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


const UserTabs = ({ onClickModal }) => {
  const state = useSelector(state => state.finance.operations)
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();

useEffect(() => {
  state.length > 0 && state.map(i => 
  i.operation === 'income' ? setIncome(i) : setExpense(i)
  )

}, [state])

  return (
  <Tabs>
    <TabList>
      <Tab>Расход</Tab>
      <Tab>Доход</Tab>
    </TabList>

    <TabPanel>
      <ExpenseIncomeForm list={expenseList} placeholder={expensePlaceholder} operationType={'expense'}/>
        <Table onClickModal={onClickModal} operation={expense} color={ true}/>
      <Summary />
    </TabPanel>
    <TabPanel>
      <ExpenseIncomeForm list={incomeList} placeholder={incomePlaceholder}  operationType={'income'}/>
       <Table onClickModal={ onClickModal} operation={income} color={false}/>
      <Summary />
    </TabPanel>
  </Tabs>
)
};

export default UserTabs;
