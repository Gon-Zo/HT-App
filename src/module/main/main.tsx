import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {IMainProps} from './main.interface';
import {LogoImage, SearchIconButton} from '../component/ht-button';
import HtLineChart from '../component/chart/ht-line-chart';

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
            ],
        },
    ],
};

const Main = (props: IMainProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitleAlign: 'left',
                headerTitle: ((props: any) => (<LogoImage/>)),
                headerRight: ((props: any) => <SearchIconButton navigation={navigation}/>),
                headerStyle: {
                    height: 110,
                },
            },
        );
    }, []);

    return (
        <ScrollerLayout>
            <HtLineChart data={lineData}/>
        </ScrollerLayout>
    );

};

export default React.memo(Main);
