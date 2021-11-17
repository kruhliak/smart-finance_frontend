import {
  Wrapper,
  LeftSide,
  SubLeftSide,
  RightSide,
  DeleteBtn,
  Date,
  Desc,
  Category,
  Value,
} from './TableMobile.styled';
import { Icon } from 'hooks/Icon';

const TableMobile = ({ onClickModal, operation, color }) => {
  console.log(operation);
  return (
    <>
      {operation &&
        operation.list.map(item => (
          <Wrapper key={item._id}>
            <LeftSide>
              <Desc>{item.description}</Desc>
              <SubLeftSide>
                <Date>
                  {`${item.day}.
                  ${item.month}.
                  ${item.year}`}
                </Date>
                <Category>{item.category}</Category>
              </SubLeftSide>
            </LeftSide>
            <RightSide>
              {color ? (
                <Value red>{`-${item.value} грн.`}</Value>
              ) : (
                <Value>{`+${item.value} грн.`}</Value>
              )}
              <DeleteBtn type="button" onClick={onClickModal}>
                <Icon
                  name="icon-delete"
                  size="18px"
                  viewBox="0 0 20 20"
                  color="#52555F"
                />
              </DeleteBtn>
            </RightSide>
          </Wrapper>
        ))}
    </>
  );
};

export default TableMobile;
