import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/globalStyles'
import { ErrorView } from './EditProfileCustomInput'

type DescriptionProps = {
  allPopupClose: () => void,
  description: string,
  handleDescriptionChange: (description: any) => void,
  descriptionError: string
}

const Description = (props: DescriptionProps) => {
  const {
    allPopupClose,
    description,
    handleDescriptionChange,
    descriptionError
  } = props
  return (
    <View
      style={[globalStyles.customContainer]}
      onTouchStart={allPopupClose}
    >
      <View style={styles.description_container}>
        <TextInput
          placeholder='Description'
          style={styles.description_input_bar}
          value={description}
          onChangeText={handleDescriptionChange}
          maxLength={256}
          multiline={true}
        />
        <View style={{ position: 'absolute', bottom: 5, right: 8 }}>
          <Text style={{ fontSize: 10 }}> {description.length}/256</Text>
        </View>
      </View>
      {descriptionError && (
        <ErrorView text='Please enter a valid description' />
      )}
    </View>
  )
}

export default Description

const styles = StyleSheet.create({
  description_container: {
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#CB375E',
    borderRadius: 6,
  },
  description_input_bar: {
    width: 350,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#00000080',
    fontSize: 15,
    paddingLeft: 10,
  },
})