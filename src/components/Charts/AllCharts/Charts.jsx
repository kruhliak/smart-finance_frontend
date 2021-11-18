import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { getCategoriesByMonth } from 'redux/operations/transaction-operation';

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
 const [category, setCategory] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);

  const isMatches = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
          <Wrapper>
        {isMatches ? <DesktopChart data={data}/> :
        <MobileChart data={data}/>}
          </Wrapper>
    </Container>
  );
}

export default Charts;