import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {NavigationProp} from '@react-navigation/native';

interface ISearchProps {
    navigation: NavigationProp<any>
}

const Search = (props: ISearchProps) => {

    const {navigation} = props;

    useEffect(() => {
        // @ts-ignore
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false,
        });

        navigation.setOptions(
            {
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitle: '검색',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => (
                    <Button
                        title={'on back'}
                        onPress={() => {
                            // @ts-ignore
                            navigation.dangerouslyGetParent().setOptions({
                                tabBarVisible: true,
                            });
                            navigation.navigate('Main');
                        }}/>
                ),
            });
    }, []);

    return (
        <ScrollerLayout>
            <View>
                <Text>
                    Search Layout
                </Text>
            </View>
        </ScrollerLayout>
    );

};

export default React.memo(Search);
