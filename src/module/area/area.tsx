import React, {useEffect} from 'react';
import {IAreaProps} from './area.interface';
import AreaList from './area-list';
import {SearchButton} from '../component/public/ht-button';
import {AreaSafeAreaView} from './area.styled';

const Area = (props: IAreaProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '지역',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle: {
                height: 110,
            },
            // @ts-ignore
            headerRight: (() => <SearchButton navigation={navigation}/>),
        });
    }, []);

    return (
        <AreaSafeAreaView>
            <AreaList navigation={navigation}/>
        </AreaSafeAreaView>
    );

};


export default Area;
