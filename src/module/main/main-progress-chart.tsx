import React from 'react';
import TextBox from '../component/text-box';
import HTProgressChart from '../component/chart/progress-chart';

const temp = [0.4, 0.6, 0.8];

const MainProgressChart = (props: any) => {

    return (
        <React.Fragment>
            <TextBox text={'지역별 프로그레스 차트'}/>
            <HTProgressChart data={temp}/>
        </React.Fragment>
    );
};

export default MainProgressChart;
