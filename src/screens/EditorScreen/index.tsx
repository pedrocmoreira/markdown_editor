import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';

import { MarkdownDisplay } from '../../components/MarkdownDisplay';

const markdownText = `# Markdown editor

Hello **World**!
`;

export function EditorScreen() {
  const [content, setContent] = useState(markdownText)
  const [tab, setTab] = useState('edit');

  return (
    <View style={styles.page}>
      <View style={styles.tabContainer}>
        <Pressable onPress={() => setTab('edit')} style={[styles.tab,
          {borderColor: tab === 'edit' ? 'mediumorchid' : 'gray'}
        ]}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => setTab('preview')} style={[styles.tab, 
          {borderColor: tab === 'preview' ? 'mediumorchid' : 'gray'}
        ]}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {
        tab === 'edit' ? (
          <TextInput style={styles.input} value={content} onChangeText={setContent} numberOfLines={50} multiline />
        ) : (
          <MarkdownDisplay children={content}></MarkdownDisplay>
        )
      }

    </View>
  );
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    backgroundColor: 'whitesmoke',
  },
  input: {
    flex: 1,
    padding: 15,
    paddingTop: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    top: 10
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center'
  },
  tabText: {
    fontFamily: 'Inter_700Bold',
  }
})