import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {IMainProps} from './main.interface';
import {LogoImage, SearchIconButton} from '../component/public/ht-button';
import HtLineChart from '../component/chart/ht-line-chart';
import {barchartData, lineData, lineData2, pieData, progressData, stackChartData} from '../component/chart/demo-data';
import HtProgressChart from '../component/chart/ht-progress-chart';
import HtBarChart from '../component/chart/ht-bar-chart';
import HtStackChart from '../component/chart/ht-stack-chart';
import HtPieChart from '../component/chart/ht-pie-chart';
import HtResponsiveLineChart from '../component/chart/ht-responsive-line-chart';
import HtMultipleLineChart from '../component/chart/ht-multiple-line-chart';

const Main = (props: IMainProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitleAlign: 'left',
                headerTitle: ((props: any) => (<LogoImage/>)),
                headerRight: ((props: any) => <SearchIconButton navigation={navigation}/>),
                headerStyle: {
                    height: 110,
                },
            },
        );
    }, []);

    return (
        <ScrollerLayout>
            <HtMultipleLineChart/>
            <HtResponsiveLineChart/>
            <HtPieChart data={pieData}/>
            <HtStackChart data={stackChartData}/>
            <HtBarChart data={barchartData}/>
            <HtLineChart data={lineData} isBezier={false}/>
            <HtLineChart data={lineData2} isBezier={true}/>
            <HtProgressChart data={progressData}/>
        </ScrollerLayout>
    );

};

export default React.memo(Main);
