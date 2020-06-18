import React, { useState } from 'react';
import { Text, ActivityIndicator, Alert } from 'react-native';
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

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handlePress() {
    setProcessing(true)
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        setProcessing(false);
        Alert.alert('Email was sent!');
        navigation.push('Login');
      })
      .catch((error) => {
        setProcessing(false);
        Alert.alert(JSON.stringify(error.message));
      });
  };

  return (
    <PageContainer>
      <LogoForm>Forgot Password</LogoForm>

      {error && (
        <ErrorBox>
          <ErrorText>{error}</ErrorText>
        </ErrorBox>
      )}

      <InputsContainer>
        <InputForm
          placeholder="Your Email"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
        />
        {processing && <ActivityIndicator size="large" style={{marginBottom: 16}}/>}
        <ButtonForm onPress={handlePress}>
          <ButtonTextForm>Send</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 16, fontFamily: 'Lato'}}>or</Text>


      <SwitchForm onPress={() => navigation.push('Register')}>I don't have a account</SwitchForm>
    </PageContainer>
  );
}
