import DatePicker from 'react-datepicker';
import { Icon } from 'hooks/Icon';
import ru from 'date-fns/locale/ru';
import './Datepicker.css';

const Datepicker = ({ onChange, onBlur, selected }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: '10px',
      }}
    >
      <Icon
        name="icon-date-picker"
        size="20px"
        viewBox="0 0 20 20"
        color="none"
      />
      <DatePicker
        dateFormat="dd.MM.yyyy"
        onChange={date => onChange('date', date)}
        onBlur={onBlur}
        selected={selected}
        locale={ru}
      />
    </div>
  );
};

export default Datepicker;
