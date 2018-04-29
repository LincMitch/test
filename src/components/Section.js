/* @flow */
import React from 'react';
import { View } from 'react-primitives';
import styled from 'styled-components/primitives';
import Label from './Label';

type P = {
  title: string,
  children?: any,
};

const Container = styled.View`
  margin-bottom: 96px;
  flex-direction: row;
`;

const Title = styled.View`
  width: 200px;
`;

const Examples = styled.View`

`;


const Section = ({ title, children }: P) => (
  <Container name={title}>
    <Title >
      <Label bold>{title}</Label>
    </Title>
    <Examples>
      {children}
    </Examples>
  </Container>
);

export default Section;
