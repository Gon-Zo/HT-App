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
                        backgroundColor: '#fff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#ffa726',
                        },
                    }
                }
                style={
                    {
                        marginVertical: 8,
                    }
                }
            />
        </React.Fragment>
    );

};


export default HtLineChart;
