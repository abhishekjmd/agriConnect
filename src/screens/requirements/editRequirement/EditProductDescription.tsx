import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ObjectDataContext } from '../../../utils/ObjectDataContext';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Theme';
import { globalStyles } from '../../../styles/globalStyles';
import Button from '../../../components/Button';
import Colors from '../../../utils/Colors';
import ExtractMediaUrls from '../../../utils/ExtractMediaUrls';
import SoundWave from '../../../components/Requirement/createRequirements/voiceRequirements/SoundWave';
import { RequirementDetailWaveforms } from '../../../constants/WaveFroms';
import { FormatTimeInMinSecForm } from '../../../utils/hooks/useTimeFormat';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AudioRecordPlayer from '../../../utils/AudioRecordPlayer';

const EditProductDescription = () => {
const route = useRoute();
const requirement = route?.params?.requirementData;
const navigation = useNavigation();
const [required, setRequired] = useState('');
const objectData = useContext(ObjectDataContext);
const { productImageUrl, recordedAudioUrl } = ExtractMediaUrls(requirement.assetItems);
const photoItems = requirement.assetItems.filter(item => item.assetMediaType === 'PHOTO');
const { isPlaying, playTime, duration, togglePlaying } = AudioRecordPlayer();

  useEffect(() => {
    if (requirement) {
      objectData?.setIsEditMode(true);
      objectData?.setCreateRequirements({
        productName: requirement.productName || '',
        description: requirement.description || '',
      });
    }
  },[requirement]);

  const handleContinuePress = () => {
    if (!objectData?.createRequirements.productName || !objectData?.createRequirements.description) {
      setRequired('Please fill all required fields.');
      return;
    }
    setRequired('');
    navigation.navigate('EditBrandsPreferences',
    {
      requirementData: requirement
    });
  };

  useEffect(() => {
  }, [objectData?.createRequirements, objectData?.editRequirements]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTextStyles}>Product Description</Text>
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Product name
        <Text style={{ color: Colors.RED }}> *</Text>
        </Text>
        <View style={globalStyles.productInputContainer}>
          <TextInput
            value={objectData?.createRequirements.productName}
            onChangeText={(text) => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                productName: text,
              });
              objectData?.setEditRequirements({
                ...objectData.createRequirements,
                productName: text,
              });
            }}
            placeholder='Enter name of your product'
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
        {required !== '' && (
            <Text style={{ color: Colors.RED, marginTop: 5 }}>
              {required}
            </Text>
          )}
      </View>
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.productTextStyles}>Product description
        <Text style={{ color: Colors.RED }}> *</Text>
        </Text>
        <View style={styles.productDescriptionInputContainer}>
          <TextInput
            value={objectData?.createRequirements.description}
            onChangeText={(text) => {
              setRequired('');
              objectData?.setCreateRequirements({
                ...objectData.createRequirements,
                description: text,
              });
              objectData?.setEditRequirements({
                ...objectData.createRequirements,
                description: text,
              });
            }}
            multiline
            placeholder='Enter description of your product'
            placeholderTextColor={Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK}
          />
        </View>
        {required !== '' && (
            <Text style={{ color: Colors.RED, marginTop: 5 }}>
              {required}
            </Text>
          )}
      </View>
      {/* voice recording section starts here */}
      {recordedAudioUrl ?
          (
            <>
          <View style={{paddingTop: 10, alignSelf: 'flex-start', paddingLeft: 30}}>
          <Text style={globalStyles.productTextStyles}>
            Uploaded audio of your product
          </Text>
        </View>
            <View style={[styles.voiceContainer, { backgroundColor: isPlaying ? Colors.PRIMARY : Colors.WHITE }]}>
              <Pressable onPress={()=>togglePlaying(recordedAudioUrl)} style={{ backgroundColor: isPlaying ? Colors.PRIMARY : Colors.WHITE, borderRadius: 17.5 }}>
                <View style={[styles.iconContainer, { backgroundColor: isPlaying ? Colors.WHITE : Colors.PRIMARY, borderWidth: 0, }]}>
                  <FontAwesome6 name={isPlaying ? 'pause' : 'play'} size={isPlaying ? 24 : 20} color={isPlaying ? Colors.PRIMARY : Colors.WHITE} />
                </View>
              </Pressable>
              <View style={styles.WaveFormContainer}>
                <SoundWave waveforms={RequirementDetailWaveforms} style={{ backgroundColor: isPlaying ? Colors.WHITE : Colors.BLACK, justifyContent: 'center', alignItems: 'center' }} />
              </View>
              <View style={styles.durationContainer}>
                <Text style={[styles.durationTextStyles, { color: isPlaying ? Colors.WHITE : Colors.BLACK }]}>{FormatTimeInMinSecForm(playTime)}/{FormatTimeInMinSecForm(duration)}</Text>
              </View>
            </View>
            </>
          ) : false
        }
      {/* voice recording section ends here */}
      <View style={styles.productImageContainer}>        
        { productImageUrl ? 
        <>
        <View style={styles.productImageTitleContainer}>
        <Text style={globalStyles.productTextStyles}>
          Uploaded images of your product
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 2 }}>
          <FlatList
            horizontal
            data={photoItems}
            style={styles.multipleImageContainer}
            renderItem={({ item, index }) => (
              <Pressable style={{height: 80, width: 80, marginHorizontal: 10}}>
                {item.presignedUrl != '' && (
                    <Image
                      style={styles.imageStyle}
                      source={{
                        uri: item.presignedUrl,
                      }}
                      resizeMode='cover'
                    />
                  )}
                </Pressable>
            )}
            keyExtractor={(item) => item.assetId}
          /> 
        </View>
        </> : false }        
      </View>
      <View style={globalStyles.btnContainer}>
        <Button
          onPress={handleContinuePress}
          style={globalStyles.btnStyles}
          title='Continue'
        />
      </View>
    </View>
  );
};

export default EditProductDescription;

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
    alignSelf: 'flex-start',
    paddingTop: 10,
    paddingLeft: 5
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
  voiceContainer: {
    width: SCREEN_WIDTH * 0.87,
    height: 45,
    elevation: 4,
    borderColor: Colors.SHADOW,
    marginTop: 15,
    borderRadius: 35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17.5,
    backgroundColor: Colors.PRIMARY,
  },
  WaveFormContainer: {
    width: SCREEN_WIDTH * 0.57,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationTextStyles: {
    fontSize: 10,
    fontWeight: '400',
  },
  multipleImageContainer: {
    marginTop: '5%',
    marginLeft: '-2%'
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 5
  },
});
