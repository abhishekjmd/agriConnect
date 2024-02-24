import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../Button'
import { globalStyles } from '../../../styles/globalStyles'
import { SCREEN_WIDTH } from '../../../utils/Theme'
import Colors from '../../../utils/Colors'

type DeleteAccountButtonProps = {
  deleteAccount: () => Promise<void>
}

const DeleteAccountButton = (props: DeleteAccountButtonProps) => {
  const { deleteAccount } = props;
  return (
    <View style={[styles.submit_container, globalStyles.customContainer]}>
      <Button
        title='Delete Account'
        onPress={() => deleteAccount()}
        style={styles.btnStyles}
        textStyle={styles.btnText}
      />
    </View>
  )
}

export default DeleteAccountButton

const styles = StyleSheet.create({
  submit_container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  btnStyles: {
    height: 48,
    width: SCREEN_WIDTH - 40,
    borderRadius: 8,
    marginVertical: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 7,
    borderColor: Colors.SHADOW,
  },
  btnText: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: '700',
  },
})