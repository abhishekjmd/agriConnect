import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import Colors from '../../../utils/Colors';

const TopHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.topHeader]}>
      <TouchableOpacity style={{ paddingTop: 2 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
      </TouchableOpacity>
      <Text style={styles.heading}>Edit Profile</Text>
    </View>
  )
}

export default TopHeader

const styles = StyleSheet.create({
  topHeader: {
    padding: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  heading: {
    color: Colors.SECONDARY_BLACK,
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10
  },
})