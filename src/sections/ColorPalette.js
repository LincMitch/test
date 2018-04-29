/* @flow */
import React from 'react';
import Section from '../components/Section';
import Palette from '../components/Palette';

type P = {
    colors: any,
};
const ColorPalette = ({ colors }: P) => (
    <Section title="Color Palette">
        <Palette colors={colors} />
    </Section>
);

export default ColorPalette;
