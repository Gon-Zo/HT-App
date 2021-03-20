import React from 'react';
import {Text, View} from 'react-native';
import ScrollerLayout from '../../shared/assest/scroller-layout';

interface ISearchProps {
}

const Search = (props: ISearchProps) => {

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
