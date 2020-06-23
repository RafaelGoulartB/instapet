import React from 'react';
import {Text, ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <>
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
        Loading
      </Text>
      <ActivityIndicator />
    </>
  );
}
