import styled from '@emotion/styled';
import { device } from 'components/options/device';

export const SpeechBubbleRect = styled.div`
  position: absolute;
  top: 233px;
  left: 19px;
  padding: 30px;
  width: 292px;
  border-radius: 30px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  z-index: 2;

  @media ${device.tablet} {
    top: 163px;
    left: 44%;
  }
  @media ${device.desktop} {
    top: 165px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 0;
    height: 0;
    border: 18px solid transparent;

    border-bottom-color: #172d5e;
    border-top: 0;
    margin-left: -18px;
    margin-top: -18px;
  }
`;

export const P = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  color: var(--white-text-color);
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  color: var(--white-text-color);
`;
