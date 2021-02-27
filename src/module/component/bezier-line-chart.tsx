import React from 'react';
import {Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const HTBezierLineChart = () => {
    return (
        <React.Fragment>
            <LineChart
                data={{
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={'Rs'}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </React.Fragment>
    );
};


export default HTBezierLineChart;
