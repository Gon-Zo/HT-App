import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {IAreaData, IAreaProps, IAreaSubData} from './area.interface';
import {AreaItem, SubAreaItem} from './area-item';
import {AREA_DATA} from './area-data';

const AreaList = (props: IAreaProps) => {

    const {navigation} = props;

    const [items, setItems] = useState<IAreaData[]>([]);

    const [subItems, setSubItems] = useState<IAreaSubData[]>([]);

    const onSwitch = (index: number) => {
        const _items = items.map((payload) => {
            const _payload = JSON.parse(JSON.stringify(payload));
            _payload.active = false;
            return _payload;
        });
        const _selectItem = _items[index];
        _selectItem.active = !_selectItem.active;
        setItems(_items);
        setSubItems(_selectItem.list);
    };

    const onPress = (key: string) => {
        navigation.navigate('AreaDetail', {key: key});
    };

    useEffect(() => {
        // @ts-ignore
        const _subItems = AREA_DATA.find((payload: IAreaData) => payload.active).list;
        setItems(JSON.parse(JSON.stringify(AREA_DATA)));
        setSubItems(_subItems);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.areaList}>
                <FlatList
                    data={items}
                    keyExtractor={({key}, index) => index.toString()}
                    renderItem={({item, index}) =>
                        <AreaItem index={index}
                                  item={item}
                                  onSwitch={onSwitch}/>}
                />
            </View>
            <View style={styles.subList}>
                <FlatList
                    data={subItems}
                    renderItem={({item, index}) =>
                        <SubAreaItem item={item}
                                     index={index}
                                     onPress={onPress}
                        />
                    }/>
            </View>


        </View>
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
    subList: {
        flex: 0.7,
        backgroundColor: '#fff',
    },
});

export default AreaList;
