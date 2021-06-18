import {NavigationProp, RouteProp} from "@react-navigation/native";

export type DashboardStack = {
    Dashboard: undefined,
    DashboardDetail: {
        key: string
    }
}

export interface IDashboardProps {
    navigation: NavigationProp<DashboardStack, 'Dashboard'>
}

export interface IDashboardDetailProps {
    navigation: NavigationProp<DashboardStack, 'DashboardDetail'>
    route: RouteProp<DashboardStack, 'DashboardDetail'>
}
