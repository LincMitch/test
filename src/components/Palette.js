/* @flow */
import React from 'react';
import {View } from 'react-primitives';
import styled from 'styled-components/primitives';
import Swatch from './Swatch';

const SWATCH_WIDTH = 500;

type P = {
  colors: any,
};

/*
Is theis correct. Was:
((${SWATCH_WIDTH} + 48) * 4)
Swatches need to be in better rows
*/

const PaletteContainer = styled.View`
  width: ${SWATCH_WIDTH + 48 * 4};
  flex-wrap: wrap;
  flex-direction: row;
`;
const Palette = ({ colors }: P) => (
  <PaletteContainer>
    {Object.keys(colors).map(name => <Swatch color={colors[name]} name={name} />)}
  </PaletteContainer>
);

export default Palette;
