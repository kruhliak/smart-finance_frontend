import React from 'react';
import styled from '@emotion/styled/macro';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
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
import { device } from 'components/options/device';

//............
const STabs = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
  `;
const STabList = styled(TabList)`
  margin: 0!important;
  border-bottom: none!important;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  display: inline-block;
  list-style: none;
  padding: 11px 44.5px!important;  
  cursor: pointer; //-
  font-size: 0.75rem; //+
  font-weight: 700; //+
  text-transform: uppercase; //+
  line-height: 17px; //+
  color: var(--black-text-color); //+
  background: linear-gradient(
    270deg,
    rgba(250, 251, 253, 1) 0%,
    rgba(239, 239, 239, 1) 100%
  ); //+
  border-top-left-radius: 19px; //+
  border-top-right-radius: 19px; //+

  &.--selected {
      background: #FEFEFE; //+
      color: var(--accent-color); //+
    }

  &.is-disabled {
    color: #eee;
    cursor: default;
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  background: var(--white-text-color);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;
  
  @media ${device.tablet} {
    padding: 28px 30px 48px 30px;
  }
  @media ${device.desktop} {
    padding: 33px 20px 61px 20px;
  }
  &.--selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';


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
    <STabs selectedTabClassName='--selected'
    selectedTabPanelClassName='--selected'>
    <STabList>
      <STab>Расход</STab>
      <STab>Доход</STab>
    </STabList>

    <STabPanel>
      <ExpenseIncomeForm list={expenseList} placeholder={expensePlaceholder} operationType={'expense'}/>
        <Table onClickModal={onClickModal} operation={expense} color={ true}/>
      <Summary />
    </STabPanel>
    <STabPanel>
      <ExpenseIncomeForm list={incomeList} placeholder={incomePlaceholder}  operationType={'income'}/>
       <Table onClickModal={ onClickModal} operation={income} color={false}/>
      <Summary />
    </STabPanel>
  </STabs>
)
};

export default UserTabs;