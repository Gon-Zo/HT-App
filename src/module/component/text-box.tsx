import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {actuatedNormalize} from '../../shared/utils/font-utils';

const TextBox = (props: any) => {

    const [text, setText] = useState('');

    useEffect(() => {
        const _text = props.text;
        setText(_text);
    }, [props.text]);

    return (
        <View style={styles.textContainer}>
            <Text style={styles.textBox}>{text}</Text>
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
