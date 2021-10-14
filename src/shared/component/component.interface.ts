import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { StyleProp, TextStyle } from "react-native";

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

export interface IHtTapStyleProps {
    active: boolean
}

export type IAreaParentsCode = {
    key: string,
    active: boolean,
    index: number,
    code: string,
    list: Array<IAreaChildCode>
}

export type IAreaChildCode = {
    key: string,
    index: number,
    code: string,
}

export interface IAreaListWrapProps extends IAreaListProps {
    areaCodeLoad: boolean
}

export interface IAreaListProps {
    onPress: (select: any) => void
    areaCodeList: any[]
}

export interface IAreaCodeItemProps {
    item: IAreaParentsCode
    index: number
    onSwitch: Function
}

export interface IAppTextProps {
    title?: string,
    style?: StyleProp<TextStyle>
}

export interface IGlobalSafeAreaViewProps {
    children: React.ReactNode
}

export interface IAppSafeAreaViewProps {
    paddingTop: number
}
