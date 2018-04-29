import React from 'react';
import {View, Text } from 'react-primitives';
// import designSystem from './designSystem';
// import type { DesignSystem } from './designSystem';
// import Typography from './sections/Typography';

// const Content = ({ system }: { system: DesignSystem }) => (
//     <View>
//         <Text>
//              Any update to this plugin via sketch will be lost when the plugin gets updated.
//         </Text>
//         {/* <Typography fonts={system.fonts} /> */}
//     </View>
// )
// export default (context: any) => {
//     TextStyles.create(
//       {
//         context,
//         clearExistingStyles: true,
//       },
//       designSystem.fonts,
//     );
  
//     <Content system={designSystem} />
//   }

const Content = () => (
    <View>
        <Text>
             x Any update to this plugin via sketch will be lost when the plugin gets updated.
        </Text>
    </View>
);

export default Content;