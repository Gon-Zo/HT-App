import {NavigationProp, RouteProp} from '@react-navigation/native';

export type StackParamList = {
    Area: undefined,
    Search: undefined,
    AreaRegion: {
        key: string
    },
    AreaDetail: undefined
}

export interface IAreaProps {
    navigation: NavigationProp<any>
}

export interface IAreaRegionProps {
    navigation: NavigationProp<StackParamList, 'AreaRegion'>
    route: RouteProp<StackParamList, 'AreaRegion'>
}

export interface IAreaItemProps {
    item: IAreaData
    index: number
    onSwitch: Function
}

export interface IAreaSubItemProps {
    item: IAreaSubData,
    index: number,
    onPress: Function
}

export interface IAreaData {
    key: string,
    active: boolean,
    list: string[]
}

export interface IAreaSubData {
    key: string
}

export interface IChartComponentStyledProps {
    height: number,
    width: number
}

export interface IAreaChartComponentProps {
    text: string,
    open: boolean
}
