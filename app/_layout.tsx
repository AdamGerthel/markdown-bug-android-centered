import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Markdown, { MarkdownProps } from "react-native-marked";

const markdownStyles: MarkdownProps['styles'] = {
  text: { textAlign: 'center' },
  strong: { textAlign: 'center' }
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Markdown
          styles={markdownStyles}
          value={'**Hello** world'}
        />
        <Markdown
          styles={markdownStyles}
          value={'Hello **world**'}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
