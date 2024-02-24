import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import BrandsAutoCompleteView from '../../../components/Requirement/createRequirements/BrandsAutoCompleteView';
import { globalStyles } from '../../../styles/globalStyles'
import { SCREEN_WIDTH } from '../../../utils/Theme';
import Button from '../../../components/Button';
import Colors from '../../../utils/Colors'
import { ObjectDataContext } from '../../../utils/ObjectDataContext';
import SelectedBrandsView from '../../../components/Requirement/createRequirements/SelectedBrandsView';
import { ErrorToast } from '../../../utils/ErrorToast';
import { useStores } from '../../../stores';

const EditBrandsPreferences = () => {
  const route = useRoute();
  const requirement = route?.params?.requirementData;
  const objectData = useContext(ObjectDataContext);
  const [check, setCheck] = useState(false);
  const [inputText, setInputText] = useState('')
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation();
  const { brandStore } = useStores();

  useEffect(() => {
    if (requirement) {
      objectData?.setIsEditMode(true);
        if (requirement.preferredBrandIds) {
        const selectedBrands = brandStore.supplierBrands.filter(
          (brand) => requirement.preferredBrandIds.includes(brand.brandId)
        );  
         const selectedBrandNames = selectedBrands.map((brand) => brand.brandName);
         setInputText(selectedBrandNames.join(', '));
         setSelectedItems(selectedBrands.map((brand) => brand.brandId));
        objectData?.setSelectedBrands(selectedBrands);
      }
    }
  }, [requirement, brandStore.supplierBrands]);

  const toggleSelection = (item) => {
    if (objectData?.selectedBrands.length < 4) {
      let updatedSelectedItems;
      if (selectedItems.includes(item)) {
        updatedSelectedItems = selectedItems.filter((selected) => selected !== item);
      } else {
        updatedSelectedItems = [...selectedItems, item];
      }
      setSelectedItems(updatedSelectedItems);
      objectData?.setSelectedBrands(updatedSelectedItems);
    } else {
      ErrorToast('error', 'Selection Limit Exceeded', 'You can select up to 4 brands.');
    }
  };

  const handleNavigate = () => {
    navigation.navigate('EditProductPreferences',
    {
      requirementData: requirement,
    })
  }
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTextStyles}>Brand preferences</Text>
      </View>
      <View style={{ paddingHorizontal: 10, width: SCREEN_WIDTH * 0.92 }}>
        <Text style={globalStyles.productTextStyles}>Brand name</Text>
        <View style={[globalStyles.productInputContainer, { borderBottomLeftRadius: inputText.trim().length === 0 ? 3 : 0, borderBottomRightRadius: 0, borderBottomWidth: inputText.trim().length !== 0 ? 0 : 1 }]}>
          <TextInput
            value={inputText}
            onChangeText={(text) => { setInputText(text) }}
            placeholder='Enter your preferred brand name'
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
      </View>
      <BrandsAutoCompleteView toggleSelection={toggleSelection} inputText={inputText} />
      {objectData?.selectedBrands.length > 0 ?
        <>
          <View style={globalStyles.productContainer}>
            <Text style={globalStyles.productTextStyles}>Your selected brands ({objectData?.selectedBrands.length}) </Text>
          </View>
          <SelectedBrandsView toggleUnselect={toggleSelection} />
        </>
        : false}
      <View style={[globalStyles.productContainer, { flexDirection: 'row', alignItems: 'center', marginTop: 20 }]}>
        <Pressable onPress={() => setCheck(!check)} style={[styles.checkBox, check ? { backgroundColor: Colors.PRIMARY } : false]}>
          {check ? <MaterialCommunityIcons name='check-bold' size={24} color={Colors.WHITE} /> : false}
        </Pressable>
        <Text style={[globalStyles.productTextStyles, { paddingHorizontal: 15, fontSize: 15 }]}>Any brand is fine</Text>
      </View>
      <View style={globalStyles.btnContainer}>
        <Button onPress={handleNavigate} style={globalStyles.btnStyles} title='Continue' />
      </View>
    </View>
  )
}

export default EditBrandsPreferences

const styles = StyleSheet.create({
  checkBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    justifyContent: 'center',
    alignItems: 'center'
  },
})