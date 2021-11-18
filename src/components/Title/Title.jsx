import PropTypes from 'prop-types';
import { H1 } from './Title.styled.js';

const Title = ({ text }) => {
  return <H1>{text}</H1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
