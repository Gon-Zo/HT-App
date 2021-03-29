import {NavigationProp} from '@react-navigation/native';

export interface IAreaProps {
    navigation: NavigationProp<any>
}

export interface IAreaItemProps {
    item: IAreaData
    index: number
    onSwitch: Function
}

export interface IAreaSubItemProps {
    item: IAreaSubData,
    index: number
}

export interface IAreaData {
    key: string,
    active: boolean,
    list: string[]
}

export interface IAreaSubData {
    key: string
}
