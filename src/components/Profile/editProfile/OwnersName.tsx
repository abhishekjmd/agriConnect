import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { isValidName } from '../../../utils/InputFieldValidators'
import { globalStyles } from '../../../styles/globalStyles'
import { ErrorView } from './EditProfileCustomInput'
import TitlesHeader from './TitlesHeader'

type OwnersNameProps = {
  allPopupClose: () => string | void,
  userName: string,
  setUserName: React.Dispatch<React.SetStateAction<string>>,
  setUserNameError: React.Dispatch<React.SetStateAction<boolean>>,
  userNameError: boolean
}

const OwnersName = (props: OwnersNameProps) => {
  const {
    allPopupClose,
    userName,
    setUserName,
    setUserNameError,
    userNameError
  } = props
  return (
    <View
      style={[globalStyles.customContainer]}
      onTouchStart={allPopupClose}
    >
      <TitlesHeader text={`Owner's Name`} style={{ marginLeft: 10 }} />
      <View style={styles.owner_name_container}>
        <TextInput
          value={userName}
          onChangeText={(userName) => {
            setUserName(userName);
            setUserNameError(!isValidName(userName));
          }}
        />
      </View>
      {userNameError && <ErrorView text='Please enter a valid name' />}
    </View>
  )
}

export default OwnersName

const styles = StyleSheet.create({
  owner_name_container: {
    width: 350,
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#CB375E',
    borderRadius: 6,
    fontSize: 15,
    paddingLeft: 10,
    justifyContent: 'center',
  },
})