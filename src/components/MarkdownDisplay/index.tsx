import React, { PropsWithChildren } from 'react';
import Markdown from 'react-native-markdown-display';

import { Container, ScrollContainer, } from './styles';
import { StyleSheet } from 'react-native';

export function MarkdownDisplay({ children }: PropsWithChildren) {
  return (
    <ScrollContainer>
      <Container>
        <Markdown style={markdownStyles}>
         {children}
        </Markdown>
      </Container>
    </ScrollContainer>
  );
}

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: 'Inter_900Black',
    color: '#212020',
    marginBottom: 15,
    marginTop: 10,
    lineHeight: 40
  },
  heading2: {
    fontFamily: 'Inter_700Bold',
    color: '#404040',

    marginBottom: 10,
    marginTop: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 20
  }
})