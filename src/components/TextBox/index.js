/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-primitives';
import styled from 'styled-components/primitives';
import { colors, spacing, fonts } from '../../designSystem';

/***
QUESTIONS:
* 1. Input looks odd. Also, place View and Text in agnostic page
* 2. Input not recognised as a style component
***/

class TextBox extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: this.props.value,
    };
  }

  props: {
    label: string,
    type: string,
    value: string,
    children?: React$Element<any>,
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  const Container = styled.View`
    margin-bottom: spacing.Medium;
  `;

  const InputLabel = styled.Text`
    display: block;
    font-family: fonts.Body.fontFamily;
    margin-bottom: 0px;
    font-size: fonts.Body.fontSize - 4;
    color: colors.GreenLight;
  `;

  const Input = styled.input`
    box-sizing: border-box;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: colors.GreenLight;
    background-color: colors.White;
    font-family: fonts.Body.fontFamily;
    font-size: fonts.Body.fontSize;
    line-height: fonts.Body.lineHeight;
    padding-top: spacing.Small - 3;
    padding-bottom: spacing.Small;
    width: 300px;
    line-height: 100%;
  `;


  render() {
    return (
      <Container style={styles.formElement}>
        <InputLabel
          htmlFor={this.props.type}
        >
          {this.props.label}
        </InputLabel>
        <Input 
          id={this.props.type}
          type={this.props.type}
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.props.children &&
          React.cloneElement(this.props.children, { password: this.state.value })
        }
      </Container>
    );
  }
}

export default TextBox;
