import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

const Styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  shop_owner: {
    color: Colors.PRIMARY,
    fontSize: 15,
    fontWeight: '600',
    paddingHorizontal: 5,
  },
  shopInfoMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
    paddingVertical: 1,
  },
  ownerLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.SECONDARY_BLACK,
  },
  shopNameContainer: {
    marginRight: 30,
    paddingVertical: 1,
  },
  shop_text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
    maxWidth: '95%',
    minWidth: '90%',
  },
  shopGst: {
    color: '#8D99AE',
    fontSize: 13,
    fontWeight: '500',
  },
  descriptionContainer: {
    paddingVertical: 1,
    paddingHorizontal: '6%',
  },
  descriptionText: {
    color: 'rgba(0,0,0,0.7)',
    fontWeight: '500',
    fontSize: 13,
  },
  gstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
  },
  gstBadge: {
    width: 29,
    height: 29,
  },
});

export default Styles;