import React from 'react';
import {Dimensions} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';
import {IStackChartProps} from './chart.interface';

const HtStackChart = (props: IStackChartProps) => {

    const {data} = props;

    return (
        <React.Fragment>
            <StackedBarChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
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
                hideLegend={false}
            />
        </React.Fragment>
    );
};

export default HtStackChart;
