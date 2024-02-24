import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MultiSelect } from 'react-native-element-dropdown';
import { globalStyles } from '../../../styles/globalStyles';
import TitlesHeader from './TitlesHeader';

type CategoriesProps = {
  DealsinData: string[],
  selectedDealsin: string[],
  setSelectedDealsin: React.Dispatch<React.SetStateAction<string[]>>
}

const Categories = (props: CategoriesProps) => {
  const {
    DealsinData,
    selectedDealsin,
    setSelectedDealsin
  } = props
  return (
    <View style={[globalStyles.customContainer]}>
      <TitlesHeader text='Categories' style={{ marginLeft: 10 }} />
      <View style={{ width: 350 }}>
        <MultiSelect
          search
          data={DealsinData as []}
          labelField='value'
          valueField='value'
          placeholderStyle={{
            fontSize: 13,
            justifyContent: 'center',
            marginLeft: 10,
          }}
          iconStyle={{ marginRight: 10 }}
          placeholder='Choose categories you deal in'
          containerStyle={{ marginTop: 26 }}
          activeColor='#CB375E42'
          searchPlaceholder='Search'
          style={styles.categories_multiselect_input}
          value={selectedDealsin}
          onChange={(val) => {
            setSelectedDealsin(val);
          }}
        />
      </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  categories_multiselect_input: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderColor: '#00000080',
    fontSize: 13,
    borderRadius: 3,
  },
})