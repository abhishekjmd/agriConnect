'use strict';
import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';
import { SCREEN_WIDTH,SCREEN_HEIGHT } from '../utils/Theme';

export const globalStyles = StyleSheet.create({
  header1: {
    fontSize: 20,
    fontWeight: '600',
  },
  header2: {
    fontSize: 16,
  },
  subtitle1: {
    fontSize: 14,
    fontWeight: '400',
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: '400',
  },
  font600: {
    fontWeight: '600',
  },
  verticalDivider: {
    width: 0,
    height: 35,
    borderColor: Colors.DARK_GRAY,
    borderWidth: 0.2,
    marginHorizontal: 10,
  },
  buttonSubmit: {
    height: 48,
    width: SCREEN_WIDTH * 0.85,
    borderRadius: 8,
    marginVertical: 30,
    backgroundColor: Colors.PRIMARY,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  userDataInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 8,
    borderRadius: 3,
  },
  userDataInputText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    width: '90%',
  },
  leftIcon: {
    width: 25,
    height: 50,
    resizeMode: 'contain',
    marginRight: 16,
    tintColor: '#31A05F',
  },
  editIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  customContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 20,
    width: '100%',
  },
  centerAlignedView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  connectIconStyle: {
    width: 25,
    height: 50,
    resizeMode: 'contain',
  },
  discoverHeadersIconSyles: {
    position: 'absolute',
    right: -28,
  },
  //CreateRequirements styles (styles for ProductDescription,BrandPreferences,CustomizeYourPreferences)
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: SCREEN_WIDTH * 0.92,
    padding: 10,
  },
  headerTextStyles: {
    color: Colors.PRIMARY,
    fontWeight: '600',
    fontSize: 18,
  },
  productContainer: {
    width: SCREEN_WIDTH * 0.92,
    padding: 10,
  },
  productTextStyles: {
    fontWeight: '500',
    fontSize: 14,
    color: Colors.DARK_CHARCOAL,
  },
  productInputContainer: {
    width: SCREEN_WIDTH * 0.89,
    borderWidth: 1,
    borderColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    borderRadius: 3,
    height: 40,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  btnContainer: {
    width: SCREEN_WIDTH * 0.92,
    padding: 10,
    flex: 0.9,
    justifyContent: 'flex-end',
  },
  btnStyles: {
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
});
