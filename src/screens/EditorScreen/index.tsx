import React from 'react';
import Markdown from 'react-native-markdown-display';

import { Container, Title } from './styles';
import { StyleSheet } from 'react-native';

const markdownText = `
# Título Principal

## Subtítulo

### Cabeçalho Menor

Este é um parágrafo de exemplo em Markdown. Markdown permite que você escreva conteúdo de forma simples e eficiente.

* **Negrito**: Para adicionar negrito, envolva o texto com dois asteriscos ou sublinhados.
* *Itálico*: Para itálico, use um asterisco ou sublinhado.
* 'Código': Para código, use crases.

### Listas

#### Lista Não Ordenada
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

#### Lista Ordenada
1. Primeiro Item
2. Segundo Item

### Links
[Visite o OpenAI](https://www.openai.com)

### Imagens
![Texto Alternativo](url-da-imagem.jpg)

### Citações
> Esta é uma citação.

### Código
`;

export function EditorScreen() {
  return (
    <Container>
      <Markdown style={markdownStyles}>
        {markdownText}
      </Markdown>
    </Container>
  );
}

const markdownStyles = StyleSheet.create({
  heading1: {
    fontSize: 40,
    fontWeight: 'bold'
  }
})