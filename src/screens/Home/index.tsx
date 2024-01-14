/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-lines-per-function */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';

import { Header } from '@/components/Header';
import { LoginDataItem } from '@/components/LoginDataItem';
import { SearchBar } from '@/components/SearchBar';

import {
  Container,
  LoginList,
  Metadata,
  Title,
  TotalPassCount,
} from './styles';

interface LoginDataProps {
  id: string;
  service_name: string;
  email: string;
  password: string;
}

type LoginListDataProps = LoginDataProps[];

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [searchListData, setSearchListData] = useState<LoginListDataProps>([]);
  const [data, setData] = useState<LoginListDataProps>([]);

  async function loadData() {
    const dataKey = '@savepass:logins';

    const response = await AsyncStorage.getItem(dataKey);
    // const response = await RNSecureStorage.getItem(dataKey).then((res) => {
    //   console.log(res);
    //   return res;
    // }).catch((err) => {
    //   console.log(err);
    //   return null;
    // });

    if (response) {
      const parsedData = JSON.parse(response);

      setSearchListData(parsedData);
      setData(parsedData);
    }
  }

  function handleFilterLoginData() {
    const filteredData = searchListData.filter((data) => {
      const isValid = data.service_name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      if (isValid) {
        return data;
      }
    });

    setSearchListData(filteredData);
  }

  function handleChangeInputText(text: string) {
    if (!text) {
      setSearchListData(data);
    }

    setSearchText(text);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <>
      <Header
        user={{
          name: 'Andrea',
          avatar_url: 'https://avatars.githubusercontent.com/robertofortes23',
        }}
      />

      <Container>
        <SearchBar
          placeholder="Buscar Senha  ?"
          onChangeText={handleChangeInputText}
          value={searchText}
          returnKeyType="search"
          onSubmitEditing={handleFilterLoginData}
          onSearchButtonPress={handleFilterLoginData}
        />
        <Metadata>
          <Title>SENHAS</Title>
          <TotalPassCount>
            {searchListData.length
              ? `${`${searchListData.length}`.padStart(2, '0')} ao total`
              : ' Nenhuma Senha'}
          </TotalPassCount>
        </Metadata>

        <LoginList
          keyExtractor={(item: any) => item.id}
          data={searchListData}
          renderItem={({ item: loginData }: { item: any }) => {
            return (
              <LoginDataItem
                service_name={loginData.service_name}
                email={loginData.email}
                password={loginData.password}
              />
            );
          }}
        />
      </Container>
    </>
  );
}
