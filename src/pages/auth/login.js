import React, {useState} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  PageContainer,
  LogoForm,
  InputsContainer,
  InputForm,
  ButtonForm,
  ButtonTextForm,
  SwitchForm,
  ErrorBox,
  ErrorText,
} from '../../styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handleFormRegister() {
    setProcessing(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        setProcessing(false);
        setError(JSON.stringify(error.message));
      });
  }

  return (
    <PageContainer>
      <LogoForm>Login</LogoForm>

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
        {processing && (
          <ActivityIndicator size="large" style={{marginBottom: 16}} />
        )}
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Login</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 8, fontFamily: 'Lato'}}>or</Text>

      <SwitchForm onPress={() => navigation.push('Register')}>
        I don't have a account
      </SwitchForm>

      <SwitchForm onPress={() => navigation.push('ResetPassword')}>
        I forgot my Password
      </SwitchForm>
    </PageContainer>
  );
}
