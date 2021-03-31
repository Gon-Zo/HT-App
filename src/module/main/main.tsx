import React, {useEffect} from 'react';
import MainBarChart from './main-bar-chart';
import MainPieChart from './main-pie-chart';
import MainProgressChart from './main-progress-chart';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {IMainProps} from './main.interface';
import {Button, Image} from 'react-native';
import {IRightButton} from '../../shared/common/interface/common.interface';
import {NAV} from '../../shared/utils/navigation-utils';

const Main = (props: IMainProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate(NAV.SEARCH);

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitleAlign: 'left',
                headerTitle: ((props: any) => (<LogoImage/>)),
                headerRight: ((props: any) => <RightButton onPress={goToSearchView}/>),
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

const LogoImage = () => {
    return (
        <Image
            source={require('../../assest/img/logo.jpg')}
            style={{width: 50, height: 50}}/>
    );
};

const RightButton = (props: IRightButton) => {
    const {onPress} = props;
    return (
        <Button title={'test'} onPress={() => onPress()}/>
    );
};

export default React.memo(Main);
