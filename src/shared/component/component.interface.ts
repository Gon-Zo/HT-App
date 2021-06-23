import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface IBaseReducer {
    load: boolean,
    error: any,
    data: any
}

export interface IScrollerLayout {
    children: React.ReactNode
    stickyList: number[]
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

export type IAreaParentsCode = {
    key: string,
    active: boolean,
    list: Array<IAreaChildCode>
}

export type IAreaChildCode = {
    key: string
}

export interface IAreaListProps {
    onPress: (key: string) => void
    areaCodeList: any[]
}

export interface IAreaSubItemProps {
    item: IAreaChildCode,
    index: number,
    onPress: Function
}

export interface IAreaItemProps {
    item: IAreaParentsCode
    index: number
    onSwitch: Function
}

export interface IHeaderComponentProps {
    title: string
}
