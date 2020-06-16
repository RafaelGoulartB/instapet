import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Text, AsyncStorage } from 'react-native';

import { register } from '../../services/auth';

import {
  PageContainer,
  LogoForm,
  InputsContainer,
  InputForm,
  ButtonForm,
  ButtonTextForm,
  SwitchForm,
  ErrorBox,
  ErrorText
} from '../../styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  async function handleFormRegister() {
    if(!(name && email && password)) {
      setError('Please, use correct information')
      return;
    }
    try {
      const response = await register();

      await AsyncStorage.setItem('@insta:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@insta:token', JSON.stringify(response.token));

      dispatch({
        type: 'LOG_IN',
        token: response.token,
        user: response.user
      });
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <PageContainer>
      <LogoForm>Instapet</LogoForm>

      {error && (
        <ErrorBox>
          <ErrorText>{error}</ErrorText>
        </ErrorBox>
      )}

      <InputsContainer>
        <InputForm
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <InputForm
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <InputForm
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="password"
          secureTextEntry={true}
        />
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Sign Up</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 16, fontFamily: 'Lato'}}>or</Text>


      <SwitchForm onPress={() => navigation.push('Login')}>I already have a account</SwitchForm>
    </PageContainer>
  );
}
