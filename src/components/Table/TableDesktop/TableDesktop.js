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
} from './TableDesktop.styled';
import { Icon } from 'hooks/Icon';

const TableDesktop = ({ transactions, onClickModal }) => {
  return (
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
                  <DeleteBtn type="button" onClick={onClickModal}>
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
  );
};

export default TableDesktop;
