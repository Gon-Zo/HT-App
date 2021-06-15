import React from 'react';
import {IScrollerLayout} from "./component.interface";
import {ScrollerAreaWrap} from './component.style';
import {ScrollView} from "react-native";

const ScrollLayout = (props: IScrollerLayout) => {

    const {children} = props;

    return (
        <ScrollerAreaWrap>
            <ScrollView stickyHeaderIndices={[1]}>
                {children}
            </ScrollView>
        </ScrollerAreaWrap>
    );
};

export default ScrollLayout;
