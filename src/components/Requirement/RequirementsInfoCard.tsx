import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
  Share,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/Theme';
import Colors from '../../utils/Colors';

type RequirementsInfoCardProps = {
  productName?: string;
  productImage?: string;
  category?: string;
  description?: string;
  budget?: string;
  time?: string;
  fulfilled?: boolean;
  contact?: string;
  recordedAudio: string;
  onPress: () => void;
  userId: string;
};

const RequirementsInfoCard = (props: RequirementsInfoCardProps) => {
  const {
    productName,
    productImage,
    category,
    description,
    budget,
    fulfilled,
    contact,
    userId,
  } = props;

  function addCommasToNumber(number) {
    if (typeof number === 'number') {
      const numberStr = number?.toString();
      const [integerPart, decimalPart] = numberStr.split('.');
      const formattedIntegerPart = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ',',
      );
      const formattedNumber = decimalPart
        ? `${formattedIntegerPart}.${decimalPart}`
        : formattedIntegerPart;
      return formattedNumber;
    } else {
      return number;
    }
  }

  const shareItem = async () => {
    try {
      const message = `Requirement for ${productName} \nBudget: ${addCommasToNumber(
        budget,
      )} \nDescription: ${description}`;

      const result = await Share.share({
        message: message,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          log.info(`Shared via ${result.activityType}`);
        }
      } else if (result.action === Share.dismissedAction) {
        log.info('Sharing dismissed');
      }
    } catch (error) {
      log.error('Error sharing:', error.message);
    }
  };

  const sendWhatsappMessageToUser = async () => {
    const message = `Requirement for ${productName} \nBudget: ${addCommasToNumber(
      budget,
    )} \nDescription: ${description} `;
    const phone = '+919825571401';
    const url = 'whatsapp://send?text=' + message + '&phone=' + phone;
    Linking.openURL(url)
      .then(data => {})
      .catch(() => {
        alert('Make sure WhatsApp installed on your device');
      });
  };

  const sendUserContacttoDialer = () => {
    const phone = '+919825571401'; // Directly using the specific number
    const url = `tel:${phone}`;

    Linking.openURL(url).catch(() => {
      Alert.alert(
        'Error',
        'Unable to make a call. Make sure your device supports calling.',
      );
    });
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {productName ? (
            <View style={styles.productContainer}>
              <Text numberOfLines={1} style={styles.productTextStyles}>
                {productName.length > 15
                  ? `${productName.substring(0, 15)}...`
                  : productName}
              </Text>
            </View>
          ) : (
            false
          )}
        </View>
        {category ? (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTextStyles}>{category}</Text>
          </View>
        ) : (
          false
        )}
        <View style={styles.amountContainer}>
          {budget ? <Text style={{color: Colors.PRIMARY}}>₹</Text> : false}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.amountTextStyles}>
              {addCommasToNumber(budget)}
            </Text>
          </View>
        </View>
        {description ? (
          <View style={styles.descriptionContainer}>
            <Text
              ellipsizeMode="clip"
              numberOfLines={2}
              style={styles.descriptionTextStyles}>
              {description}
            </Text>
          </View>
        ) : (
          false
        )}
        <View
          style={{
            width: SCREEN_WIDTH * 0.45,
            paddingVertical: 2,
            marginVertical: 2,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => sendUserContacttoDialer()}>
            <Feather name="phone" size={20} color="black" />
          </Pressable>
          <Pressable onPress={() => sendWhatsappMessageToUser()}>
            <FontAwesome
              name="whatsapp"
              size={20}
              color="black"
              style={{
                marginHorizontal: 18,
              }}
            />
          </Pressable>
          <Pressable onPress={() => shareItem()}>
            <Entypo name="share" size={20} color="black" />
          </Pressable>
        </View>
      </View>
      {productImage ? (
        <View style={[styles.imageContainer]}>
          <Image style={styles.imageStyles} source={{uri: productImage}} />
        </View>
      ) : (
        false
      )}
    </TouchableOpacity>
  );
};

export default RequirementsInfoCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 4,
    paddingVertical: 10,
    flexDirection: 'row',
    borderWidth: 1,
    elevation: 7,
    backgroundColor: 'white',
    borderColor: Colors.SHADOW,
    margin: 10,
  },
  imageContainer: {
    width: SCREEN_WIDTH * 0.3,
  },
  imageStyles: {
    width: '100%',
    height: 144,
    borderRadius: 8,
  },
  infoContainer: {
    width: SCREEN_WIDTH * 0.55,
    paddingLeft: 20,
    marginRight: 10,
  },
  productContainer: {
    paddingVertical: 2,
  },
  productTextStyles: {
    fontSize: 16.85,
    fontWeight: '600',
    color: 'black',
  },
  categoryContainer: {
    width: SCREEN_WIDTH * 0.43,
    paddingVertical: 2,
  },
  categoryTextStyles: {
    fontSize: 12,
    fontWeight: '500',
  },
  descriptionContainer: {
    width: SCREEN_WIDTH * 0.45,
    paddingVertical: 2,
  },
  descriptionTextStyles: {
    fontSize: 11,
    fontWeight: '500',
  },
  amountContainer: {
    width: SCREEN_WIDTH * 0.3,
    paddingVertical: 2,
    flexDirection: 'row',
  },
  amountTextStyles: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.PRIMARY,
    paddingLeft: 2,
  },
  timeStampTextStyles: {
    fontSize: 11,
    fontWeight: '500',
    paddingLeft: 7,
  },
  pendingStatusContainer: {
    width: 65,
    backgroundColor: '#FF8A01',
    height: 20,
    marginLeft: 5,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingStatusTextStyles: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  voiceContainer: {
    width: SCREEN_WIDTH * 0.5,
    height: 45,
    elevation: 4,
    borderColor: Colors.SHADOW,
    marginVertical: 5,
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
    width: SCREEN_WIDTH * 0.2,
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
});
