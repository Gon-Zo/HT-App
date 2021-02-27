import {Dimensions, Text} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import React from 'react';

const HTPieChart = () => {
    return (
        <React.Fragment>
            <PieChart
                data={[
                    {
                        name: 'Seoul',
                        population: 21500000,
                        color: 'rgba(131, 167, 234, 1)',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                    {
                        name: 'Toronto',
                        population: 2800000,
                        color: '#F00',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                    {
                        name: 'New York',
                        population: 8538000,
                        color: '#ffffff',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                    {
                        name: 'Moscow',
                        population: 11920000,
                        color: 'rgb(0, 0, 255)',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                    },
                ]}
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
