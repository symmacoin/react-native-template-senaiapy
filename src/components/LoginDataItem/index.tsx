import React, { useState } from 'react';

import {
  BoldTitle,
  Container,
  Email,
  Icon,
  LoginData,
  PassData,
  Password,
  ShowPasswordButton,
  Title,
} from './styles';

interface Props {
  service_name: string;
  email: string;
  password: string;
}

export function LoginDataItem({ service_name, email, password }: Props) {
  const [passIsVisible, setPassIsVisible] = useState(false);

  function handleTogglePassIsVisible() {
    setPassIsVisible(!passIsVisible);
  }

  return (
    <Container colors={[passIsVisible ? '#EBF2FF' : '#ffffff', '#ffffff']}>
      <ShowPasswordButton onPress={handleTogglePassIsVisible}>
        <Icon
          name={passIsVisible ? 'eye' : 'eye-off'}
          color={passIsVisible ? '#1967FB' : '#888D97'}
        />
      </ShowPasswordButton>

      {passIsVisible ? (
        <PassData>
          <Title>{service_name}</Title>
          <Password>{password}</Password>
        </PassData>
      ) : (
        <LoginData>
          <BoldTitle>{service_name}</BoldTitle>
          <Email>{email}</Email>
        </LoginData>
      )}
    </Container>
  );
}
