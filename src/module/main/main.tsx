import React, {useEffect} from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {MAIN_HEADER_OPTIONS} from '../component/ht-component';
import {IMainProps} from './main.interface';

const Main = (props: IMainProps) => {

    const {navigation} = props;

    const _goToSearchView = () => navigation.navigate('Search');

    useEffect(() => {
        navigation.setOptions(MAIN_HEADER_OPTIONS(_goToSearchView));
    }, []);

    return (
        <ScrollerLayout>
            <MainBarChart/>
            <MainPieChart/>
            <MainProgressChart/>
        </ScrollerLayout>
    );

};

export default React.memo(Main);
