import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Wrapper,
  Form,
  Text,
  Input,
  Label,
  StarErr,
  ButtonWrapper,
} from './LoginPage.styled';
import Button from '../../components/Buttons/CustomButton';
import ButtonNav from '../../components/FormElems/ButtonNav/ButtonNav';
import ErrorMessage from '../../components/FormElems/ErrorMessage/ErrorMessage';
import { userLogin } from '../../redux/operations/auth-operation';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(userLogin(data));
    reset();
  };

  return (
    <Wrapper>
      <Text>Вы можете авторизоваться с помощью Google Account:</Text>
      <Button googleBtn text="Google"></Button>
      <Text>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">
          {errors.email && <StarErr>*</StarErr>}
          Электронная почта:
        </Label>
        <Input
          id="email"
          placeholder="your@email.com"
          placeholderTextColor="#A6ABB9"
          {...register('email', {
            required: 'это обязательное поле',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                'Введенное значение не соответствует формату электронной почты',
            },
          })}
        />
        <ErrorMessage errors={errors.email} />
        <Label htmlFor="password">
          {errors.password && <StarErr>*</StarErr>}
          Пароль:
        </Label>
        <Input
          id="password"
          placeholder="••••••••"
          placeholderTextColor="#ffffff"
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
        <ErrorMessage errors={errors.password} />
        <ButtonWrapper>
          <Button text="Войти" type="submit" />
          <ButtonNav path="/register" text="Регистрация" />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;