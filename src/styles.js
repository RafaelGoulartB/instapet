import styled from "styled-components/native";
import Constants from "expo-constants";

export const PageContainer = styled.View`
  flex: 1px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background-color: #feffff;
  align-items: center;
`;
export const ErrorBox = styled.View`
  width: 80%;
  align-items: center;
  padding: 12px 18px;
  border-radius: 8px;
  margin-top: 24px;
  background-color: #f8d7da;
  align-self: center;
`;
export const ErrorText = styled.Text`
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: #721c24;
`;
export const LogoForm = styled.Text`
  font-family: Lato;
  font-size: 42px;
  text-transform: uppercase;
  line-height: 50px;
  text-align: center;
  color: #000000;
  margin-top: 24px;
`;
export const InputsContainer = styled.View`
  width: 90%;
  margin-top: 42px;
`;
export const InputForm = styled.TextInput`
  width: 100%;
  height: 52px;
  padding-left: 24px;
  left: 0px;
  top: 0px;
  background: #f4f6f8;
  border-radius: 8px;
  margin-bottom: 24px;
`;
export const ButtonForm = styled.TouchableOpacity`
  height: 52px;
  justify-content: center;
  align-items: center;
  background: #ff0000;
  border-radius: 8px;
`;
export const ButtonTextForm = styled.Text`
  font-family: Lato-Bold;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;
export const SwitchForm = styled.Text`
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  color: #9ba3bb;
  text-decoration: underline;
  margin-top: 16px;
`;

