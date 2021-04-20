import React, {useState} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native';

interface ITabItemProps {
    text: string,
    index: number,
    onPress: Function,
    active : boolean
}

const TabItem = (props: ITabItemProps) => {

    const {text, onPress, index} = props;

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
            onPress={(event) => onPress(index)}
        >
            <Text style={{
                fontSize: 17,
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

const TAB_DATA = [
    {"text" : "아파트" , active : false},
    {"text" : "연립다세대" , active : false},
    {"text" : "단독주택" , active : false}
]

const HtTab = (props: any) => {

    const _onPress = (index: number) => {
        console.log('>>>>>>>>', index);
    };

    return (
        <View style={{
            flexDirection: 'row',
        }}>
            {
                TAB_DATA.map((data: any, index: number) => (
                    <TabItem text={data.text} onPress={_onPress} index={index} active={data.active}/>
                ))
            }
        </View>
    );
};


export default HtTab;
