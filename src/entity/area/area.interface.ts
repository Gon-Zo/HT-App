import {NavigationProp, RouteProp} from '@react-navigation/native';

export type StackParamList = {
    Area: undefined,
    Search: undefined,
    AreaRegion: {
        key: string,
        index : number,
        code : string
    },
    AreaDetail: {
        title: string
    }
}

export interface IAreaProps {
    navigation: NavigationProp<StackParamList, 'Area'>
}

export interface IAreaRegionProps {
    navigation: NavigationProp<StackParamList, 'AreaRegion'>
    route: RouteProp<StackParamList, 'AreaRegion'>
}

export interface IChartComponentStyledProps {
    height: number,
    width: number
}

