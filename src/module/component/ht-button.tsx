import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase} from '@react-navigation/routers';
import {NAV} from '../../shared/utils/navigation-utils';

export interface ISearchButtonProps {
    navigation: NavigationProp<any>
}

interface IBackButtonProps {
    navigation: NavigationProp<ParamListBase>
}

export const SearchButton = (props: ISearchButtonProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate(NAV.SEARCH);

    return (
        <TouchableOpacity activeOpacity={1}
                          style={styles.searchBtn}
                          onPress={goToSearchView}>
            <Icon name={'search-outline'}
                  size={25}/>
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
