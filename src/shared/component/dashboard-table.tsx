import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { StyleSheet, View } from "react-native";

const tableHead = [ '아파트 명', '전월세', '보증금']

const tableData = [
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c']
]

const DashboardTable = (props: any) => {
    return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 1}}>
                <Row data={tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text}/>
                <TableWrapper style={styles.wrapper}>
                    <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
                </TableWrapper>
            </Table>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff'},
    head: {height: 40, backgroundColor: '#f1f8ff'},
    wrapper: {flexDirection: 'row'},
    title: {flex: 1, backgroundColor: '#f6f8fa'},
    row: {height: 28},
    text: {textAlign: 'center'}
});


export default React.memo(DashboardTable)
