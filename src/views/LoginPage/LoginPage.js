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
  LoginPageWrap,
} from './LoginPage.styled';
import GoogleRegister from 'components/FormElems/GoogleRegister/GoogleRegister';
import Button from 'components/Buttons/CustomButton';
import ButtonNav from 'components/FormElems/ButtonNav/ButtonNav';
import ErrorMessage from 'components/FormElems/ErrorMessage/ErrorMessage';
import { userLogin } from 'redux/operations/auth-operation';
import Container from 'components/Container';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import Title from 'components/Title';
import TitleWrapper from 'components/TitleWrapper';
import Subtitle from 'components/Subtitle';
import Background from 'components/Background';

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
    <>
      <Header>
        <Logo />
      </Header>
      <Background />

      <Container>
        <LoginPageWrap>
          <TitleWrapper>
            <Title text="Kapu$ta" />
            <Subtitle text="smart finance" />
          </TitleWrapper>

          <Wrapper>
            <GoogleRegister />
            <Text>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
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
                type="password"
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
        </LoginPageWrap>
      </Container>
    </>
  );
};

export default LoginPage;
