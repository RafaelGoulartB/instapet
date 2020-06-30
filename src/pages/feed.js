import React from 'react';
import {ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import Post from '../components/posts';

export default function Home() {
  return (
    <ScrollView>
      <Post />
      <Post />
    </ScrollView>
  );
}
