import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import { register } from '../../services/auth';

export default function SignUp() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  async function handleRegister() {
    try {
      const response = await register();

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
    <>
      <Text>Register</Text>

      <TouchableOpacity onPress={handleRegister} style={{marginTop: 18, borderColor:'black', borderWidth: 1}}>
        <Text>Register</Text>
      </TouchableOpacity>
    </>
  );
}
