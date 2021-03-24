import {Dimensions, Text} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import React from 'react';

const HTProgressChart = (props: any) => {
    return (
        <React.Fragment>
            <ProgressChart
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

export default HTProgressChart;
