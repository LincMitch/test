/* @flow */
import React from 'react';
import {View, Text } from 'react-primitives';
import Section from '../components/Section';
import TypeSpecimen from '../components/TypeSpecimen';

type P = {
    fonts: any,
};
const Typography = ({ fonts }: P) => (
    <Section title="Typography">
        {Object.keys(fonts).map(keyName => (
            <View>
                <TypeSpecimen name={keyName} style={fonts[keyName]}/>
            </View>
        ))}
    </Section>
);

export default Typography;
