import { Error } from './ErrorMessage.styled';

const ErrorMessage = ({ errors }) => {
  return errors ? (
    <Error>{errors.message}</Error>
  ) : (
    <Error opacity="true">
      <span>Not Error</span>
    </Error>
  );
};

export default ErrorMessage;
