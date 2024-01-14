import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import {
  AboutUser,
  AddButton,
  Avatar,
  BackButton,
  BoldText,
  Container,
  HelloMessage,
  Icon,
  SecondaryMessage,
  TextContainer,
  Title,
} from './styles';

interface HeaderProps {
  user?: {
    name: string;
    avatar_url: string;
  };
}

export function Header({ user }: HeaderProps) {
  const { goBack } = useNavigation();
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  function handleAddPass() {
    navigation.navigate('RegisterLoginData');
  }

  return (
    <>
      <Container
        hasUserData={!!user}
        style={{
          ...(user
            ? {
                backgroundColor: '#6c0000',
              }
            : {
                backgroundColor: '#FFFFFF',
              }),
        }}
      >
        {user ? (
          <>
            <AboutUser>
              <Avatar source={{ uri: user.avatar_url }} />

              <TextContainer>
                <HelloMessage>
                  Olá, <BoldText>{user.name}</BoldText>
                </HelloMessage>

                <SecondaryMessage>Fique Segura</SecondaryMessage>
              </TextContainer>
            </AboutUser>

            <AddButton onPress={handleAddPass}>
              <Icon name="plus" color="#FFFFFF" size={24} />
            </AddButton>
          </>
        ) : (
          <>
            <BackButton onPress={goBack}>
              <Icon name="chevron-left" color="#850000" size={28} />
            </BackButton>

            <Title>Cadastra Senha</Title>
          </>
        )}
      </Container>
    </>
  );
}
