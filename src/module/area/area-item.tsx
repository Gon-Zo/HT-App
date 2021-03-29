import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {actuatedNormalize} from '../../shared/utils/font-utils';
import {IAreaItemProps, IAreaSubItemProps} from './area.interface';

export const AreaItem = (props: IAreaItemProps) => {

    const {key, active} = props.item;

    const index = props.index;

    const [itemStyle, setItemStyle] = useState<StyleProp<ViewStyle>[]>([]);

    const [textStyle, setTextStyle] = useState<StyleProp<ViewStyle>>([]);

    const onSwitch = () => props.onSwitch(index);

    useEffect(() => {

        const _itemStyle = JSON.parse(JSON.stringify(itemStyle));
        const _textStyle = JSON.parse(JSON.stringify(textStyle));

        _itemStyle.push(styles.item);
        _textStyle.push(styles.itemText);

        setItemStyle(_itemStyle);
        setTextStyle(_textStyle);

    }, []);

    useEffect(() => {

        const _itemStyle = JSON.parse(JSON.stringify(itemStyle));
        const _textStyle = JSON.parse(JSON.stringify(textStyle));

        const itemStyleSize = itemStyle.length;

        if (active == true && itemStyleSize != 0) {

            _itemStyle.push(styles.item);
            _textStyle.push(styles.itemText);

            _itemStyle.push({backgroundColor: '#fff'});
            _textStyle.push({color: '#000'});

        } else if (active == true && itemStyleSize == 0) {

            _itemStyle.push(styles.item);
            _textStyle.push(styles.itemText);

        } else if (active == false && itemStyleSize != 0) {
            _itemStyle.pop();
            _textStyle.pop();
        } else {
            _itemStyle.push(styles.item);
            _textStyle.push(styles.itemText);
        }

        console.log('>>>>> item', key);

        console.log('>>>>>>>> style', _itemStyle);

        setItemStyle(_itemStyle);
        setTextStyle(_textStyle);

    }, [props.item.active]);

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={itemStyle}
            onPress={onSwitch}>
            <Text style={textStyle}>{key}</Text>
        </TouchableOpacity>
    );

};

export const SubAreaItem = (props: IAreaSubItemProps) => {
    const {key} = props.item;

    return (
        <TouchableOpacity>
            <Text>{key}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 1.5,
        marginRight: 0,
        marginLeft: 0,
        height: 50,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: actuatedNormalize(13),
        color: '#868585',
        fontWeight: '600',
    },
});
