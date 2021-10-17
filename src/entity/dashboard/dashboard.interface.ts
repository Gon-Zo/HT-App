import { NavigationProp, RouteProp } from "@react-navigation/native";

export type DashboardState = {
    isSelectDateAble: boolean
    isFilterModal: boolean
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
}

export type SaveFilterData = {
    readonly pickerObj: any,
    readonly typeObj: any,
    readonly filterDate: IFilterDate,
    readonly pickerData: any
    readonly subData: any
}

export interface IFilterDate {
    startDate: string,
    endDate: string
}

export interface IFilterModalProps {
    isVisible: boolean
    toClose: () => void,
    startDate: string,
    endDate: string,
    region: any
}

export type AreaCodeData = {
    id: number
    code: string,
    name: string,
    type: string,
    subAreaCodeList: Array<AreaCodeData>,
    createBy: string,
    createDate: string
}

export enum tabEnum  {
    '지역'= 'A',
    '날짜'= 'B',
    '거래'= 'C',
}
