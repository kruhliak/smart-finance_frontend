import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'hooks/useMediaQuery';
import * as transactionOperations from '../../../redux/operations/transaction-operation';

import { Wrapper, Container} from './Charts.styled';
import DesktopChart from '../DesktopChart/';
import MobileChart from '../MobileChart';


// const data = [
//   {
//     name: 'пАмидор',
//     value: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Круглое красное',
//     value: 3000,
//     pv: 4398,
//     amt: 2210,
//   },
//   {
//     name: 'Хурма',
//     value: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Авокадо',
//     value: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Куринные когти',
//     value: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Печень медведя',
//     value: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Кисляк',
//     value: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const Charts = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const categories = useSelector(state => state.finance.categories);
  const operations = useSelector(state => state.finance.operations);
  const isMatches = useMediaQuery('(min-width: 768px)');

  console.log('categories >>', categories);
  console.log('operations >>', operations);

  const expense = operations.find(item => item.operation === 'expense');
  const income = operations.find(item => item.operation === 'income');

  console.log("expense >>", expense);
  console.log("income >>", income);

  const balance = operations
    ? expense.list.filter(item => item.category)
    : operations.list.filter(item => item.category);
  
  console.log("balance >>", balance)

  console.log(operations.find(item => item.operation === 'income'));
  console.log(
    operations
      .find(item => item.operation === 'income')
      .list.filter(item => item.category === 'Доп. доход')
      .map(item => item.value),
  );

  useEffect(() => {
    if (balance) {
      const { descriptions } = balance;
      setData(descriptions);
    } else {
      setData([]);
    }
  }, [balance]);

  const isLowerCase = balance.map(el => el.description.toLowerCase());

  console.log("isLowerCase >>", isLowerCase)

  const newData = balance
    ?.reduce((acc, { description, value }) => {
      const match = description;
      // const xxx = description.toLowerCase()
      // const newArr = acc?.find(el => el.description === description);
      const newArr = acc?.find(el => el.description === description);
      // console.log("newArr >>", newArr)
      if (!newArr) {
        acc.push({ description: match, value });
      }

      if (newArr) {
        const idx = acc.findIndex(el => el.description === description);
        acc[idx].value += value;
      }

      return acc;
    }, [])
  
  console.log('newData >>', newData)

//  const [category, setCategory] = useState(true);
//   const [selectedCard, setSelectedCard] = useState(0);

//   useEffect(() => {
//     dispatch(transactionOperations.getCategoriesByMonth(['expense', 2021, 11]));
//   }, [category]);

//   const changeCategory = () => {
//     setSelectedCard(0);
//     setCategory(!category);
//   };

//   const salary = operations[0]?.list.filter(item => item.category === 'ЗП');
//   const income = operations[0]?.list.filter(
//     item => item.category === 'Доп. доход',
//   );

  return (
    <Container>
          <Wrapper>
        {isMatches ? <DesktopChart data={newData}/> :
        <MobileChart data={newData}/>}
          </Wrapper>
    </Container>
  );
}

export default Charts;