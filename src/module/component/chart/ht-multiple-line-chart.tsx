import React from 'react';
import {Chart, HorizontalAxis, Line, VerticalAxis} from 'react-native-responsive-linechart';
import {Dimensions} from 'react-native';

const HtMultipleLineChart = () => {
    return (
        <Chart
            style={{height: 200, width: Dimensions.get('window').width}}
            data={[
                {x: 5, y: 15},
                {x: 6, y: 6},
                {x: 7, y: 15},
                {x: 8, y: 3},
            ]}
            padding={{left: 40, bottom: 20, right: 20, top: 20}}
            xDomain={{min: 5, max: 8}}
        >
            <VerticalAxis
                tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                theme={{
                    axis: {stroke: {color: '#aaa', width: 2}},
                    ticks: {stroke: {color: '#aaa', width: 2}},
                    labels: {formatter: (v: number) => v.toFixed(2)},
                }}
            />
            <HorizontalAxis
                tickCount={9}
                theme={{
                    axis: {stroke: {color: '#aaa', width: 2}},
                    ticks: {stroke: {color: '#aaa', width: 2}},
                    labels: {label: {rotation: 50}, formatter: (v) => v.toFixed(1)},
                }}
            />
            <Line theme={{stroke: {color: 'red', width: 2}}}/>
            <Line smoothing="bezier" tension={0.15} theme={{stroke: {color: 'blue', width: 2}}}/>
            <Line smoothing="bezier" tension={0.3} theme={{stroke: {color: 'green', width: 2}}}/>
            <Line smoothing="cubic-spline" tension={0.3} theme={{stroke: {color: 'orange', width: 2}}}/>
        </Chart>
    );
};


export default HtMultipleLineChart;
