import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ICustomTabProps} from './component.interface';

const MyTabBar = (props: ICustomTabProps) => {

    const {state, descriptors, navigation} = props;

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#F4AF5F',
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/*// @ts-ignore*/}
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {

                    // @ts-ignore
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }

                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        // @ts-ignore
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{flex: 1}}
                    >
                        <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

};

export default MyTabBar;
