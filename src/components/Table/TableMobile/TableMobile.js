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

const TableMobile = ({ transactions }) => {
  console.log(transactions);
  return (
    <>
      {transactions.map(trans => (
        <Wrapper>
          <LeftSide>
            <Desc>{trans.description}</Desc>
            <SubLeftSide>
              <Date>{trans.date}</Date>
              <Category>{trans.category}</Category>s
            </SubLeftSide>
          </LeftSide>
          <RightSide>
            <Value>{trans.value}</Value>
            <DeleteBtn type="button">
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
