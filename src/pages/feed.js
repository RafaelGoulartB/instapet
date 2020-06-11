import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

export default function Feed() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  return (
    <>
    </>
  );
}
