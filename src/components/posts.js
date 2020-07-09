import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  PostContainer,
  HeaderContainer,
  ProfileBox,
  ProfileImg,
  ProfileText,
  ActionsBox,
  PostImage,
  CommentsBox,
  CommentsImage,
  CommentsInputBox,
  CommentsInput,
} from './posts.styles';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import DogImage from '../assets/dog.jpeg';

export default function Post({post}) {
  const [comment, setComment] = useState();
  return (
    <PostContainer>
      <HeaderContainer>
        <ProfileBox>
          <ProfileImg source={DogImage} />
          <ProfileText>Rafael</ProfileText>
        </ProfileBox>
        <ActionsBox>
          <FontAwesomeIcons
            name="comment-o"
            color="#000"
            size={26}
            style={{marginRight: 16}}
          />
          <FontAwesomeIcons name="heart-o" color="#000" size={26} />
        </ActionsBox>
      </HeaderContainer>

      <PostImage source={{uri: post.imgUrl}} />

      <CommentsBox>
        <CommentsImage source={DogImage} />
        <CommentsInputBox>
          <CommentsInput
            placeholder="Say Something"
            value={comment}
            onChangeText={text => setComment(text)}
          />
          <TouchableOpacity>
            <FontAwesomeIcons name="send-o" color="#000" size={20} />
          </TouchableOpacity>
        </CommentsInputBox>
      </CommentsBox>
    </PostContainer>
  );
}
