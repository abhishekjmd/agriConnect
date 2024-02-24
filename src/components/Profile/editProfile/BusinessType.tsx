import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../../styles/globalStyles';
import TitlesHeader from './TitlesHeader';

type BusinessTypeProps = {
  selectedBusinessType: string,
  setSelectedBusinessType: React.Dispatch<React.SetStateAction<string>>
}

const BusinessType = (props: BusinessTypeProps) => {
  const {
    selectedBusinessType,
    setSelectedBusinessType
  } = props
  const BusinessTypesData = ['Retailer', 'Wholesaler', 'Manufacturer'];
  const CustomCheckbox = ({
    type,
    selected,
    onSelect,
  }: {
    type: string;
    selected: boolean;
    onSelect: (type: string) => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => onSelect(type)}
        style={{
          width: 350,
          justifyContent: 'flex-start',
        }}
      >
        <View style={styles.checkbox_container}>
          {selected ? (
            <Ionicons name='checkbox-outline' size={28} color='#CB375E' />
          ) : (
            <Ionicons name='square-outline' size={28} color='#00000080' />
          )}
          <Text style={styles.checkbox_text}>{type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[globalStyles.customContainer]}>
      <TitlesHeader text='Type of Business' style={{ marginTop: 5 }} />
      {BusinessTypesData.map((item, index) => {
        return (
          <CustomCheckbox
            key={index}
            type={item}
            selected={item === selectedBusinessType}
            onSelect={(value) => setSelectedBusinessType(value)}
          />
        );
      })}
    </View>
  )
}

export default BusinessType

const styles = StyleSheet.create({
  checkbox_container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00000080',
    marginRight: 10,
  },
  checkbox_text: {
    marginLeft: 10,
    color: '#192E35',
    fontSize: 16,
  },
})