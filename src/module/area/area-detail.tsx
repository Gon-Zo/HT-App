import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import HtResponsiveLineChart from '../component/chart/ht-responsive-line-chart';
import Icon from 'react-native-vector-icons/AntDesign';
import hasLibraryImported from '@react-native-community/cli-platform-ios/build/link/hasLibraryImported';

const AreaDetail = (props: any) => {

    return (
        <ScrollerLayout>
            <ChartComponent text={'매매가격지수'}/>
            <ChartComponent text={'전월세통합지수'}/>
            <ChartComponent text={'전세가격지수'}/>
            <ChartComponent text={'월세가격지수'}/>
            <ChartComponent text={'매매가격'}/>
            <ChartComponent text={'전세가격'}/>
            <ChartComponent text={'월세가격'}/>
            <ChartComponent text={'매매가격 대비 전세가격'}/>
            <ChartComponent text={'전세가격 대비 보증금'}/>
            <ChartComponent text={'수급동향'}/>
            <ChartComponent text={'기타'}/>
        </ScrollerLayout>
    );

};

const ChartComponent = (props: any) => {
    const text = props.text;
    const [isShow, setIsShow] = useState(false);
    const [height, setHeight] = useState(35);

    const _onClick = () => {
        setIsShow(!isShow);
        setHeight(!isShow ? 235 : 35);
    };

    return (
        <View style={{
            marginTop: 10,
            marginBottom: 10,
            height: height,
            width: Dimensions.get('window').width,
        }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
            }} onPress={_onClick}>
                <Text style={{
                    flex: .9,
                    fontSize: 20,
                    fontWeight: '600',
                    paddingLeft: 10,
                }}>{text}</Text>
                <TouchableOpacity style={{flex: .1}} onPress={_onClick}>
                    <Icon name={isShow ? 'minussquareo' : 'plussquareo'} size={24}/>
                </TouchableOpacity>
            </TouchableOpacity>
            {
                isShow && <HtResponsiveLineChart/>
            }
        </View>
    );
};

export default AreaDetail;
