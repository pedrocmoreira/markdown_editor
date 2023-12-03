import { ThemeProvider } from 'styled-components/native';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

import { EditorScreen } from './src/screens/EditorScreen';

import theme from './src/global/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold, Inter_900Black});

  if(!fontsLoaded) {
    return(
      <Loading/>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <EditorScreen/>
    </ThemeProvider>
  );
}
