import React from 'react';
import {IScrollerLayout} from "./component.interface";
import {ScrollView} from "react-native";
import { GlobalSafeAreaView } from "./component";

const ScrollLayout = (props: IScrollerLayout) => {

    const {children, stickyList} = props;

    return (
        <GlobalSafeAreaView>
            <ScrollView stickyHeaderIndices={stickyList}>
                {children}
            </ScrollView>
        </GlobalSafeAreaView>
    );
};

export default React.memo(ScrollLayout);
