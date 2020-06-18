import React, { useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
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

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handleFormRegister() {
    setProcessing(true)
    // Persist Created User
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        // Create User
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user =>
            firebase.auth().currentUser.updateProfile({ displayName: name })
          )
          .catch(error => {
            setProcessing(false)
            setError(JSON.stringify(error.message))
          })
      })
      .catch(error => {
        setProcessing(false)
        setError("Error to create a new user")
      });
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
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
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
        {processing && <ActivityIndicator size="large" style={{marginBottom: 16}}/>}
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Sign Up</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 8, fontFamily: 'Lato'}}>or</Text>


      <SwitchForm onPress={() => navigation.push('Login')}>I already have a account</SwitchForm>

      <SwitchForm onPress={() => navigation.push('ResetPassword')}>I forgot my Password</SwitchForm>
    </PageContainer>
  );
}
