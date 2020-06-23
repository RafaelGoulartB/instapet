import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home() {
  return (
    <>
      <Text> Home </Text>

      <TouchableOpacity
        onPress={async () => {
          auth().signOut();
        }}
        style={{marginTop: 18, borderColor: 'black', borderWidth: 1}}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
}
