import React, {useEffect} from 'react';
import ScrollerLayout from '../../shared/common/scroller-layout';
import {Text, TouchableOpacity, View} from 'react-native';
import {IAreaProps} from './area.interface';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Area = (props: IAreaProps) => {

    const {navigation} = props;

    const goToSearchView = () => navigation.navigate("Search")

    useEffect(() => {
        navigation.setOptions({
            headerTitle: '지역',
            headerRight: ((props: any) =>
                    <TouchableOpacity activeOpacity={1}
                                      style={{right: 10}}
                                      onPress={goToSearchView}>
                        <FontAwesome5Icon name={'search'} size={20}/>
                    </TouchableOpacity>
            ),
        });
    }, []);

    return (
        <ScrollerLayout>
            <View>
                <Text>Area</Text>
            </View>
        </ScrollerLayout>
    );
};

export default Area;
