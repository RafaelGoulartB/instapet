import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

export default function Feed() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  return (
    <>
      <Text> Feed </Text>

      <TouchableOpacity
        onPress={() => dispatch({
          type: 'LOG_OUT'
        })}
        style={{marginTop: 18, borderColor:'black', borderWidth: 1}}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </>
  );
}
