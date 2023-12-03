import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.main};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.colors.secondary
}))``;