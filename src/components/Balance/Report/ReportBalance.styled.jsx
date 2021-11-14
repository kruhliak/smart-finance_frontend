import styled from '@emotion/styled';

import { device } from '../../options/device';
import { Box, Title, Text, Link, Button } from '../Balance.styled';

export const ReportBox = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 183px;
  height: 70px;

  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-direction: row;

    width: 664px;
  }

  @media ${device.desktop} {
    width: 1060px;
  }
`;

export const ReportTitle = styled(Title)`
  width: 84px;
`;

export const ReportText = styled(Text)`
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

export const ReportLink = styled(Link)`
  width: 174px;

  padding: 0px;
  margin-right: 47px;

  @media ${device.mobileMax} {
    display: none;
  }

  @media ${device.desktop} {
    margin-right: 158px;
  }
`;

export const ReportButton = styled(Button)`
  display: none;

  @media ${device.desktop} {
    display: block;

    margin-right: 225px;
  }
`;
