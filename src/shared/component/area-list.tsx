import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AreaCodeItem, AreaCodeSubItem} from './area-code-item';
import {IAreaListProps, IAreaParentsCode, IAreaChildCode} from "./component.interface";
import {toInitAreaCodes} from "./component.service";

const AreaList = (props: IAreaListProps) => {

    const {onPress} = props;

    const [items, setItems] = useState<Array<IAreaParentsCode>>([]);

    const [subItems, setSubItems] = useState<Array<IAreaChildCode>>([]);

    const onSwitch = (index: number) => {

        const initAreaCodeList = items.map(toInitAreaCodes);

        const selectAreaCode: IAreaParentsCode = initAreaCodeList[index];

        selectAreaCode.active = !selectAreaCode.active;

        setItems(initAreaCodeList);

        const isEmpty = selectAreaCode.list.length == 0;

        if (isEmpty) {
            onPress(selectAreaCode)
            setSubItems([])
        } else {
            setSubItems(selectAreaCode.list)
        }

    };

    useEffect(() => {

        const {areaCodeList} = props

        if (typeof areaCodeList == "undefined") return;

        const items: Array<IAreaParentsCode> = areaCodeList
            .map((codeItem: any, num: number) => {

                const key = codeItem['name']

                const index = num;

                const code = codeItem['code']

                const active = num == 0

                const list = codeItem['subAreaCodeList']
                    .map((subCodeItem: any, jum: number) => {

                        return {
                            key: subCodeItem['name'],
                            index: jum,
                            code: subCodeItem['code']
                        }
                    })

                if (active) {
                    setSubItems(list)
                }

                return {
                    key,
                    active,
                    index,
                    code,
                    list
                } as IAreaParentsCode

            })

        setItems(items)

    }, [props.areaCodeList])

    return (
        <View style={styles.container}>
            <View style={styles.areaList}>
                <FlatList
                    data={items}
                    keyExtractor={({key}, index) => index.toString()}
                    renderItem={({item, index}) =>
                        <AreaCodeItem index={index}
                                      item={item}
                                      onSwitch={onSwitch}/>}
                />
            </View>
            <View style={styles.subList}>
                <FlatList
                    data={subItems}
                    renderItem={({item, index}) =>
                        <AreaCodeSubItem item={item}
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
