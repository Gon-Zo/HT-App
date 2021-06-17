import styled from 'styled-components/native';
import {IHtTapStyleProps} from './component.interface';

export const ScrollerAreaWrap = styled.SafeAreaView`
flex: 1;
background-color: white;
`;

export const ScrollerViewWrap = styled.View`
flex: 1;
background-color: white;
justify-content: center;
align-items: center;
text-align: center;
padding: 10px;
`;


export const ScrollerArea = styled.ScrollView`
flex: 1;
background-color: white;
text-align: center;
padding: 10px;
`


export const TabWrap = styled.View`
flex-direction: row;
`;

export const TabItemWrap = styled.TouchableOpacity`
flex-direction: column;
flex : 1;
align-items: center;
background-color: #fff;
border-bottom-width: 1.5px;
padding : 10px;
borderBottomColor: ${(props: IHtTapStyleProps) => props.active ? 'blue' : 'transparent'}
`;

export const TabItemText = styled.Text`
fontSize: 17px;
color : ${(props: IHtTapStyleProps) => props.active ? 'blue' : 'rgba(0,0,0,.5)'};
`;

export const SearchIconButtonWrap = styled.TouchableOpacity`
background-color: rgba( 0 , 0, 0, 0.05);
width: 250px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
margin-right: 20px;
border-width: 1px;
border-color: rgba( 0 , 0, 0, 0.15);
border-radius: 5px;
`;

export const SearchIconButtonText = styled.Text`
color: rgba( 0 , 0, 0, 0.5);
`;

export const SearchButtonWrap = styled.TouchableOpacity`
right: 10px;
`;

export const HomeButtonWrap = styled.TouchableOpacity`
right: 30px;
`;

export const AreaDetailWrap = styled.View`
flex-direction: row;
`;

export const BackButtonWrap = styled.TouchableOpacity`
left: 10px;
`;

export const LogoImageWrap = styled.Image`
width: 50px;
height: 50px;
`;

export const TextBoxWrap = styled.View`
align-self: stretch;
`;

export const TextBoxText = styled.Text`
text-align: left;
font-weight: bold;
`;
// font-size: ${actuatedNormalize(15)};
