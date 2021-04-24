import React, {useEffect, useState} from 'react';
import {IHtTab, ITabItemProps} from './component.interface';
import styled from 'styled-components/native';

interface ITapWrap {
    active: boolean
}

const TapWrap = styled.View`
flex-direction: row;
`;

const TapItemWrap = styled.TouchableOpacity`
flex-direction: column;
flex : 1;
align-items: center;
background-color: #fff;
border-bottom-width: 1.5px;
padding : 10px;
borderBottomColor: ${(props: ITapWrap) => props.active ? 'blue' : 'transparent'}
`;

const TapItemText = styled.Text`
fontSize: 17px;
color: ${(props: ITapWrap) => props.active ? 'blue' : 'rgba(0,0,0,.5)'},
`;

const TapItem = (props: ITabItemProps) => {

    const {text, onPress, index, active} = props;

    return (
        <TapItemWrap
            activeOpacity={1}
            active={active}
            onPress={(event) => onPress(index)}>
            <TapItemText active={active}>{text}</TapItemText>
        </TapItemWrap>
    );
};

const HtTab = (props: IHtTab) => {

    const {data} = props;

    const [payload, setPayload] = useState([]);

    useEffect(() => {
        createByTabData(0, data);
    }, []);

    const _onPress = (index: number) => {
        // @ts-ignore
        createByTabData(index, payload);
    };

    const createByTabData = (index: number, payload: []) => {
        const _payload = payload.map((data, _index) => {
            const _copy = JSON.parse(JSON.stringify(data));
            const isActive = _index == index;
            return {
                ..._copy,
                active: isActive,
            };
        });
        // @ts-ignore
        setPayload(_payload);
    };

    return (
        <TapWrap>
            {
                payload.map((data: any, index: number) => (
                    <TapItem key={index}
                             text={data.text}
                             onPress={_onPress}
                             index={index}
                             active={data.active}/>
                ))
            }
        </TapWrap>
    );
};

export default HtTab;
