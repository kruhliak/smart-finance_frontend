import PropTypes from 'prop-types';
import { H2 } from './Subtitle.styled.js';

const Subtitle = ({ text }) => {
  return <H2>{text}</H2>;
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
