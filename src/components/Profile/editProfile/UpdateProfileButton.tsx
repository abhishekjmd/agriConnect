import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/globalStyles'
import Button from '../../Button'

type UpdateProfileButtonProps = {
  saveLoading: boolean,
  updateProfileData: () => Promise<void>
}

const UpdateProfileButton = (props: UpdateProfileButtonProps) => {
  const { saveLoading, updateProfileData } = props
  return (
    <View style={[styles.submit_container, globalStyles.customContainer]}>
      <Button
        title='Update'
        onPress={() => updateProfileData()}
        loading={saveLoading}
        style={globalStyles.buttonSubmit}
        textStyle={globalStyles.btnText}
      />
    </View>
  )
}

export default UpdateProfileButton

const styles = StyleSheet.create({
  submit_container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})