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
  Nodate,
} from './TableDesktop.styled';
import { Icon } from 'hooks/Icon';

const TableDesktop = ({ operation, color, toggleModal, setId }) => {
  const handleDeleteClick = idToDel => {
    setId(idToDel);
    toggleModal();
  };

  const isZero = i => {
    return i.toString().length === 1 ? `0${i}` : i;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Wrapper>
      <TableS>
        <TheadTable>
          <tr>
            <Th className="date">Дата</Th>
            <Th className="desc">Описание</Th>
            <Th className="category">Категория</Th>
            <Th className="value">Сумма</Th>
            <Th style={{ width: '100px' }}></Th>
          </tr>
        </TheadTable>
      </TableS>
      <Scroll>
        <TableS body>
          <tbody>
            {operation ? (
              operation.list.map(item => (
                <Tr key={item._id}>
                  <Date>
                    {`${isZero(item.day)}.
                  ${item.month}.
                  ${item.year}`}
                  </Date>
                  <Desc>{capitalizeFirstLetter(item.description)}</Desc>
                  <Category>{item.category}</Category>
                  {color ? (
                    <Value red>{`-${item.value} грн.`}</Value>
                  ) : (
                    <Value>{`+${item.value} грн.`}</Value>
                  )}

                  <Td style={{ width: '100px' }}>
                    <DeleteBtn
                      type="button"
                      onClick={() => {
                        handleDeleteClick(item._id);
                      }}
                    >
                      <Icon
                        name="icon-delete"
                        size="18px"
                        viewBox="0 0 20 20"
                        color="#52555F"
                      />
                    </DeleteBtn>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Nodate>Вы еще не внесли данные</Nodate>
              </Tr>
            )}
          </tbody>
        </TableS>
      </Scroll>
    </Wrapper>
  );
};

export default TableDesktop;
