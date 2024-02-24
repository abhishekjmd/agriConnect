import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ObjectDataContext} from '../../../utils/ObjectDataContext';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../utils/Theme';
import {globalStyles} from '../../../styles/globalStyles';
import Button from '../../../components/Button';
import Colors from '../../../utils/Colors';

const ProductDescription = () => {
  const navigation = useNavigation();
  const [required, setRequired] = useState('');
  const objectData = useContext(ObjectDataContext);

  const handleContinuePress = () => {
    navigation.navigate('CustomizeYourPreferences');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTextStyles}>Product Description</Text>
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>
          Product name
          <Text style={{color: Colors.RED}}> *</Text>
        </Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.productName}
            onChangeText={text => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                productName: text,
              });
            }}
            placeholder="Enter name of your product"
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
        {required !== '' && (
          <Text style={{color: Colors.RED, marginTop: 5}}>{required}</Text>
        )}
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>
          Product description
          <Text style={{color: Colors.RED}}> *</Text>
        </Text>
        <View style={styles.productDescriptionInputContainer}>
          <TextInput
            value={objectData?.createRequirements.description}
            onChangeText={text => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                description: text,
              });
            }}
            placeholder="Enter description of your product"
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
        {required !== '' && (
          <Text style={{color: Colors.RED, marginTop: 5}}>{required}</Text>
        )}
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>delivery location</Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.preferredLocationsToBuy}
            onChangeText={text => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                preferredLocationsToBuy: text,
              });
            }}
            placeholder="Enter delivery location"
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
      </View>

      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Contact number</Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.contactNumber}
            onChangeText={text => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                contactNumber: text,
              });
            }}
            placeholder="Enter your contact number"
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
      </View>

      <View style={globalStyles.btnContainer}>
        <Button
          onPress={handleContinuePress}
          style={globalStyles.btnStyles}
          title="Continue"
        />
      </View>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  productDescriptionInputContainer: {
    width: SCREEN_WIDTH * 0.89,
    borderWidth: 1,
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    borderRadius: 3,
    height: 84,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  productImageContainer: {
    width: SCREEN_WIDTH * 0.92,
    padding: 10,
  },
  productImageTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: SCREEN_WIDTH * 0.16,
    height: SCREEN_HEIGHT * 0.07,
    borderWidth: 1,
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    borderRadius: 3,
    backgroundColor: Colors.LIGHT_SILVER,
    marginTop: 10,
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
});
