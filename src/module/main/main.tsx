import React from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/assest/scroller-layout';
import {Button} from 'react-native';

// @ts-ignore
const Main = (props: any) => {

    return (
        <ScrollerLayout>

            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Search')}
            />

            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </ScrollerLayout>
    );
};

export default React.memo(Main);
