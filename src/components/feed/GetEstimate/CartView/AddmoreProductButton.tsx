import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../../utils/Colors'
import { SCREEN_WIDTH } from '../../../../utils/Theme'

type AddmoreProductButtonProps = {
  handleAddmoreProductPress: () => void,
}

const AddmoreProductButton = (props: AddmoreProductButtonProps) => {
  const { handleAddmoreProductPress } = props
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btnContainerStyles}
        onPress={handleAddmoreProductPress}
      >
        <MaterialCommunityIcons
          name='plus-circle'
          size={20}
          color={Colors.PRIMARY}
        />
        <Text style={styles.btnTextStyles}>Add more products</Text>
      </Pressable>
    </View>
  )
}

export default AddmoreProductButton

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainerStyles: {
    gap: 10,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.8,
    borderColor: Colors.PRIMARY,
  },
  btnTextStyles: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.PRIMARY,
  },
})