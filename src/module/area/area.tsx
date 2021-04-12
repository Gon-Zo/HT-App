import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {IAreaProps} from './area.interface';
import AreaList from './area-list';
import {SearchButton} from '../component/ht-button';

const Area = (props: IAreaProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '지역',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle : {
                height: 110
            },
            headerRight: (() => <SearchButton navigation={navigation}/>),
        });
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <AreaList navigation={navigation}/>
        </SafeAreaView>
    );

};


export default Area;
