import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            left: 10,
                        }}
                        onPress={() => {
                            // @ts-ignore
                            navigation.dangerouslyGetParent().setOptions({
                                tabBarVisible: true,
                            });
                            navigation.navigate('Main');
                        }}>
                        <Icon name={'angle-left'} size={30} color={'#000'}/>
                    </TouchableOpacity>
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
