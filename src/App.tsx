import React from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';

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

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Text>TEST</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Provider>
    );
};

export default App;
