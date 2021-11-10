import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Form,
  Input,
  Label,
  ErrorMessage,
  StarErr,
  ButtonWrapper,
} from './LoginPage.styled';
import styled from '@emotion/styled';
import Button from '../../components/Buttons/CustomButton';
import { userLogin } from '../../redux/operations/auth-operation';

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px 0;
  display: block;
  width: 125px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  outline: none;
  border-radius: 16px;
  text-align: center;
  background-color: var(--white-text-color);
  color: var(--primary-text-color);
  border: 2px solid #f6f7fc;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 0%),
    0px 2px 1px rgb(0 0 0 / 15%);

  &.${props => props.activeClassName} {
    color: red;
  }

  &:focus,
  &:hover {
    box-shadow: 2px 4px 4px 0px rgb(0 0 0 / 30%), -1px 0px 0px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(userLogin(data));
  };

  // console.log(watch('password')); // watch input value by passing the name of it

  return (
    <Wrapper>
      <p>Вы можете авторизоваться с помощью Google Account:</p>
      <Button googleBtn text="Google"></Button>
      <p>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">
          {errors.email && <StarErr>*</StarErr>}
          Электронная почта:
        </Label>
        <Input
          id="email"
          placeholder="your@email.com"
          placeholderTextColo="#A6ABB9"
          {...register('email', {
            required: 'это обязательное поле',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                'Введенное значение не соответствует формату электронной почты',
            },
          })}
        />
        {errors.email ? (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        ) : (
          <ErrorMessage opacity="true">
            <span>Not Error</span>
          </ErrorMessage>
        )}
        <Label htmlFor="password">
          {errors.password && <StarErr>*</StarErr>}
          Пароль:
        </Label>
        <Input
          id="password"
          placeholder="••••••••"
          placeholderTextColo="#ffffff"
          {...register('password', {
            required: 'это обязательное поле',
            minLength: {
              value: 3,
              message: 'Слишком короткое введенное значение',
            },
            maxLength: {
              value: 15,
              message: 'Слишком длинное введенное значение',
            },
          })}
        />
        {errors.password ? (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        ) : (
          <ErrorMessage opacity="true">
            <span>Not Error</span>
          </ErrorMessage>
        )}
        <ButtonWrapper>
          <Button text="Войти" type="submit" />
          <Link to="/register" exact>
            Регистрация
          </Link>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;
