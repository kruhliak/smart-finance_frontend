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

const TableDesktop = ({ onClickModal, operation, color }) => {
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
            {operation &&
              operation.list.map(item => (
                <Tr key={item._id}>
                  <Date>
                    {`${item.day}.
                  ${item.month}.
                  ${item.year}`}
                  </Date>
                  <Desc>{item.description}</Desc>
                  <Category>{item.category}</Category>
                  {color ? (
                    <Value red>{`-${item.value} грн.`}</Value>
                  ) : (
                    <Value>{`+${item.value} грн.`}</Value>
                  )}

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
