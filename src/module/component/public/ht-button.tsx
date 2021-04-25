import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NAV} from '../../../shared/utils/navigation-utils';
import {IBackButtonProps, ISearchButtonProps} from './component.interface';
import {
    SearchIconButtonWrap,
    SearchIconButtonText,
    SearchButtonWrap,
    HomeButtonWrap,
    AreaDetailWrap,
    BackButtonWrap,
    LogoImageWrap,
} from './component.styled';

export const SearchIconButton = (props: ISearchButtonProps) => {
    const {navigation} = props;
    const goToSearchView = () => navigation.navigate(NAV.SEARCH);
    return (
        <SearchIconButtonWrap activeOpacity={1}
                              onPress={goToSearchView}>
            <SearchIconButtonText>어디에 집을 구하지?</SearchIconButtonText>
            <Icon name={'search-outline'} size={23}/>
        </SearchIconButtonWrap>
    );
};

export const LogoImage = () => {
    return (
        <LogoImageWrap source={require('../../assest/img/logo.jpg')}/>
    );
};

export const SearchButton = (props: ISearchButtonProps) => {
    const {navigation} = props;
    const goToSearchView = () => navigation.navigate(NAV.SEARCH);
    return (
        <SearchButtonWrap activeOpacity={1}
                          onPress={goToSearchView}>
            <Icon name={'search-outline'} size={25}/>
        </SearchButtonWrap>
    );
};

export const HomeButton = (props: ISearchButtonProps) => {
    const {navigation} = props;
    return (
        <HomeButtonWrap
            activeOpacity={1}
            onPress={() => null}>
            <Icon name={'md-home-outline'} size={25} color={'#000'}/>
        </HomeButtonWrap>
    );
};

export const AreaDetailButton = (props: ISearchButtonProps) => {
    const {navigation} = props;
    return (
        <AreaDetailWrap>
            <HomeButton navigation={navigation}/>
            <SearchButton navigation={navigation}/>
        </AreaDetailWrap>
    );
};

export const BackButton = (props: IBackButtonProps) => {
    const {navigation} = props;
    return (
        <BackButtonWrap
            activeOpacity={1}
            onPress={() => {
                // @ts-ignore
                navigation.dangerouslyGetParent().setOptions({
                    tabBarVisible: true,
                });
                navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={30} color={'#000'}/>
        </BackButtonWrap>
    );
};
