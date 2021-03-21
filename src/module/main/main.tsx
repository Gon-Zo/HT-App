import React, {useEffect} from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/assest/scroller-layout';
import {NavigationProp} from '@react-navigation/native';
import {LogoImage, MAIN_HEADER_OPTIONS, RightButton} from '../component/ht-component';

interface IMainProps {
    navigation: NavigationProp<any>
}


const Main = (props: IMainProps) => {

    const {navigation} = props;

    const _goToSearchView = () => navigation.navigate('Search');

    useEffect(() => {
        navigation.setOptions(MAIN_HEADER_OPTIONS(_goToSearchView));
    }, [navigation]);

    return (
        <ScrollerLayout>
            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </ScrollerLayout>
    );

};

export default React.memo(Main);
