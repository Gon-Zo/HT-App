import {NavigationHelpers, ParamListBase, TabNavigationState} from '@react-navigation/native';
import {BottomTabDescriptorMap, BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/src/types';

export interface ITextBox {
    text: string
}

export interface ICustomTabProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

