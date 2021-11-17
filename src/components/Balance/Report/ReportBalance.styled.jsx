import styled from '@emotion/styled';

import { device } from '../../options/device';
import { Box, Title, InputBox, Button, Input } from '../Balance.styled';

export const ReportBox = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 30px;
  padding-top: 71px;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }

  @media ${device.desktop} {
    justify-content: space-between;
  }

  & .report-balance-form {
    display: flex;
  }
`;

export const ReportTitle = styled(Title)`
  width: 84px;

  @media ${device.tablet} {
    margin-left: 47px;
  }
`;

export const ReportInputBox = styled(InputBox)`
  justify-content: center;

  width: 183px;

  border-radius: 22px 22px 22px 22px;

  padding: 0px;

  @media ${device.tablet} {
    width: 125px;

    padding: 0px;
    margin-right: 80px;
  }

  @media ${device.desktop} {
    margin-right: 15px;
  }
`;

export const ReportInput = styled(Input)``;

// export const ReportLink = styled(Link)`
//   width: 174px;

//   padding: 0px;
//   margin-right: 47px;

//   @media ${device.mobileMax} {
//     display: none;
//   }

//   @media ${device.desktop} {
//     margin-right: 158px;
//   }
// `;

export const ReportButton = styled(Button)``;

export const MonthSlider = styled.div`
  width: 134px;
  height: 39px;

  border: 1px solid tomato;

  @media ${device.mobileMax} {
    margin-bottom: 30px;
  }
`;
