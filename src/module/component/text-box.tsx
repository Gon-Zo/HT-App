import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {actuatedNormalize} from '../../shared/utils/font-utils';
import {ITextBox} from './component.interface';

const TextBox = (props: ITextBox) => {

    const {text} = props;

    const [title, setTitle] = useState('');

    useEffect(() => {
        const _title = text;
        setTitle(_title);
    }, [text]);

    return (
        <View style={styles.textContainer}>
            <Text style={styles.textBox}>{title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    textContainer: {
        alignSelf: 'stretch',
    },
    textBox: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: actuatedNormalize(15),
    },
});


export default TextBox;
