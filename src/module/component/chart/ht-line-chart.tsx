import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const HtLineChart = (props: any) => {

    const data = props.data;
    return (
        <React.Fragment>
            <LineChart
                data={data}
                width={Dimensions.get('window').width}
                height={220}
                yAxisLabel={'$'}
                yAxisSuffix={'k'}
                yAxisInterval={1}
                chartConfig={
                    {
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(63, 143, 244, ${opacity})`,
                        strokeWidth: 2, // optional, default 3
                    }
                }
                style={{
                    marginVertical: 8,
                }}/>
        </React.Fragment>
    );
};


export default HtLineChart;
