import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {actuatedNormalize} from '../../shared/utils/font-utils';
import {IAreaItemProps, IAreaSubItemProps} from './area.interface';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {moderateScale, verticalScale} from 'react-native-size-matters' ;

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

        if (active) {
            _itemStyle.push({backgroundColor: '#fff'});
            _textStyle.push({color: '#000'});
        }

        setItemStyle(_itemStyle);
        setTextStyle(_textStyle);

    }, [active]);

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

    const {item, index, onPress} = props;

    const {key} = item;

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.subItem}
            onPress={() => onPress(key)}>
            <Text>{key}</Text>
            {/*<FontAwesome5Icon name={'chevron-right'} style={styles.subIcon}/>*/}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 1.5,
        marginRight: 0,
        marginLeft: 0,
        height: verticalScale(40),
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
    subItem: {
        height: verticalScale(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: moderateScale(30),
        borderBottomColor: '#868585',
        borderBottomWidth: .3,
    },
    subIcon: {
        right: moderateScale(50),
    },
});
