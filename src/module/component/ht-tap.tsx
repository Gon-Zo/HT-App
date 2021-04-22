import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IHtTab, ITabItemProps} from './component.interface';

const TabItem = (props: ITabItemProps) => {

    const {text, onPress, index, active} = props;

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                flexDirection: 'column',
                flex: 1,
                padding: 10,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderBottomWidth: 1.5,
                borderBottomColor: active ? 'blue' : 'transparent',
            }}
            onPress={(event) => onPress(index)}
        >
            <Text style={{
                fontSize: 17,
                color : active ? "blue" : "rgba(0,0,0,.5)"
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

const HtTab = (props: IHtTab) => {

    const {data} = props;

    const [payload, setPayload] = useState([]);

    useEffect(() => {
        createByTabData(0, data);
    }, []);

    const _onPress = (index: number) => {
        // @ts-ignore
        createByTabData(index, payload);
    };

    const createByTabData = (index: number, payload: []) => {
        const _payload = payload.map((data, _index) => {
            const _copy = JSON.parse(JSON.stringify(data));
            const isActive = _index == index;
            return {
                ..._copy,
                active: isActive,
            };
        });
        // @ts-ignore
        setPayload(_payload);
    };

    return (
        <View style={{
            flexDirection: 'row',
        }}>
            {
                payload.map((data: any, index: number) => (
                    <TabItem key={index}
                             text={data.text}
                             onPress={_onPress}
                             index={index}
                             active={data.active}/>
                ))
            }
        </View>
    );
};

export default HtTab;
