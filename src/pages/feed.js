import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Post from '../components/posts';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const postsRef = firestore().collection('posts');

  async function getPosts() {
    return new Promise((resolve, reject) => {
      const data = [];
      postsRef
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            const formatted_post = {
              id: doc.id,
              ...doc.data(),
            };
            data.push(formatted_post);
          });
          return resolve(data);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }

  useEffect(() => {
    getPosts().then(data => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <FlatList
        style={{flex: 1}}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Post post={item} />}
      />
    </>
  );
}
