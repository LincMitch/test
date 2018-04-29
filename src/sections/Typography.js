/* @flow */
import React from 'react';
import { render, TextStyles } from 'react-sketchapp';
import Section from '../components/Section';
import TypeSpecimen from '../components/TypeSpecimen';

type P = {
    fonts: any,
};
const Typography = ({ fonts }: P) => (
<Section title="Typography">
    {Object.keys(fonts).map(name => (
        <TypeSpecimen name={name} style={TextStyles.get(name)} />
    ))}
</Section>
);

export default Typography;
