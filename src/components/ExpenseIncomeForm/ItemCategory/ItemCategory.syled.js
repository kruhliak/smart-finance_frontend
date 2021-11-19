import styled from '@emotion/styled';
import { device } from '../../../components/options/device';

export const Item = styled.li``;

export const LabelСategory = styled.label`
  position: relative;
  padding: 9px 20px;
  font-size: 12px;
  line-height: 14px;
  color: #c7ccdc;
  height: 32px;
  width: 171px;
  display: inline-block;
  cursor: pointer;
  outline: none;

  @media ${device.desktop} {
    width: 188px;
  }

  &:hover,
  &:focus {
    background-color: #f5f6fb;
    color: #52555f;
  }
`;
