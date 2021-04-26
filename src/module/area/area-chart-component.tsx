import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import HtResponsiveLineChart from '../component/chart/ht-responsive-line-chart';
import {
    ChartComponentButton,
    ChartComponentText,
    ChartComponentTextWrap,
    ChartComponentWrap,
} from './area.styled';
import {Dimensions} from 'react-native';
import {IAreaChartComponentProps} from './area.interface';

const AreaChartComponent = (props: IAreaChartComponentProps) => {

    const {text , open} = props;

    const [isShow, setIsShow] = useState(false);

    const [height, setHeight] = useState(35);

    useEffect(() => {
        setIsShow(open)
        setHeight(open ? 235 : 35);
    }, []);

    const _onClick = () => {
        setIsShow(!isShow);
        setHeight(!isShow ? 235 : 35);
    };

    return (
        <ChartComponentWrap
            height={height}
            width={Dimensions.get('window').width}>
            <ChartComponentTextWrap onPress={_onClick}>
                <ChartComponentText>{text}</ChartComponentText>
                <ChartComponentButton onPress={_onClick}>
                    <Icon name={isShow ? 'minussquareo' : 'plussquareo'} size={24}/>
                </ChartComponentButton>
            </ChartComponentTextWrap>
            {
                isShow && <HtResponsiveLineChart/>
            }
        </ChartComponentWrap>
    );

};

export default AreaChartComponent;
