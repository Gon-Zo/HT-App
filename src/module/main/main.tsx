import React from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/assest/scroller-layout';
import {Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface IMainProps {
    navigation: NavigationProp<any>
}

const Main = (props: IMainProps) => {

    const {navigation} = props;

    return (
        <ScrollerLayout>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Search')}/>
            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </ScrollerLayout>
    );

};

export default React.memo(Main);
