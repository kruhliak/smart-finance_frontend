import { useSelector } from 'react-redux';
import { Wrapper, Text, Rectangle, List, Item, Title } from './Summary.styled';

function Summary({ data, title="СВОДКА"}) {
  const transactions = useSelector(state => state.finance.summary);
  const balance = transactions?.length > 0 ? transactions.map(({ month, year, sumIncome, sumExpense }) => ({ month, year, sumIncome, sumExpense })) : [];

  const formatter = new Intl.DateTimeFormat('ru', { month: 'long' });
  
  return (
    <Wrapper>
      <Rectangle>
        <Title>{title}</Title>
      </Rectangle>
      <List>
        {balance.length > 0 ? balance.map(el => <Item>
          <Text>{
            (formatter.format(new Date(el.year, el.month - 1))).toUpperCase()
          }
          </Text>
          {data === "expense"
            ? <Text>{el.sumExpense}.00</Text>
            : <Text>{el.sumIncome}.00</Text>}
          </Item>) : (<Item>Вы еще не внесли данные</Item>)}
      </List>
    </Wrapper>
  );
}

export default Summary;