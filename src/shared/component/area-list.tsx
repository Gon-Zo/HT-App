import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AreaItem, SubAreaItem} from './area-item';
import {IAreaListProps, IAreaState, IAreaSubState} from "./component.interface";

const AreaList = (props: IAreaListProps) => {

    const {onPress} = props;

    const [items, setItems] = useState<IAreaState[]>([]);

    const [subItems, setSubItems] = useState<IAreaSubState[]>([]);

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

    useEffect(() => {

        const {areaCodeList} = props

        const items = areaCodeList.map((payload: any, index: number) => {

            const key = payload.title

            const active = index == 0

            const list: IAreaSubState = payload.childList.map((child: any, j: number) => {
                return {
                    key: child.title
                }
            })

            if (active) {
                // @ts-ignore
                setSubItems(list)
            }

            return {
                key,
                active,
                list
            }
        })

        // @ts-ignore
        setItems(items)

    }, [props.areaCodeList])

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
                                     onPress={onPress}/>
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
