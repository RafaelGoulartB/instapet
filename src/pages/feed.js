import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AsyncStorage } from 'react-native';

export default function Feed() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <>
      <Text> Feed </Text>

      <TouchableOpacity
        onPress={async () => {
          dispatch({
            type: "LOG_OUT",
          });
          await AsyncStorage.removeItem('@insta:user');
          await AsyncStorage.removeItem('@insta:token');
        }}
        style={{ marginTop: 18, borderColor: "black", borderWidth: 1 }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
}
