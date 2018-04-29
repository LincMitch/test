import React from 'react';
import { View, Text } from 'react-primitives';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';
import styled from 'styled-components';
import TypographyWeb from './sections/TypographyWeb';
import ColorPalette from './sections/ColorPalette';
import Buttons from './sections/Buttons';
import ButtonSizes from './sections/ButtonSizes';
// import InputFields from './sections/InputFields';
// import Content from './Content';


// Fonts look different on the web view

// export default () => (


const Document = ({ system }: { system: DesignSystem }) => (
  <View>
    {/* <script src={"./lottie.js"}></script>
    <script src={"./index.js"}></script>
    <script>
      {alert("Hello! I am an alert box!!")}
    </script> */}
    <View>
      <TypographyWeb fonts={system.fonts} />
      {/* Linton, does this need to be seperate web code?  Need to make a better solution for TextStyles - platform specific */}
      <ColorPalette colors={system.colors} />
      <Buttons btnColors={system.buttonColors} colors={system.colors} sizes={system.buttonSizes} />
      <ButtonSizes colors={system.colors} sizes={system.buttonSizes} />
      {/* <InputFields colors={system.colors} sizes={system.buttonSizes} /> */}
    </View>
  </View>
);

export default (context: any) => (
  <Document system={designSystem} />
);