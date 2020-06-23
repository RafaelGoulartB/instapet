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

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);

  function handleFormRegister() {
    setProcessing(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => auth().currentUser.updateProfile({displayName: name}))
      .catch(error => {
        setProcessing(false);
        setError(JSON.stringify(error.message));
      });
  }

  return (
    <PageContainer>
      <LogoForm>Sign Up</LogoForm>

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
        {processing && (
          <ActivityIndicator size="large" style={{marginBottom: 16}} />
        )}
        <ButtonForm onPress={handleFormRegister}>
          <ButtonTextForm>Sign Up</ButtonTextForm>
        </ButtonForm>
      </InputsContainer>

      <Text style={{margin: 8, fontFamily: 'Lato'}}>or</Text>

      <SwitchForm onPress={() => navigation.push('Login')}>
        I already have a account
      </SwitchForm>

      <SwitchForm onPress={() => navigation.push('ResetPassword')}>
        I forgot my Password
      </SwitchForm>
    </PageContainer>
  );
}
