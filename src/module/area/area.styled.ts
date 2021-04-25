import styled from 'styled-components/native';
import {IChartComponentStyledProps} from './area.interface';

export const AreaSafeAreaView = styled.SafeAreaView`
flex: 1;
`;

export const ChartComponentWrap = styled.View`
margin-top: 10px;
margin-bottom: 10px;
height : ${(props : IChartComponentStyledProps)=> props.height}px;
width : ${(props: IChartComponentStyledProps) => props.width}px;
`;

export const ChartComponentTextWrap = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`;

export const ChartComponentText = styled.Text`
flex: .9;
font-size: 20px;
font-weight: 600;
padding-left: 10px;
`;

export const ChartComponentButton = styled.TouchableOpacity`
flex : 1;
`;
