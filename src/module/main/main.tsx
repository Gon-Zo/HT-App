import React, {useEffect} from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {IMainProps} from './main.interface';
import {NAV} from '../../shared/utils/navigation-utils';
import {LogoImage, SearchIconButton} from '../component/ht-button';

const Main = (props: IMainProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate(NAV.SEARCH);

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitleAlign: 'left',
                headerTitle: ((props: any) => (<LogoImage/>)),
                headerRight: ((props: any) => <SearchIconButton navigation={navigation}/>),
                headerStyle : {
                    height: 110
                }
            },
        );
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
