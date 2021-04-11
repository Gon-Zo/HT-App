import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {Text, TouchableOpacity, View} from 'react-native';
import {IAroundProps} from './around.interface';
import {SearchButton} from '../component/ht-button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Around = (props: IAroundProps) => {

    const {navigation} = props;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '내주변',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (() => <SearchButton navigation={navigation}/>),
            header: () => {
                return (
                    <View style={{
                        backgroundColor : "#fff"
                    }}>
                        <View style={{
                            height: 50,
                            backgroundColor: '#f00',
                            marginTop: 40,
                            flexDirection: 'row',
                        }}>
                            <Text>This is CustomHeader</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            height: 50,
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                flex: 1,
                                height: 40,
                                alignItems: 'center',
                                marginLeft: 20,
                                marginTop: 5,
                                marginRight: 5,
                                borderWidth : .7,
                                borderRadius : 5,
                                borderColor : 'rgba( 0 , 0, 0, 0.7)'
                            }}>
                                <Icon style={{
                                    paddingLeft : 12
                                }} name="map-marker" size={18}/>
                                <Text style={{
                                    paddingLeft : 5,
                                    fontSize : 16,
                                    fontWeight : '500'
                                }}>
                                    서초/신사/방배
                                </Text>
                            </TouchableOpacity>
                            <View style={{
                                flexDirection: 'column',
                                backgroundColor: 'gray',
                                flex: 1,
                                height: 40,
                                marginRight: 20,
                                marginTop: 5,
                                marginLeft: 5,
                            }}>
                                <Text>
                                    TEST
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            },
        });
    }, []);

    return (
        <ScrollerLayout>
            <View>
                <Text>
                    TEST
                </Text>
            </View>
        </ScrollerLayout>
    );
};


export default Around;
