import 'styled-components';

import type theme from '../global/styles/theme';

declare module 'styled-components' {
  type MyTheme = typeof theme;

  export interface DefaultTheme extends MyTheme {}
}
