/* eslint-disable react-native/no-inline-styles */
/* eslint-disable max-lines-per-function */
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';

import { Button } from '@/components/Form/Button';
import { Input } from '@/components/Form/Input';
import { Header } from '@/components/Header';

import { Container, Form } from './styles';

interface FormData {
  service_name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  service_name: Yup.string().required('Nome do serviço é obrigatório!'),
  email: Yup.string(),
  // .email('Não é um email válido')
  // .required('Email é obrigatório!'),
  password: Yup.string().required('Senha é obrigatória!'),
});

export function RegisterLoginData() {
  // const { navigate } = useNavigation();
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(formData: FormData) {
    const newLoginData = {
      id: String(uuid.v4()),
      ...formData,
    };

    const dataKey = '@savepass:logins';

    const response: any = await AsyncStorage.getItem(dataKey);

    // const response = await RNSecureStorage.getItem(dataKey).then((res) => {
    //   console.log(res);
    //   return res;
    // }).catch((err) => {
    //   console.log(err);
    //   return null;
    // });

    const parsedData = JSON.parse(response) || [];

    const newLoginListData = [...parsedData, newLoginData];

    await AsyncStorage.setItem(dataKey, JSON.stringify(newLoginListData));

    // await RNSecureStorage.setItem(dataKey, JSON.stringify(newLoginListData), {accessible: ACCESSIBLE.WHEN_UNLOCKED}).then((res) => {
    //   console.log(res);
    //   return res;
    // }).catch((err) => {
    //   console.log(err);
    //   return null;
    // });

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Header />
      <Container>
        <Form>
          <Input
            testID="service-name-input"
            title="Titulo"
            name="service_name"
            // @ts-ignore
            error={errors.service_name && errors.service_name.message}
            control={control}
            autoCapitalize="sentences"
            autoCorrect
          />
          <Input
            testID="email-input"
            title="Nome do Servico"
            name="email"
            // @ts-ignore
            error={errors.email && errors.email.message}
            control={control}
            autoCorrect={false}
            autoCapitalize="none"
            //keyboardType="email-address"
          />
          <Input
            testID="password-input"
            title="Senha"
            name="password"
            // @ts-ignore
            error={errors.password && errors.password.message}
            control={control}
            //secureTextEntry
          />

          <Button
            style={{
              marginTop: RFValue(8),
            }}
            title="Salvar"
            // @ts-ignore
            onPress={handleSubmit(handleRegister)}
          />
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
}
