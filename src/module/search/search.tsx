import React from 'react';
import {Text, View} from 'react-native';
import ScrollerLayout from '../../shared/assest/scroller-layout';

const Search = (props: any) => {

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
