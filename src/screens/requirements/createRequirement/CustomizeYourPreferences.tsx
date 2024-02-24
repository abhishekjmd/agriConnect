import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../../styles/globalStyles';
import {ObjectDataContext} from '../../../utils/ObjectDataContext';
import Button from '../../../components/Button';
import Colors from '../../../utils/Colors';
import {Picker} from '@react-native-picker/picker';
import {SCREEN_WIDTH} from '../../../utils/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomizeYourPreferences = () => {
  const objectData = useContext(ObjectDataContext);
  const navigation = useNavigation();
  const [required, setRequired] = useState('');

  const createNewRequirements = async () => {
    const requiredQuantity = parseInt(
      objectData?.createRequirements.requiredQuantity,
    );
    const newRequirement = {
      productName: objectData?.createRequirements.productName,
      description: objectData?.createRequirements.description,
      budget: objectData?.createRequirements.budget,
      category: objectData?.createRequirements.category,
      preferredLocationsToBuy:
        objectData?.createRequirements.preferredLocationsToBuy,
      requiredQuantityInCartons: requiredQuantity,
      contactNumber: objectData?.createRequirements.contactNumber,
    };

    try {
      // Retrieve existing requirements from local storage
      const existingRequirementsString = await AsyncStorage.getItem(
        'requirements',
      );
      let existingRequirements = existingRequirementsString
        ? JSON.parse(existingRequirementsString)
        : [];

      // Check if the new requirement is similar to any existing requirement
      const isSimilar = existingRequirements.some(requirement =>
        areRequirementsSimilar(requirement, newRequirement),
      );

      if (isSimilar) {
        setRequired('A similar requirement already exists.');
      } else {
        // Add the new requirement to the list and save it back to local storage
        existingRequirements.push(newRequirement);
        await AsyncStorage.setItem(
          'requirements',
          JSON.stringify(existingRequirements),
        );
        console.log(newRequirement);
        navigation.navigate('RequirementsView');
      }
    } catch (error) {
      console.error('Error creating requirements:', error);
      
      // Handle error as needed
    }
  };

  const areRequirementsSimilar = (req1, req2) => {
    // Check if two requirements are similar
    return (
      req1.productName === req2.productName &&
      req1.description === req2.description &&
      req1.budget === req2.budget &&
      req1.category === req2.category &&
      req1.requiredQuantityInCartons === req2.requiredQuantityInCartons
      // Add more checks if needed
    );
  };

  const categoryTypes = [
    'Vegetables',
    'Fruits',
    'Legumes',
    'Cereals',
    'Pulses',
    'Others',
  ];

  const handlePress = () => {
    if (!objectData?.createRequirements.budget) setRequired('');
    createNewRequirements();
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTextStyles}>
          Customize your preferences
        </Text>
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Category</Text>
        <View
          style={[
            globalStyles.productInputContainer,
            {justifyContent: 'center'},
          ]}>
          <Picker
            mode="dialog"
            selectedValue={objectData?.createRequirements.category}
            onValueChange={value => {
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                category: value,
              });
            }}>
            {categoryTypes?.map((item, index) => (
              <Picker.Item key={index + 1} label={item} value={item} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>
          Overall budget
          <Text style={{color: Colors.RED}}> *</Text>
        </Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.budget}
            onChangeText={text => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                budget: text,
              });
            }}
            placeholder="Enter the overall amount"
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
        {required !== '' && (
          <Text style={{color: Colors.RED, marginTop: 5}}>{required}</Text>
        )}
      </View>

      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Product quantity</Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.requiredQuantityInCartons}
            onChangeText={text => {
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                requiredQuantityInCartons: text,
              });
            }}
            placeholder="Enter the product quantity"
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
      </View>
      <View style={globalStyles.btnContainer}>
        <Button
          onPress={handlePress}
          style={globalStyles.btnStyles}
          title="Submit"
        />
      </View>
    </View>
  );
};

export default CustomizeYourPreferences;

const styles = StyleSheet.create({
  rootContainer: {
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    width: SCREEN_WIDTH * 0.89,
    height: 136,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
  },
  container: {
    width: SCREEN_WIDTH * 0.89,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    height: 25,
    width: 25,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  textStyles: {
    fontWeight: '500',
    fontSize: 13,
    marginLeft: 10,
  },
  multiselect_input: {
    width: SCREEN_WIDTH * 0.89,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    fontSize: 13,
    borderRadius: 3,
    marginTop: 10,
  },
});
