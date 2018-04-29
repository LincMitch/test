/* @flow */
import React from 'react';
import { View } from 'react-primitives';
import { colors, spacing, fonts } from '../designSystem';
import Section from '../components/Section';
import TextBox from '../components/TextBox';
import Label from '../components/Label';


type P = {
    colors: any,
    sizes: any
};
const InputFields = ({ colors, sizes }: P) => (
    <Section title="Input Fields">
        <TextBox
            label={'Email'}
            value="brian.pulliese@medicaldirector.com"
            type={'email'}
        />
    </Section>
);

export default InputFields;
