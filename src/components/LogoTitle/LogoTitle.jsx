import PropTypes from 'prop-types';
import { P } from './LogoTitle.styled.js';

const LogoTitle = ({ text }) => {
  return <P>{text}</P>;
};

LogoTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LogoTitle;
