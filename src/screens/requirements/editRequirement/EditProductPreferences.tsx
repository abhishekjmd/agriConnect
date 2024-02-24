import { Text, View, TextInput, StyleSheet } from 'react-native'
import { useState, useContext, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { saveRequirement } from '../../../ServiceWrapper/AamServiceRequirements'
import { globalStyles } from '../../../styles/globalStyles'
import { ObjectDataContext } from '../../../utils/ObjectDataContext'
import Button from '../../../components/Button'
import log from '../../../utils/Logger'
import Colors from '../../../utils/Colors';
import { Picker } from '@react-native-picker/picker';
import { getBuisnessDomainTypesApi } from '../../../ServiceWrapper/AamService';
import { ErrorToast } from '../../../utils/ErrorToast';
import GetUserId from '../../../utils/GetUserId';
import { SCREEN_WIDTH } from '../../../utils/Theme';
import { MultiSelect } from 'react-native-element-dropdown';
import fetchCitiesWithStates from '../../../utils/ExtractCityState';
import { useStores } from '../../../stores';

const EditProductPreferences = () => {
  const route = useRoute();
  const requirement = route?.params?.requirementData;
  const objectData = useContext(ObjectDataContext);
  const navigation = useNavigation();
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [required, setRequired] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(requirement?.preferredLocationsToBuy || [])
  const [cityStateOptions, setCityStateOptions] = useState([]);
  const {requirementStore} = useStores();
  useEffect(() => {
    if (requirement) {
      objectData?.setIsEditMode(true);
      objectData?.setCreateRequirements({
        category: requirement.category || '',
        budget: requirement.budget || '',
        requiredQuantityInCartons: String(requirement.requiredQuantityInCartons) || '',
        selectedOptions: requirement?.preferredLocationsToBuy
      });
    }
  }, [requirement]);

  useEffect(() => {
    fetchCitiesWithStates().then(data => {
      setCityStateOptions(data);
    });
  }, []);

    const editExistingRequirements = async () => {
    objectData?.setLoader(true);
    const userId = await GetUserId();
    const brandIds = objectData?.selectedBrands.map(brand => brand.brandId);
    const requiredQuantityInCartons = parseInt(objectData?.createRequirements.requiredQuantityInCartons);
    const creationDateInMillis = parseInt(requirement?.creationDateInMillis);
    const item = {
      userId: userId,
      productName: objectData?.editRequirements.productName,
      description: objectData?.editRequirements.description,
      budget: objectData?.createRequirements.budget,
      category: objectData?.createRequirements.category,
      preferredBrandIds: brandIds,
      preferredLocationsToBuy: selectedOptions,
      requiredQuantityInCartons: requiredQuantityInCartons,
      creationDateInMillis: creationDateInMillis,
    }
    const saveRequirements = await saveRequirement(userId, item);
    requirementStore.fetchRequirements();
    objectData?.setLoader(false);
    navigation.navigate('RequirementsView');
  }

  const fetchBusinessTypes = async () => {
    try {
      const res = await getBuisnessDomainTypesApi();
      if (res.error) {
        ErrorToast('error', 'Error', res.message);
      } else if (res?.businessDomainTypes && res.businessDomainTypes.length > 0) {
        const categories = res.businessDomainTypes.map((type, i) => ({
          label: (i + 1).toString(),
          value: type,
        }));
        setCategoryTypes(categories)
      }
    } catch (error) {
      log.error(error);
    }
  }

  useEffect(() => {
    fetchBusinessTypes()
  }, [])

  const handlePress = () => {
    if (!objectData?.createRequirements.budget) {
      setRequired('Please fill the required fields.');
      return;
    }
    setRequired('');
    editExistingRequirements();
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTextStyles}>Edit your product preferences</Text>
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Category</Text>
        <View style={[globalStyles.productInputContainer, { justifyContent: 'center' }]}>
          <Picker
            mode='dialog'
            selectedValue={objectData?.createRequirements.category}
            onValueChange={(value) => {
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                category: value
              })
            }}
          >
            {categoryTypes?.map((item, index) => (
              <Picker.Item key={index + 1} label={item.value} value={item.value} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Overall budget
        <Text style={{ color: Colors.RED }}> *</Text>
        </Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.budget}
            onChangeText={(text) => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                budget: text
              })
            }}
            placeholder='Enter the overall amount'
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK} />
        </View>
        {required !== '' && (
            <Text style={{ color: Colors.RED, marginTop: 5 }}>
              {required}
            </Text>
          )}
      </View>
      <View style={[globalStyles.productContainer]}>
      <Text style={globalStyles.productTextStyles}>Preferred location</Text>
            <View style={{ width: SCREEN_WIDTH * 0.89 }}>
              <MultiSelect
                search
                data={cityStateOptions}
                labelField='value'
                valueField='value'
                placeholderStyle={{
                  fontSize: 13,
                  justifyContent: 'center',
                  marginLeft: 10,
                }}
                iconStyle={{ marginRight: 10 }}
                placeholder='Choose location'
                containerStyle={{ marginTop: 26 }}
                activeColor={Colors.SECONDARY}
                searchPlaceholder='Search'
                style={styles.multiselect_input}
                value={selectedOptions}
                onChange={(val) => {
                  setSelectedOptions(val);
                }}
              />
            </View>
          </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Product Quantity
        </Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.requiredQuantityInCartons}
            onChangeText={(text) => {
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                requiredQuantityInCartons: text
              })
            }}
            placeholder='Enter the product quantity in cartons'
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK} />
        </View>
      </View>
      <View style={globalStyles.btnContainer}>
        <Button onPress={handlePress} style={globalStyles.btnStyles} title='Save' />
      </View>
    </View>
  )
}

export default EditProductPreferences

const styles = StyleSheet.create({ 
  multiselect_input: {
    width: SCREEN_WIDTH * 0.89,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    fontSize: 13,
    borderRadius: 3,
    marginTop: 10
  },
})