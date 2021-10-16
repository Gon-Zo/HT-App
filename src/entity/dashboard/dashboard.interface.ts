import { NavigationProp, RouteProp } from "@react-navigation/native";

export type DashboardState = {
    isSelectDateAble: boolean
}

export type DashboardStack = {
    Dashboard: undefined,
    DashboardDetail: {
        key: string,
        index: number,
        code: string
    }
}

export interface IDashboardProps {
    // navigation: NavigationProp<DashboardStack, 'Dashboard'>
    navigation: NavigationProp<any>
}

export interface IDashboardDetailProps {
    navigation: NavigationProp<DashboardStack, 'DashboardDetail'>
    route: RouteProp<DashboardStack, 'DashboardDetail'>
}

export type BaseCardData = {
    title: string
    count1: number
    count2: number
}

export interface ICardGroupProps {
    data: any
}

export type CardGroupState = {
    cardData: Array<BaseCardData>
    topData: Array<BaseCardData>
    isLoad: boolean
}
