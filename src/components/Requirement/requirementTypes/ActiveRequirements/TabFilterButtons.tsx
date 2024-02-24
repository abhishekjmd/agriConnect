import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../utils/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../utils/Theme';

interface TabFilterButtonsProps {
  allRequirementsPressHandler?: () => void;
  yourRequirementsPressHandler?: () => void;
}

const TabFilterButtons = (props: TabFilterButtonsProps) => {
  const { allRequirementsPressHandler, yourRequirementsPressHandler } = props
  const [activeBtn, setActiveBtn] = useState('AllRequirements');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { setActiveBtn('AllRequirements'); allRequirementsPressHandler(); }}
        style={[styles.btnViewStyles, activeBtn === 'AllRequirements' ? styles.activeBtnViewStyles : false,]}
      >
        <Text
          style={[styles.btnTextStyles, activeBtn === 'AllRequirements' ? styles.activeBtnTextStyles : false,]}
        >
          All requirements
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { setActiveBtn('YourRequirements'); yourRequirementsPressHandler() }}
        style={[styles.btnViewStyles, activeBtn === 'YourRequirements' ? styles.activeBtnViewStyles : false,]}
      >
        <Text style={[styles.btnTextStyles, activeBtn === 'YourRequirements' ? styles.activeBtnTextStyles : false,]}
        >
          Your requirements
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TabFilterButtons

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 60,
  },
  btnViewStyles: {
    width: SCREEN_WIDTH * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    padding: 5,
    borderWidth: 1,
    borderColor: '#121212B2',
  },
  activeBtnViewStyles: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY

  },
  btnTextStyles: {
    fontSize: 15,
    fontWeight: '600',
    color: '#121212B2',
  },
  activeBtnTextStyles: {
    color: 'white'
  },
})
