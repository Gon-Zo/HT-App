import styled from 'styled-components/native';

export const SearchViewWrap = styled.View`
width: 400px;
background-color: rgba( 0 , 0, 0, 0.05);
flex-direction: row;
justify-content: space-between;
padding: 5px;
padding-left: 15px;
margin: 10px;
border-width: 1px;
border-color: rgba( 0 , 0, 0, 0.15);
border-radius: 5px;
`;

export const SearchTextInput = styled.TextInput`
flex: 1;
height: 40px;
font-size: 16px;
`;

export const SearchButton = styled.TouchableOpacity`
flex: 0.15;
align-items: center;
justify-content: center;
`;
