import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border: 1px solid tomato;
  box-sizing: border-box;
  width: 300px;
  padding: 50px 18px;
  background-color: #ffffff;
  @media (min-width: 768px) {
    width: 436px;
    padding: 50px 85px;
  }
`;
export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 265px;
  height: 52px;
  background: #f6f7fb;
  border-radius: 30px;
  font-family: inherit;
  padding: 17px 20px;
  border: none;
  margin-bottom: 4px;

  /* position: relative; */
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #eb5757;
  margin-bottom: 14px;
  opacity: ${props => (props.opacity ? 0 : 1)};
`;

export const StarErr = styled.span`
  color: #eb5757;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;