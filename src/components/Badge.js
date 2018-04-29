/* @flow */
import React from 'react';
import {View, Text } from 'react-primitives';
import styled from 'styled-components/primitives';

type P = {
  filled?: boolean,
  children?: React$Element<any>,
};

const BadgeContainer = styled.View`
  borderRadius: 4px;
  backgroundColor: filled ? #333 : transparent;
  paddingLeft: 8px;
  paddingRight: 8px;
  borderWidth: 1px;
  borderColor: #333;
`;

const BadgeText = styled.Text`
  color: filled ? #fff : #333;
`;

const Badge = ({ children, filled }: P) => (
  <BadgeContainer>
    <BadgeText>
      {children}
    </BadgeText>
  </BadgeContainer>
);

export default Badge;
