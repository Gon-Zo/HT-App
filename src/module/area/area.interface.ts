import {NavigationProp , RouteProp} from '@react-navigation/native';

export type StackParamList = {
    Area: undefined,
    Search: undefined,
    AreaDetail: {
        key : string
    }
}

export interface IAreaProps {
    navigation: NavigationProp<any>
}

export interface IAreaDetailProps {
    navigation: NavigationProp<StackParamList, 'AreaDetail'>
    route: RouteProp<StackParamList, 'AreaDetail'>
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
