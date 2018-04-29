/* @flow */
import React from 'react';
import {View } from 'react-primitives';
import styled from 'styled-components/primitives';
import Label from './Label';
import type { Color } from '../processColor';

const SWATCH_WIDTH = 100;

type Props = {
  name: string,
  color: Color,
};


const Container = styled.View`
  margin-bottom: 48px;
  margin-right: 48px;
`;

const ColorRect = styled.View`
  width: ${SWATCH_WIDTH};
  height: ${SWATCH_WIDTH};
  background-color: ${props => props.color.hex};
  border-radius: 4px;
  margin-bottom: 8px;
`;


const Swatch = ({ color, name }: Props) => (
  <Container name={name} >
    <ColorRect color={color}/>
    <Label bold>{name}</Label>
    <Label>{color.hex}</Label>
  </Container>
);

export default Swatch;
