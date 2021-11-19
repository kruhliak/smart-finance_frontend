import {
  Scroll,
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

const TableMobile = ({ operation, color, toggleModal, setId }) => {
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
    <Scroll>
      {operation &&
        operation.list.map(item => (
          <Wrapper key={item._id}>
            <LeftSide>
              <Desc>{capitalizeFirstLetter(item.description)}</Desc>
              <SubLeftSide>
                <Date>
                  {`${isZero(item.day)}.
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
            </RightSide>
          </Wrapper>
        ))}
    </Scroll>
  );
};

export default TableMobile;
