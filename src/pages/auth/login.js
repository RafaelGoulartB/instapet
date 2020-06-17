import React, { useState } from 'react';
import { Text } from 'react-native';
import * as firebase from 'firebase';

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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  async function handleFormRegister() {
    // Persist Login User
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        // Login
        firebase.auth().signInWithEmailAndPassword(email, password)
          .catch(error => setError(JSON.stringify(error.message)))
      })
      .catch(error => setError("Error to login"));
    }

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
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <InputForm
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Sign Up</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 16, fontFamily: 'Lato'}}>or</Text>


      <SwitchForm onPress={() => navigation.push('Register')}>I don't have a account</SwitchForm>
    </PageContainer>
  );
}
