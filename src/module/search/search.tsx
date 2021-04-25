import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {BackButton} from '../component/public/ht-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {ISearchProps} from './search.interface';

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
                headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerStyle : {
                    height: 110
                },
            });

    }, []);

    return (
        <ScrollerLayout>
            <View style={{
                width: 400,
                backgroundColor: 'rgba( 0 , 0, 0, 0.05)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
                paddingLeft: 15,
                margin: 10,
                borderWidth: 1,
                borderColor: 'rgba( 0 , 0, 0, 0.15)',
                borderRadius: 5,
            }}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="지역명으로 찾아보세요"
                />
                <TouchableOpacity style={{
                    flex: 0.15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Icon name={'ios-search'} size={25}/>
                </TouchableOpacity>
            </View>
        </ScrollerLayout>
    );

};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
});

export default React.memo(Search);
