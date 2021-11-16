import { useMediaQuery } from 'hooks/useMediaQuery';
import {
  Wrapper,
  Th,
  TheadTable,
  TableS,
  Td,
  Tr,
  Value,
  Desc,
  Category,
  Date,
  DeleteBtn,
  Scroll,
} from './Table.styled';
import { Icon } from 'hooks/Icon';
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
  //   {
  //     _id: 3,
  //     category: 'ЗП',
  //     operation: 'income',
  //     description: 'бабло',
  //     value: 2000,
  //     date: '11.11.2022',
  //   },
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
      {isMatches && (
        <Wrapper>
          <TableS>
            <TheadTable>
              <tr>
                <Th className="date">Дата</Th>
                <Th className="desc">Описание</Th>
                <Th className="category">Категория</Th>
                <Th className="value">Сумма</Th>
                <Th></Th>
                <Th></Th>
              </tr>
            </TheadTable>
          </TableS>
          <Scroll>
            <TableS body>
              <tbody>
                {transactions.map(trans => (
                  <Tr key={trans._id}>
                    <Date> {trans.date}</Date>
                    <Desc>{trans.description}</Desc>
                    <Category>{trans.category}</Category>
                    <Value>{trans.value}</Value>

                    <Td>
                      <DeleteBtn type="button">
                        <Icon
                          name="icon-delete"
                          size="18px"
                          viewBox="0 0 20 20"
                          color="#52555F"
                        />
                      </DeleteBtn>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </TableS>
          </Scroll>
        </Wrapper>
      )}
    </>
  );
};

export default Table;
