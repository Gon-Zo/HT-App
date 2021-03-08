import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import React from 'react';

/*
                    {
                    labels:
                        ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                            strokeWidth: 2,
                        },
                    ],
                }
 */

const HTLineChart = (props: any) => {
    return (
        <React.Fragment>
            <LineChart
                data={props.data}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </React.Fragment>
    );
};


export default HTLineChart
