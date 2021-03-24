import {Button, Image} from 'react-native';
import React from 'react';
import {IRightButton} from '../../shared/common/interface/common.interface';

export const LogoImage = () => {
    return (
        <Image
            source={require('../../assest/img/logo.jpg')}
            style={{width: 50, height: 50}}/>
    );
};

export const RightButton = (props: IRightButton) => {
    const {onPress} = props;
    return (
        <Button title={'test'} onPress={() => onPress()}/>
    );

};

export const MAIN_HEADER_OPTIONS = (onPress: Function) => {
    return {
        headerTitleAlign: 'left',
        headerTitle: ((props: any) => (<LogoImage/>)),
        headerRight: ((props: any) => <RightButton onPress={onPress}/>),
    };
};
