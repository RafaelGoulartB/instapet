import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as firebase from 'firebase';
import { AsyncStorage } from 'react-native';

export default function Feed() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <>
      <Text> Feed </Text>

      <TouchableOpacity
        onPress={async () => { firebase.auth().signOut() }}
        style={{ marginTop: 18, borderColor: "black", borderWidth: 1 }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
}
