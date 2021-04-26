import React, {useEffect} from 'react';
import {IAreaRegionProps} from './area.interface';
import {AreaDetailButton, BackButton} from '../component/public/ht-button';
import HtTable from '../component/public/ht-table';
import HtTab from '../component/public/ht-tap';

const TAB_DATA = [
    {'text': '아파트', active: false},
    {'text': '연립다세대', active: false},
    {'text': '단독주택', active: false},
];

const AreaRegion = (props: IAreaRegionProps) => {

    const {navigation, route} = props;
    const {key} = route.params;

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitle: key,
                headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
                headerRight: (() => <AreaDetailButton navigation={navigation}/>),
                headerStyle: {
                    height: 110,
                },
            });
    }, []);

    const _onPressByTable = (title: string) => {
        navigation.navigate('AreaDetail', {title: title});
    };


    return (
        <React.Fragment>
            {/*// @ts-ignore*/}
            <HtTab data={TAB_DATA}/>
            <HtTable onPress={_onPressByTable}/>
        </React.Fragment>
    );

};

export default AreaRegion;
