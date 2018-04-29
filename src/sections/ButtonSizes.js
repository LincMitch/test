/* @flow */
import React from 'react';
import { View } from 'react-primitives';
import styled from 'styled-components/primitives';
import Section from '../components/Section';
import Button from '../components/Button';


type P = {
    colors: any,
    sizes: any
};

const Container = styled.View`
    width: 600;
    flex-wrap: wrap;
    flex-direction: row;
`;

const ButtonWrap = styled.View`
    width: 100px;
    margin-bottom: 10px;
    margin-right: 5px;
`;

const ButtonSizes = ({ colors, sizes }: P) => (
    <Section title="Button Sizes">
        <Container>
            <ButtonWrap name="Small">
                <Button label="Small" txtColor={colors.GrayDark} bgColor={colors.White} brdColor={colors.GrayLight} size={sizes.Small} />
            </ButtonWrap>
            <ButtonWrap name="Normal">
                <Button label="Normal" txtColor={colors.GrayDark} bgColor={colors.White} brdColor={colors.GrayLight} size={sizes.Normal} />
            </ButtonWrap>
            <ButtonWrap name="Large">
                <Button label="Large" txtColor={colors.GrayDark} bgColor={colors.White} brdColor={colors.GrayLight} size={sizes.Large} />
            </ButtonWrap>
        </Container>
    </Section>
);

export default ButtonSizes;
