import {Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import React from 'react';

const HTPieChart = (props: any) => {
    return (
        <React.Fragment>
            <PieChart
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
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute //For the absolute number else percentage
            />
        </React.Fragment>
    );
};

export default HTPieChart;
