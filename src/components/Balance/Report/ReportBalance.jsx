import {
  ReportBox,
  ReportTitle,
  ReportText,
  ReportLink,
  ReportButton,
} from './ReportBalance.styled';

import { Icon } from '../../../hooks/Icon';

export default function ReportBalance() {
  return (
    <ReportBox>
      <ReportLink>
        <Icon
          name={'icon-back-arrow'}
          size={'18px'}
          viewBox="0 0 18 12"
          color="#FF751D"
        />
        Вернуться на главную
      </ReportLink>
      <ReportTitle>Баланс:</ReportTitle>
      <ReportText>55 000.00 UAH</ReportText>
      <ReportButton>ПОДТВЕРДИТЬ</ReportButton>
    </ReportBox>
  );
}
