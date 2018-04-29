/* @flow */
import React from 'react';
import { View, Text } from 'react-primitives';
import styled from 'styled-components/primitives';
import Section from '../components/Section';
import Button from '../components/Button';

type P = {
    btnColors: any,
    colors: any,
    sizes: any
};

const Container = styled.View`
    width: 600px;
    flex-wrap: wrap;
    flex-direction: row;
`;

const ButtonSpacing = styled.View`
    width: 100px;
    margin-bottom: 10px;
    margin-right: 5px;
`;

const Buttons = ({ btnColors, colors, sizes }: P) => (
    <Section title="Buttons">
        <Container name="Container">
            {Object.keys(btnColors).map(name => (
                <View name={name} >
                    <Button label={name} txtColor={colors.White} bgColor={colors[name]} brdColor={colors[name]} size={sizes.Normal} />
                </View>
            ))}
            <ButtonSpacing name="Default">
                <Button label="Default" txtColor={colors.GrayDark} bgColor={colors.White} brdColor={colors.GrayLight} size={sizes.Normal} />
            </ButtonSpacing>
            <ButtonSpacing name="White">
                <Button label="White" txtColor={colors.GrayDark} bgColor={colors.White} brdColor={colors.White} size={sizes.Normal} />
            </ButtonSpacing>
            <ButtonSpacing name="Light" >
                <Button label="Light" txtColor={colors.GrayDark} bgColor={colors.GrayLightest} brdColor={colors.GrayLightest} size={sizes.Normal} />
            </ButtonSpacing>
            <ButtonSpacing name="Dark" >
                <Button label="Dark" txtColor={colors.White} bgColor={colors.GrayDark} brdColor={colors.GrayDark} size={sizes.Normal} />
            </ButtonSpacing>
            <ButtonSpacing name="Black" >
                <Button label="Black" txtColor={colors.White} bgColor={colors.Black} brdColor={colors.Black} size={sizes.Normal} />
            </ButtonSpacing>
        </Container>
    </Section>
);

export default Buttons;
