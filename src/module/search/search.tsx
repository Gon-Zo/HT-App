import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {NavigationProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {BackButton} from '../component/ht-button';

interface ISearchProps {
    navigation: NavigationProp<ParamListBase>
}

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
                headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
            });

    }, []);

    return (
        <ScrollerLayout>
            <View style={{
                width: 400,
                backgroundColor: '#f00',
                justifyContent: 'space-between',
            }}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="useless placeholder"
                />
                <FontAwesome5Icon name={'search'} size={24}/>
            </View>
        </ScrollerLayout>
    );

};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 300,
    },
});

export default React.memo(Search);
