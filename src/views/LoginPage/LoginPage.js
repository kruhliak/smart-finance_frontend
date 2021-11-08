import React from 'react';
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
import Button from '../../components/Buttons/CustomButton';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

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
          <Button text="Регистрация" backBtn type="submit" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;
