import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Text, Link, LinkText } from './GoogleRegister.styled';

const GoogleRegister = () => {
  return (
    <>
      <Text>Вы можете авторизоваться с помощью Google Account:</Text>
      <Link href="https://smart-finance-backend.herokuapp.com/api/users/google">
        <FcGoogle size="18px" /> <LinkText>Google</LinkText>
      </Link>
    </>
  );
};

export default GoogleRegister;
