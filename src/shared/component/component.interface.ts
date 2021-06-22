import React from 'react';
import {NavigationHelpers, NavigationProp, ParamListBase, TabNavigationState} from '@react-navigation/native';
import {BottomTabDescriptorMap, BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/src/types';

export interface IBaseReducer {
    load: boolean,
    error: any,
    data: any
}


export interface IScrollerLayout {
    children: React.ReactNode
    stickyList: number[]
}

export interface ITextBox {
    text: string
}

export interface ICustomTabProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export interface ISearchButtonProps {
    navigation: NavigationProp<any>
}

export interface IBackButtonProps {
    navigation: NavigationProp<ParamListBase>
}

export interface IAreaTabProps {
    data: any[]
}

export interface ITabItemProps {
    text: string,
    index: number,
    onPress: Function,
    active: boolean
}

export interface IHtTapStyleProps {
    active: boolean
}

export type IAreaState = {
    key: string,
    active: boolean,
    list: string[]
}

export type IAreaSubState = {
    key: string
}

export interface IAreaListProps {
    onPress: (key : string) => void
    areaCodeList : any[]
}

export interface IAreaSubItemProps {
    item: IAreaSubState,
    index: number,
    onPress: Function
}

export interface IAreaItemProps {
    item: IAreaState
    index: number
    onSwitch: Function
}

export interface IHeaderComponentProps {
    title : string
}
