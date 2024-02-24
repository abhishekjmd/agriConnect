import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../utils/Colors';
import {SCREEN_WIDTH} from '../../../utils/Theme';

type FooterProps = {
  handleWhatsappPress?: () => void;
  handleCallPress?: () => void;
  isProductCart?: boolean;
};

const Footer = (props: FooterProps) => {
  const {handleCallPress, handleWhatsappPress, isProductCart} = props;

  return (
    <View
      style={[styles.container, {paddingHorizontal: isProductCart ? null : 0}]}>
      {isProductCart ? (
        <>
          <Pressable
            style={styles.submitEnquiryBtnContainer}
            onPress={handleWhatsappPress}>
            <Text style={styles.submitEnquiryBtnTextStyles}>
              Submit Enquiry
            </Text>
          </Pressable>
        </>
      ) : (
        <Pressable
          style={styles.whatsappBtnContainer}
          onPress={handleWhatsappPress}>
          <FontAwesome
            name="whatsapp"
            size={22}
            color="green"
            style={styles.icon}
          />
          <Text style={styles.whatsappBtnTextStyles}>Whatsapp</Text>
        </Pressable>
      )}
      {isProductCart ? null : (
        <Pressable style={styles.contactBtnContainer} onPress={handleCallPress}>
          <MaterialIcons
            name="call"
            size={22}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.contactBtnTextStyles}>Call</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    borderTopColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    padding: 20,
  },
  submitEnquiryBtnContainer: {
    width: SCREEN_WIDTH * 0.9,
    flexDirection: 'row',
    height: 49,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  submitEnquiryBtnTextStyles: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.WHITE,
  },
  whatsappBtnContainer: {
    borderColor: Colors.PRIMARY,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 2,
    width: 150,
    height: 50,
    padding: 7,
  },
  whatsappBtnTextStyles: {
    color: Colors.PRIMARY,
    textAlign: 'center',
    fontWeight: '600',
    paddingRight: 5,
    fontSize: 18,
  },
  contactBtnContainer: {
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    height: 50,
    width: 150,
    padding: 7,
  },
  contactBtnTextStyles: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontWeight: '600',
    paddingRight: 5,
    fontSize: 18,
  },
  imageIconStyles: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    marginRight: 10,
  },
  icon: {
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
});
