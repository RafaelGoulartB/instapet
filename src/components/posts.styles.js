import styled from 'styled-components/native';

export const PostContainer = styled.View`
  margin-top: 16px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 12px;
`;
export const ProfileBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProfileImg = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 8px;
`;
export const ProfileText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const ActionsBox = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 280px;
`;

export const CommentsBox = styled.KeyboardAvoidingView`
  width: 100%;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;
export const CommentsImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;
export const CommentsInputBox = styled.View`
  width: 90%;
  margin-left: 12px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #9ba3bb;
  border-style: solid;
  border-radius: 8px;
`;
export const CommentsInput = styled.TextInput`
  width: 90%;
  max-height: 36px;
  font-size: 12px;
  padding-left: 16px;
`;
