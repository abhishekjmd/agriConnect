import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitlesHeader = ({ text, style }: { text: string; style?: ViewStyle }) => {
  return (
    <View style={[styles.header_text_container, style]}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 16,
          color: '#121212',
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default TitlesHeader

const styles = StyleSheet.create({
  header_text_container: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
})