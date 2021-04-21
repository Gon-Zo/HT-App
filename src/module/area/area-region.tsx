import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {IAreaRegionProps} from './area.interface';
import {AreaDetailButton, BackButton} from '../component/ht-button';
import HtTable from '../component/ht-table';
import HtTab from '../component/ht-tap';

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
                headerTitle: '지역별',
                headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
                headerRight: (() => <AreaDetailButton navigation={navigation}/>),
                headerStyle: {
                    height: 110,
                },
            });
    }, []);
    return (
        <React.Fragment>
            {/*// @ts-ignore*/}
            <HtTab data={TAB_DATA}/>
            <HtTable/>
            <Button title={'test'} onPress={() => {
                navigation.navigate('AreaDetail');
            }}/>
        </React.Fragment>
    );

};

export default AreaRegion;
