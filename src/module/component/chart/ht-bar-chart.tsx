import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {IBarChartProps} from './chart.interface';

const HtBarChart = (props: IBarChartProps) => {
    const {data} = props;
    return (
        <React.Fragment>
            {/*// @ts-ignore*/}
            <BarChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={'$'}
                chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    backgroundColor: '#1cc910',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    decimalPlaces: 2,
                }}
                style={{
                    marginVertical: 8,
                    marginLeft: 5,
                    marginRight: 5,
                }}
                showBarTops={true}
            />
        </React.Fragment>
    );

};

export default HtBarChart;
