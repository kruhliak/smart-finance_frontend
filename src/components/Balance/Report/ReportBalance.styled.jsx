import styled from '@emotion/styled';

import { device } from '../../options/device';
import { Box, Title, InputBox, Button, Input } from '../Balance.styled';

export const ReportBox = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: start;
    padding-bottom: 0;
    align-items: center;
  }

  @media ${device.desktop} {
    justify-content: flex-start;
  }

  & .report-balance-form {
    display: flex;

    @media ${device.tablet} {
      margin-left: 55px;
      margin-right: 80px;
    }

    @media ${device.desktop} {
      margin-left: 158px;
      margin-right: 225px;
    }
  }
`;

export const ReportTitle = styled(Title)`
  width: 84px;

  @media ${device.tablet} {
    margin: 0;
  }
`;

export const ReportInputBox = styled(InputBox)`
  justify-content: center;

  width: 183px;

  padding: 0px;

  @media ${device.tablet} {
    width: 125px;
    padding: 0px;
  }

  @media ${device.desktop} {
    margin-right: 15px;
  }

  label {
    position: absolute;
    color: var(--black-text-color);

    left: 110px;
    font-weight: 700;
    font-size: 12px;
    @media ${device.tablet} {
      left: 80px;
    }
  }
`;

export const ReportInput = styled(Input)`
  @media ${device.mobileMax} {
    text-align: right;
    border-radius: 22px;
    width: 183px;
    padding-right: 75px;
  }
  @media ${device.tablet} {
    margin-right: 0;
  }
`;

export const ReportButton = styled(Button)`
  display: none;
  @media ${device.desktop} {
    display: flex;
  }
`;

export const MonthSlider = styled.div`
  width: 134px;
  height: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileMax} {
    margin-bottom: 30px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width: 134px;
  & .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .inputDatePicker {
    width: 96px;
    margin: 0;
    padding: 0;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: 000000;
  }

  & button {
    background-color: transparent;
    border: none;
    &:focus,
    &:hover {
      transform: scale(1.2);
      transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
