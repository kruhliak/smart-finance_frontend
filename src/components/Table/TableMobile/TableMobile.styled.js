import styled from '@emotion/styled';

export const Scroll = styled.div`
  height: 160px;
  background: transparent;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 282px;
  height: 52px;
  border: ${props => props.nodate && '1px solid #f5f6fb'};
  padding: ${props => props.nodate && '0 auto'};
  border-bottom: 1px solid #f5f6fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nodate = styled.span`
  display: block;
  margin: 0 auto;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SubLeftSide = styled.div`
  display: flex;
`;

export const RightSide = styled.div`
  display: flex;
`;

export const Date = styled.div`
  margin-right: 20px;
`;
export const Desc = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #52555f;
  overflow: hidden;
`;
export const Category = styled.div``;

export const Value = styled.div`
  margin-right: 20px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.04em;

  color: ${props => (props.red ? '#e7192e' : '#407946')};
  padding: 15px 0;
`;

export const DeleteBtn = styled.button`
  margin: auto 0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: transparent;
  background-color: transparent;
  padding: 7px;

  &:hover,
  &:focus {
    background-color: #f5f6fb;
  }
`;
