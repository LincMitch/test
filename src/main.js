import React from 'react';
import { View, Text } from 'react-primitives';
import { render, TextStyles } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';
import Typography from './sections/Typography';
import ColorPalette from './sections/ColorPalette';
import Buttons from './sections/Buttons';
import ButtonSizes from './sections/ButtonSizes';
// import InputFields from './sections/InputFields';
// import Content from './Content';




const Document = ({ system }: { system: DesignSystem }) => (
  <View>
=   <Typography fonts={system.fonts} />
    <ColorPalette colors={system.colors} />
    <Buttons btnColors={system.buttonColors} colors={system.colors} sizes={system.buttonSizes} />
    <ButtonSizes colors={system.colors} sizes={system.buttonSizes} />
    {/* <InputFields colors={system.colors} sizes={system.buttonSizes} /> */}
    {/* <Content/> */}
  </View>
);

export default (context: any) => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts,
  );

  render(<Document system={designSystem} />, context.document.currentPage());
}