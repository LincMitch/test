/* @flow */
import React from 'react';
import { View, Text } from 'react-primitives';
import styled from 'styled-components/primitives';
import Label from './Label';

type P = {
  name: string,
  style: any,
};



const Container = styled.View`
  flex-direction: row;
  margin-bottom: 24;
`;


const LabelWrap = styled.View`
  width: 100;
`;


const TypeSpecimen = ({ name, style }: P) => (
  <Container name={`TypeSpecimen-${name}`} >
    <LabelWrap>
      <Label>
        {`${style.fontSize} / ${style.lineHeight}`}
      </Label>
    </LabelWrap>
    <Text
      style={{
        ...style,
      }}
    >
     {name} 
    </Text> 
  </Container>
);

export default TypeSpecimen;
