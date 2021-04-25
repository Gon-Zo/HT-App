import styled from 'styled-components/native';
import {IHtTapStyleProps} from './ht-tap.interface';

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
borderBottomColor: ${(props: IHtTapStyleProps) => props.active ? 'blue' : 'transparent'}
`;

export const TapItemText = styled.Text`
fontSize: 17px;
color: ${(props: IHtTapStyleProps) => props.active ? 'blue' : 'rgba(0,0,0,.5)'},
`;
