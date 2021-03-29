import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IAreaData} from './area.interface';
import {AreaItem, SubAreaItem} from './area-item';
import {AREA_DATA} from './area-data';

const AreaList = () => {

    const [items, setItems] = useState<IAreaData[]>([]);

    const onSwitch = (index: number) => {
        const _items = items.map((payload) => {
            const _payload = JSON.parse(JSON.stringify(payload));
            _payload.active = false;
            return _payload;
        });
        _items[index].active = !_items[index].active;
        setItems(_items);
    };

    useEffect(() => {
        setItems(JSON.parse(JSON.stringify(AREA_DATA)));
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
                    renderItem={({item, index}) =>
                        <SubAreaItem item={item}
                                     index={index}/>
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
});

export default AreaList;
