import React, {useEffect} from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {IMainProps} from './main.interface';
import {Button, Image, View} from 'react-native';
import {IRightButton} from '../../shared/common/interface/common.interface';
import {NAV} from '../../shared/utils/navigation-utils';
import {StackedAreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const Main = (props: IMainProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate(NAV.SEARCH);

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitleAlign: 'left',
                headerTitle: ((props: any) => (<LogoImage/>)),
                headerRight: ((props: any) => <RightButton onPress={goToSearchView}/>),
            },
        );
    }, []);

    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 3840,
            bananas: 1920,
            cherries: 960,
            dates: 400,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 1600,
            bananas: 1440,
            cherries: 960,
            dates: 400,
        },
        {
            month: new Date(2015, 2, 1),
            apples: 640,
            bananas: 960,
            cherries: 3640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 3320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
    ];

    const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
    const keys = ['apples', 'bananas', 'cherries', 'dates'];
    const svgs = [
        {onPress: () => console.log('apples')},
        {onPress: () => console.log('bananas')},
        {onPress: () => console.log('cherries')},
        {onPress: () => console.log('dates')},
    ];


    return (
        <ScrollerLayout>

            <StackedAreaChart
                style={{height: 200, paddingVertical: 16}}
                data={data}
                keys={keys}
                colors={colors}
                curve={shape.curveNatural}
                showGrid={false}
                svgs={svgs}
            />

            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </ScrollerLayout>
    );

};

const LogoImage = () => {
    return (
        <Image
            source={require('../../assest/img/logo.jpg')}
            style={{width: 50, height: 50}}/>
    );
};

const RightButton = (props: IRightButton) => {
    const {onPress} = props;
    return (
        <Button title={'test'} onPress={() => onPress()}/>
    );
};

export default React.memo(Main);
