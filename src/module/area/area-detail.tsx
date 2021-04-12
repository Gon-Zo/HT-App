import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IAreaDetailProps} from './area.interface';
import {AreaDetailButton, BackButton} from '../component/ht-button';

const AreaDetail = (props: IAreaDetailProps) => {

    const {navigation, route} = props;

    const {key} = route.params;

    useEffect(() => {
        navigation.setOptions(
            {
                headerTitle: '지역별',
                headerLeft: (props: any) => (<BackButton navigation={navigation}/>),
                headerRight: (() => <AreaDetailButton navigation={navigation}/>),
                headerStyle : {
                    height: 110
                },
            });
    }, []);

    return (
        <ScrollerLayout>
            <View style={{
                flexDirection: 'row',
                flex: 1,
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                        padding: 10,
                        marginRight: 5,
                        borderColor: '#cac8c8',
                        borderWidth: 1.5,
                        borderRadius: 5,
                    }}
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Area')}>
                    <Icon name="map-marker" size={20}/>
                    <Text style={{paddingLeft: 5, fontWeight: 'bold', fontSize: 15}}>
                        {key}
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    padding: 10,
                    marginLeft: 5,
                    borderColor: '#cac8c8',
                    borderWidth: 1.5,
                    borderRadius: 5,
                }}>
                    <Icon name="calendar-o" size={24}/>
                    <Text style={{paddingLeft: 5}}>03.30 ~ 03.21</Text>
                </View>
            </View>

        </ScrollerLayout>
    );

};

export default AreaDetail;
