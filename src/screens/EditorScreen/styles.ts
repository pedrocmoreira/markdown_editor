import styled from 'styled-components/native';

import Markdown from 'react-native-markdown-display';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentInsetAdjustmentBehavior:'automatic'
})`
  top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main}
`;