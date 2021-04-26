import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Table, Row} from 'react-native-table-component';
const tableHeader = ['아파트명', '아파트명2', 'Head3'];
const widthArr = [200, 200, 80];

const HtTable = (props: any) => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {

        const tableData = [];

        for (let i = 0; i < 30; i += 1) {

            const rowData = [];

            for (let j = 0; j < 3; j += 1) {
                rowData.push(`아파트 ${i}${j}`);
                if (j == 1) {
                    rowData.push(elementButton(i));
                }
            }

            tableData.push(rowData);

        }
        // @ts-ignore
        setTableData(tableData);

    }, []);

    const elementButton = (value: number) => (
        <TouchableOpacity onPress={() => _alertIndex(value)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>button</Text>
            </View>
        </TouchableOpacity>
    );

    const _alertIndex = (value: number) => {
        const title = `아파트 명 ${value}`;
        props.onPress(title)
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row data={tableHeader} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            {
                                tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={widthArr}
                                        // @ts-ignore
                                        style={[styles.row, index % 2 && {backgroundColor: '#F7F6E7'}]}
                                        textStyle={styles.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    header: {height: 50, backgroundColor: '#537791'},
    text: {textAlign: 'center', fontWeight: '100'},
    dataWrapper: {marginTop: -1},
    row: {height: 40, backgroundColor: '#E7E6E1'},
    btn: {width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2},
    btnText: {textAlign: 'center'},
});

export default HtTable;
