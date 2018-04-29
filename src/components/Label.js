/* @flow */
import React from 'react';
import { Text } from 'react-primitives';
import styled from 'styled-components/primitives';
import {fonts } from '../designSystem';

type P = {
  bold?: boolean,
  children?: any,
};

const LabelText = styled.Text`
  color: #333;
  font-weight: bold ? bold : normal;
  font-family: ${fonts.Body.fontFamily};
  font-size: 16px;
  line-height: 24px;
`;

const Label = ({ bold, children }: P) => (
  <LabelText>
    {children}
  </LabelText>
);

export default Label;
