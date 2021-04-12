import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NAV} from '../../shared/utils/navigation-utils';
import {IBackButtonProps, ISearchButtonProps} from './interface/component.interface';

export const SearchIconButton = (props: ISearchButtonProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate(NAV.SEARCH);

    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'rgba( 0 , 0, 0, 0.05)',
                width: 250,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                marginRight: 20,
                borderWidth: 1,
                borderColor: 'rgba( 0 , 0, 0, 0.15)',
                borderRadius: 5,
            }}
            onPress={goToSearchView}>
            <Text style={{
                color: 'rgba( 0 , 0, 0, 0.5)',
            }}>어디에 집을 구하지?</Text>
            <Icon name={'search-outline'} size={23}/>
        </TouchableOpacity>
    );
};


export const LogoImage = () => {
    return (
        <Image
            source={require('../../assest/img/logo.jpg')}
            style={{width: 50, height: 50}}/>
    );
};

export const SearchButton = (props: ISearchButtonProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate(NAV.SEARCH);

    return (
        <TouchableOpacity activeOpacity={1}
                          style={styles.searchBtn}
                          onPress={goToSearchView}>
            <Icon name={'search-outline'} size={25}/>
        </TouchableOpacity>
    );
};

export const HomeButton = (props: ISearchButtonProps) => {
    const {navigation} = props;
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.homeBtn}
            onPress={() => {
            }}>
            <Icon name={'md-home-outline'} size={25} color={'#000'}/>
        </TouchableOpacity>
    );
};

export const AreaDetailButton = (props: ISearchButtonProps) => {

    const {navigation} = props;

    return (
        <View style={styles.areaDetailWrap}>
            <HomeButton navigation={navigation}/>
            <SearchButton navigation={navigation}/>
        </View>
    );
};

export const BackButton = (props: IBackButtonProps) => {

    const {navigation} = props;

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.backBtn}
            onPress={() => {
                // @ts-ignore
                navigation.dangerouslyGetParent().setOptions({
                    tabBarVisible: true,
                });
                navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={30} color={'#000'}/>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    searchBtn: {
        right: 10,
    },
    homeBtn: {
        right: 30,
    },
    areaDetailWrap: {
        flexDirection: 'row',
    },
    backBtn: {
        left: 10,
    },
});
