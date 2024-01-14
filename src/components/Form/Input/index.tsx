import React, { useState } from 'react';
import type {
  Control,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

import {
  Container,
  Error,
  FormInput,
  Icon,
  InputContainer,
  Label,
  ToggleShowPassButton,
} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  title: string;
  error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export function Input({
  name,
  control,
  title,
  error,
  secureTextEntry,
  ...rest
}: Props) {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <Container>
      <Label>{title}</Label>
      {typeof error === 'string' ? <Error>{error}</Error> : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputContainer>
            <FormInput
              {...rest}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry && passwordHidden}
            />
            {secureTextEntry && (
              <ToggleShowPassButton
                onPress={() => setPasswordHidden(!passwordHidden)}
              >
                <Icon name={passwordHidden ? 'eye-off' : 'eye'} />
              </ToggleShowPassButton>
            )}
          </InputContainer>
        )}
      />
    </Container>
  );
}
