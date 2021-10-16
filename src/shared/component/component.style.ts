import styled from 'styled-components/native';
import { IAppSafeAreaViewProps } from './component.interface';

export const SearchIconButtonText = styled.Text`
color: rgba( 0 , 0, 0, 0.5);
`;

export const BackButtonWrap = styled.TouchableOpacity`
left: 10px;
`;

export const AppSafeAreaView = styled.SafeAreaView<IAppSafeAreaViewProps>`
flex: 1;
background-color: rgba( 255, 255, 255, 0.3);
padding-top: ${props => props.paddingTop};
`;
