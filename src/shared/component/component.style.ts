import styled from 'styled-components/native';
import { IAppSafeAreaViewProps, IHtTapStyleProps } from './component.interface';

export const ScrollerAreaWrap = styled.SafeAreaView`
flex: 1;
background-color: white;
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

export const BackButtonWrap = styled.TouchableOpacity`
left: 10px;
`;

// font-size: ${actuatedNormalize(15)};

export const AppSafeAreaView = styled.SafeAreaView<IAppSafeAreaViewProps>`
flex: 1;
background-color: #fff;
padding-top: ${props => props.paddingTop};
`;
