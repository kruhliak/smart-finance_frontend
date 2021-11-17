import styled from '@emotion/styled';
import { device } from '../../../components/options/device';

export const Wrapper = styled.div`
  width: 605px;
  table-layout: fixed;
  border: none;
  overflow-x: hidden;
  margin: 0 auto;
  @media ${device.desktop} {
    width: 760px;
  }
`;

export const TableS = styled.table`
  width: 605px;
  height: 38px;
  text-align: center;
  color: rgb(0, 0, 0);
  background-color: #f5f6fb;
  border-spacing: 0px 2px;
  border-left: 2px;
  border-left-style: outset;
  border-right-style: inset;
  border-right-color: transparent;
  border-left-color: transparent;

  border-radius: ${props => (props.body ? 0 : '20px 20px 0 0')};
  margin: 0 auto;

  @media ${device.desktop} {
    width: 760px;
  }
`;

export const TheadTable = styled.thead`
  display: none;
  align-items: center;
  height: 38px;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  margin: 0;
  @media ${device.tablet} {
    display: revert;
  }
`;

export const Th = styled.th`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;

  &.date {
    width: 100px;
  }
  &.desc {
    width: 200px;
  }
  &.category {
    width: 140px;
  }
  &.value {
    width: 130px;
  }
`;

export const Td = styled.td``;

export const Date = styled.td`
  width: 100px;
`;

export const Desc = styled.td`
  width: 200px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Category = styled.td`
  width: 140px;
  max-width: 140px;
  overflow: hidden;
`;

export const Value = styled.td`
  font-weight: bold;
  width: 130px;
  color: ${props => (props.red ? '#e7192e' : '#407946')};
`;

export const Tr = styled.tr`
  display: revert;
  align-items: center;
  height: 38px;
  padding: 0 8px;
  background: #ffffff;
  color: #52555f;
  border-bottom: 2px solid #f4f6fb;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;

export const DeleteBtn = styled.button`
  margin: 2px auto 0;
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

export const Scroll = styled.div`
  height: 342px;
  overflow-x: hidden;
  margin: 0px;
  border-bottom: 1px solid #fff;
`;
