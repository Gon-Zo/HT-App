import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {BackButton} from '../component/public/ht-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {ISearchProps} from './search.interface';
import {SearchViewWrap, SearchTextInput, SearchButton} from './search.styled';

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
                headerStyle: {
                    height: 110,
                },
            });

    }, []);

    return (
        <ScrollerLayout>
            <SearchViewWrap>
                <SearchTextInput value={text}
                                 onChangeText={setText}
                                 placeholder="지역명으로 찾아보세요"/>
                <SearchButton>
                    <Icon name={'ios-search'} size={25}/>
                </SearchButton>
            </SearchViewWrap>
        </ScrollerLayout>
    );
};

export default React.memo(Search);
