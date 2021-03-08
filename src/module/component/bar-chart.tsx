import {Dimensions, Text} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import React from 'react';

/*
{
    labels:
        ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
    {
        data: [20, 45, 28, 80, 99, 43],
    },
],
}
*/

const HTBarChart = (props : any) => {
    return (
        <React.Fragment>
            {/*// @ts-ignore*/}
            <BarChart
                data={props.data}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={'Rs'}
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

export default HTBarChart;
