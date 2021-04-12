import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HtHeader = (props: any) => {

    const {scene, previous, navigation} = props.data;

    const {options} = scene.descriptor;

    const title =
        options.headerTitle !== undefined
            ? options.headerTitle : options.title !== undefined
            ? options.title
            : scene.route.name;

    console.log('>>>>>>>>>', title);

    console.log('>>>>>>>>>', options);

    return (
        <View style={{
            backgroundColor: '#fff',
        }}>
            <View style={{
                height: 50,
                backgroundColor: '#f00',
                marginTop: 40,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    flex : 1,
                    backgroundColor : 'gray'
                }}>
                    <Text>{title}</Text>
                </View>
                <View style={{
                    flex : 1
                }}>
                    {options.headerRight()}
                </View>
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
                    borderWidth: .7,
                    borderRadius: 5,
                    borderColor: 'rgba( 0 , 0, 0, 0.7)',
                }}>
                    <Icon style={{
                        paddingLeft: 12,
                    }} name="map-marker" size={18}/>
                    <Text style={{
                        paddingLeft: 5,
                        fontSize: 16,
                        fontWeight: '500',
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
};

export default HtHeader;
