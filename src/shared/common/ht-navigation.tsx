import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../module/main/main';
import 'react-native-gesture-handler';
import Search from '../../module/search/search';
import {IHtNavigation} from './ht-navigation.interface';

const Stack = createStackNavigator();

const HtNavigation = (props: IHtNavigation) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen name="Search"
                              component={Search}
                              options={
                                  {
                                      headerStyle: {
                                          backgroundColor: '#f4511e',
                                      },
                                      headerTintColor: '#fff',
                                      headerTitle : "검색",
                                      headerTitleStyle: {
                                          fontWeight: 'bold',
                                      },
                                  }
                              }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HtNavigation;
