import styled from 'styled-components/native';

interface ITapWrap {
    active: boolean
}

export const TapWrap = styled.View`
flex-direction: row;
`;

export const TapItemWrap = styled.TouchableOpacity`
flex-direction: column;
flex : 1;
align-items: center;
background-color: #fff;
border-bottom-width: 1.5px;
padding : 10px;
borderBottomColor: ${(props: ITapWrap) => props.active ? 'blue' : 'transparent'}
`;

export const TapItemText = styled.Text`
fontSize: 17px;
color: ${(props: ITapWrap) => props.active ? 'blue' : 'rgba(0,0,0,.5)'},
`;
