import styled from 'styled-components/native';
import { IAppSafeAreaViewProps } from './component.interface';

export const SearchIconButtonText = styled.Text`
color: rgba( 0 , 0, 0, 0.5);
`;

export const AppSafeAreaView = styled.SafeAreaView<IAppSafeAreaViewProps>`
flex: 1;
background-color: rgba( 255, 255, 255, 0.3);
padding-top: ${props => props.paddingTop};
`;

export const NoDataWrap = styled.View<any>`
flex: 1;
justify-content: center;
align-items: center;
`;
