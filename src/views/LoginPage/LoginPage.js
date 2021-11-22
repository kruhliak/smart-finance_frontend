import React, { useState } from 'react';
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
  LabelIconWrapper,
} from './LoginPage.styled';
import { LoginPageWrap } from 'views/RegisterPage/RegisterPage.styled';
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
import ShowPasswordBtn from 'components/FormElems/ShowPasswordBtn/ShowPasswordBtn';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(userLogin(data));
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
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
              <LabelIconWrapper>
                <Label htmlFor="password" password>
                  {errors.password && <StarErr>*</StarErr>}
                  Пароль:
                </Label>
                <ShowPasswordBtn
                  onClick={handleClickShowPassword}
                  mouseDown={handleMouseDownPassword}
                  showPassword={showPassword}
                />
              </LabelIconWrapper>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
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
