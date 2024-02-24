import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../utils/Colors';
import { SCREEN_WIDTH } from '../../../utils/Theme';

const CreateRequirementsButton = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.submitButton}
        onPress={() => {
          navigation.navigate('ProductDescription');
        }}
      >
        <Text
          style={[
            globalStyles.header2,
            globalStyles.font600,
            { color: 'white' },
          ]}
        >
          Create Requirement
        </Text>
      </Pressable>
    </View>
  )
}

export default CreateRequirementsButton

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: SCREEN_WIDTH - 30,
    borderRadius: 5,
  }
})
