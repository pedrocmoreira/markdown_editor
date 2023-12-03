import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView.attrs({
  contentInsetAdjustmentBehavior:'automatic'
})`
top: 20px;
`;

export const Container = styled.View`
  /* flex: 1; */
  justify-content: center;
  padding: 14px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main}
`;