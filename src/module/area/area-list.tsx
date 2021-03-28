import React, {useState} from 'react';
import {FlatList, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {actuatedNormalize} from '../../shared/utils/font-utils';

const AreaList = () => {

    const areaData = [
        {key: '서울', active: false},
        {key: '경기', active: false},
        {key: '인천', active: false},
        {key: '강원', active: false},
        {key: '제주', active: false},
        {key: '대전', active: false},
        {key: '충북', active: false},
        {key: '충남/세종', active: false},
        {key: '부산', active: false},
        {key: '울산', active: false},
        {key: '경남', active: false},
        {key: '대구', active: false},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.areaList}>
                <FlatList
                    data={areaData}
                    keyExtractor={({key}, index) => index.toString()}
                    renderItem={({item}) => <AreaItem item={item}/>}
                />
            </View>
            <View style={{flex: 0.7, backgroundColor: 'orange'}}>
                <FlatList
                    data={[
                        {key: '서울'},
                        {key: '경기'},
                        {key: '인천'},
                        {key: '강원'},
                        {key: '제주'},
                        {key: '대전'},
                        {key: '충북'},
                        {key: '충남/세종'},
                        {key: '부산'},
                        {key: '울산'},
                        {key: '경남'},
                        {key: '대구'},
                    ]}
                    renderItem={({item}) => <Text> {item.key} </Text>}
                />
            </View>


        </View>
    );

};

interface IAreaItemProps {
    item: any
}

const AreaItem = (props: IAreaItemProps) => {

    const item = props.item;

    const [status, setStatus] = useState<boolean>(false);

    const [itemStyle, setItemStyle] = useState<StyleProp<ViewStyle>[]>([styles.item]);

    const onSwitch = () => {
        setStatus(!status);
        console.log('>>>>>>>>>>> status', status);
        if (status == false) {
            const tempItemStyle = itemStyle;
            const activeStyle: StyleProp<ViewStyle> = {backgroundColor: '#f00'};
            tempItemStyle.push(activeStyle);
            setItemStyle(tempItemStyle);
        } else {
            const tempItemStyle = itemStyle;
            tempItemStyle.pop();
            setItemStyle(tempItemStyle);
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={itemStyle}
            onPress={onSwitch}>
            <Text style={styles.itemText}>{item.key}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    areaList: {
        flex: 0.3,
        backgroundColor: '#ECEFF1',
    },
    item: {
        margin: 3,
        marginRight: 0,
        marginLeft: 0,
        height: 50,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#f00',
        borderBottomColor: '#f00',
    },
    itemText: {
        fontSize: actuatedNormalize(13),
        fontWeight: '600',
    },
});

export default AreaList;
