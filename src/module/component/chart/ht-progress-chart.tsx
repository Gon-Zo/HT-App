import React from 'react';
import {Dimensions} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {IProgressChartProps} from './chart.interface';

const HtProgressChart = (props: IProgressChartProps) => {

    const {data} = props;

    return (
        <React.Fragment>
            <ProgressChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2,
                    backgroundColor: '#1cc910',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                    marginVertical: 8,
                    marginLeft: 5,
                    marginRight: 5,
                }}
            />
        </React.Fragment>
    );
};


export default HtProgressChart;
