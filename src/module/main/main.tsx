import React from 'react'
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/assest/scroller-layout';

const Main = (props: any) => {
    return (
        <ScrollerLayout>
            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </ScrollerLayout>
    );
};

export default Main
