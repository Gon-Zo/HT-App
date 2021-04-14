import React from 'react';
import {Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {IPieChartProps} from './chart.interface';

const HtPieChart = (props: IPieChartProps) => {
    const {data} = props;
    return (
        <React.Fragment>
            <PieChart
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
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute={false}
            />
        </React.Fragment>
    );

};

export default HtPieChart;
