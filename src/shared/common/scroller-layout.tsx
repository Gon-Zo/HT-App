import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

interface IScrollerLayout {
    children: React.ReactNode
}

const ScrollerLayout = (props: IScrollerLayout) => {

    const {children} = props

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
});

export default ScrollerLayout
