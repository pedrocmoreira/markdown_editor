import React from 'react';

import { MarkdownDisplay } from '../../components/MarkdownDisplay';

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

#### Lista Não Ordenada 2
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

#### Lista Não Ordenada 3 
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
`;

export function EditorScreen() {
  return (
    <MarkdownDisplay children={markdownText}/>
  );
}
