import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Wrapper,
  Text,
  Form,
  Input,
  Label,
  StarErr,
  ButtonWrapper,
  LoginPageWrap,
} from './RegisterPage.styled';
import GoogleRegister from 'components/FormElems/GoogleRegister/GoogleRegister';
import Button from 'components/Buttons/CustomButton';
import ErrorMessage from 'components/FormElems/ErrorMessage/ErrorMessage';
import ButtonNav from 'components/FormElems/ButtonNav/ButtonNav';
import { userSignup } from 'redux/operations/auth-operation';
import Container from 'components/Container';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import Title from 'components/Title';
import TitleWrapper from 'components/TitleWrapper';
import Subtitle from 'components/Subtitle';
import Background from 'components/Background';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(userSignup(data));
    //   reset();
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
              <Label htmlFor="name">
                {errors.name && <StarErr>*</StarErr>}
                Имя:
              </Label>
              <Input
                id="name"
                placeholder="your name"
                placeholderTextColor="#A6ABB9"
                {...register('name', {
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
              <ErrorMessage errors={errors.name} />
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
                placeholderTextColor="#FFFFFF"
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
                <Button text="Регистрация" type="submit" />
                <ButtonNav path="/login" text="Войти" />
              </ButtonWrapper>
            </Form>
          </Wrapper>
        </LoginPageWrap>
      </Container>
    </>
  );
};

export default RegisterPage;
