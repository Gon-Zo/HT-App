import {NavigationProp, RouteProp} from "@react-navigation/native";

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
    navigation : NavigationProp<any>
}

export interface IDashboardDetailProps {
    navigation: NavigationProp<DashboardStack, 'DashboardDetail'>
    route: RouteProp<DashboardStack, 'DashboardDetail'>
}
