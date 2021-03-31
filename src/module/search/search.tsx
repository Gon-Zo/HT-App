import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ParamListBase} from '@react-navigation/routers';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface ISearchProps {
    navigation: NavigationProp<ParamListBase>
}

interface ILeftButtonProps {
    navigation: NavigationProp<ParamListBase>
}

const LeftButton = (props: ILeftButtonProps) => {
    const {navigation} = props;
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.leftBtn}
            onPress={() => {
                // @ts-ignore
                navigation.dangerouslyGetParent().setOptions({
                    tabBarVisible: true,
                });
                navigation.goBack();
            }}>
            <Icon name={'angle-left'} size={30} color={'#000'}/>
        </TouchableOpacity>
    );
};

const Search = (props: ISearchProps) => {

    const {navigation} = props;

    const [text, setText] = useState<string>('');

    useEffect(() => {
        // @ts-ignore
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false,
        });

        navigation.setOptions(
            {
                headerTitle: '검색',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (<LeftButton navigation={navigation}/>),
            });
    }, []);

    return (
        <ScrollerLayout>
            <View style={{
                width : 400 ,
                backgroundColor : "#f00",
                justifyContent : "space-between"
            }}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="useless placeholder"
                />
                <FontAwesome5Icon name={"search"} size={24}/>
            </View>
        </ScrollerLayout>
    );

};

const styles = StyleSheet.create({
    leftBtn: {
        left: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 300,
    },
});

export default React.memo(Search);
