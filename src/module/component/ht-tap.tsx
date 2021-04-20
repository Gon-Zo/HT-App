import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native';

interface ITabItemProps {
    text: string,
    onPress: Function
}

const TabItem = (props: ITabItemProps) => {

    const {text, onPress} = props;

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'column',
                flex: 1,
                padding: 10,
                marginLeft: 3,
                paddingRight: 3,
                alignItems: 'center',
                borderBottomColor: 'gray',
                borderBottomWidth: 3,
            }}
            onPress={(event) => onPress(event)}
        >
            <Text style={{
                fontSize: 17,
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

const HtTab = (props: any) => {

    const _onPress = (event : GestureResponderEvent) => {
        console.log(">>>>>>>>" , event.target)
    };

    return (
        <View style={{
            flexDirection: 'row',
        }}>
            <TabItem text={'아파트'} onPress={_onPress}/>
            <TabItem text={'연립다세대'} onPress={_onPress}/>
            <TabItem text={'단독주택'} onPress={_onPress}/>
        </View>
    );
};


export default HtTab;
