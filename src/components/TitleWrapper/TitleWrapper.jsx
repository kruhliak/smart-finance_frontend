import PropTypes from 'prop-types';
import { Div } from './TitleWrapper.styled'

const TitleWrapper = ({ children }) => {
  return <Div>{children}</Div>;
};

TitleWrapper.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleWrapper;
