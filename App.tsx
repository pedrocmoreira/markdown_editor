import { ThemeProvider } from 'styled-components/native';

import { EditorScreen } from './src/screens/EditorScreen';
import theme from './src/global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <EditorScreen/>
    </ThemeProvider>
  );
}
