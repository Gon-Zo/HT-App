import React from 'react';
import HTPieChart from '../component/pie-chart';
import TextBox from '../component/text-box';

const temp = [
    {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'New York',
        population: 8538000,
        color: '#c9c9c9',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
];

const MainPieChart = (props: any) => {

    return (
        <React.Fragment>
            <TextBox text={'지역별 파이 차트'}/>
            <HTPieChart data={temp}/>
        </React.Fragment>
    );

};


export default MainPieChart;
