import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProgressBar } from 'react-native-paper'
import CompletionScoreCheck from '../../../utils/CompletionScoreCheck'
import { ObjectDataContext } from '../../../utils/ObjectDataContext'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Theme'
import Colors from '../../../utils/Colors'
import { Cancel } from '../../../assets'

const Header = () => {
  const navigation = useNavigation();
  const objectData = useContext(ObjectDataContext);
  const progress = (objectData?.selectedBrands.length / 4) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {objectData?.isEditMode === true ? (
          <View style={styles.backBtnwithTitleContainer}>
            <Ionicons name='chevron-back' size={24} color='black' onPress={() => { navigation.navigate('RequirementsView') }} />
            <Text style={styles.textStyles}>Edit existing requirement</Text>
          </View>
        ) : (
          <View style={styles.backBtnwithTitleContainer}>
            <Ionicons name='chevron-back' size={24} color='black' onPress={() => { navigation.navigate('RequirementsView') }} />
            <Text style={styles.textStyles}>Creating new requirement</Text>
          </View>
        )}
        <View style={styles.cancelContainer}>
          <Image style={styles.cancelIconStyles} source={Cancel} />
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar style={[styles.progressBar]} progress={CompletionScoreCheck({ productName: objectData?.createRequirements.productName, description: objectData?.createRequirements.description })} color={Colors.PRIMARY} />
        <ProgressBar style={styles.progressBar} progress={CompletionScoreCheck({ category: objectData?.createRequirements.category, budget: objectData?.createRequirements.budget })} color={Colors.PRIMARY} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.12,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    padding: 10,
  },
  backBtnwithTitleContainer: {
    width: SCREEN_WIDTH * 0.73,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textStyles: {
    fontWeight: '600',
    marginLeft: '1%',
    color: 'black',
    fontSize: 18,
  },
  cancelContainer: {
    width: SCREEN_WIDTH * 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  cancelIconStyles: {
    height: 22,
    width: 22,
  },
  progressBarContainer: {
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  progressBar: {
    backgroundColor: Colors.DEEP_ROSEWOOD,
    width: SCREEN_WIDTH * 0.25,
    borderRadius: 2,
    marginLeft: 10,
    height: 6,
  }
})