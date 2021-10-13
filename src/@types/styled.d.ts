import 'styled-components';
import { Palette } from 'contexts/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Palette {}
}
