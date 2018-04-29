/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text } from 'react-primitives';
import styled from 'styled-components/primitives';
import { spacing, fonts } from '../designSystem';

type Props = {
    label: string,
    bgColor: string,
    brdColor: string,
    txtColor: string,
    size: any
};

const ButtonBox = styled.View`
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    width: 100px;
    border-style: solid;
    border-width: 1px;
    background-color: ${props => props.bgColor.hex};
    border-color: ${props => props.brdColor.hex};
    padding: ${props => props.size.padding}px;
`;

const ButtonText = styled.Text`
    font-family: ${fonts.Body.fontFamily};
    font-weight: regular;
    text-align: center;
    color:  ${props => props.txtColor.hex};
    font-size:  ${props => props.size.fontSize};
`;

const Button = ({ bgColor, brdColor, size, label, txtColor}: Props) => (
    <ButtonBox bgColor={bgColor} brdColor={brdColor} size={size} >
        <ButtonText txtColor={txtColor} size={size}>
            {label}
        </ButtonText>
    </ButtonBox>
);

export default Button;
