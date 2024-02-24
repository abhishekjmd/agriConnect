import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../utils/Colors';
import { SCREEN_WIDTH } from '../../../utils/Theme';

interface TabFilterButtonsProps {
  activePressHandler: () => void;
  fulfilledPressHandler: () => void;
}

const TabFilterButtons = (props: TabFilterButtonsProps) => {
  const { activePressHandler, fulfilledPressHandler } = props
  const [activeBtn, setActiveBtn] = useState('Active');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { setActiveBtn('Active'); activePressHandler(); }}
        style={[styles.btnViewStyles, activeBtn === 'Active' ? styles.activeBtnViewStyles : false,]}
      >
        <Text
          style={[styles.btnTextStyles, activeBtn === 'Active' ? styles.activeBtnTextStyles : false,]}
        >
          Active
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { setActiveBtn('Fulfilled'); fulfilledPressHandler() }}
        style={[styles.btnViewStyles, activeBtn === 'Fulfilled' ? styles.activeBtnViewStyles : false,]}
      >
        <Text style={[styles.btnTextStyles, activeBtn === 'Fulfilled' ? styles.activeBtnTextStyles : false,]}
        >
          Fulfilled
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TabFilterButtons

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 50,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.RUSSIAN_BLACK,
  },
  btnViewStyles: {
    width: SCREEN_WIDTH / 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: Colors.RUSSIAN_BLACK,
  },
  activeBtnViewStyles: {
    backgroundColor: '#D9F0FF40',
    borderBottomWidth: 3,
    borderBlockColor: Colors.PRIMARY,
  },
  btnTextStyles: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.BlUE_WHALE,
  },
  activeBtnTextStyles: {
    color: Colors.PRIMARY,
  },
})
