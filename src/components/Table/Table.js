import { useMediaQuery } from 'hooks/useMediaQuery';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';
const transactions = [
  {
    _id: 1,
    category: 'ЗП',
    operation: 'income',
    description: 'hallo',
    value: 250,
    date: '22.10.2012',
  },

  {
    _id: 2,
    category: 'ЗП',
    operation: 'income',
    description: 'бабло',
    value: 2000,
    date: '11.11.2022',
  },
  {
    _id: 3,
    category: 'ЗП',
    operation: 'income',
    description: 'хлебушек много',
    value: 2000000000,
    date: '11.11.2022',
  },
  //   {
  //     _id: 4,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 5,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 6,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 7,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 8,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 9,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 10,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 11,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 12,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 13,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
  //   {
  //     _id: 14,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
];

const Table = () => {
  const isMatches = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isMatches ? (
        <TableDesktop transactions={transactions} />
      ) : (
        <TableMobile transactions={transactions} />
      )}
    </>
  );
};

export default Table;
