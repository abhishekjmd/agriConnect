import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-paper'
import Colors from '../../utils/Colors';

const list = [
    {
     name: 'Bank Details',
     screen: 'BankDetails',
    },
    {
     name: 'Company Details', 
     screen: 'CompanyDetails',
    },
    {
    name: 'Terms and Conditions',
    screen: 'TermsAndConditions',
    },
    {
    name: 'Privacy Policy',
    screen: 'PrivacyPolicy',
    },
]

const DrawerAboutUs = ({navigation}) => {

const handlePress = (screen) => {
    if (screen && navigation) {
        navigation.navigate(screen);
    }
};

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
        </TouchableOpacity>
        <Text style={styles.heading}>About Us</Text>
        </View>
        <Divider style={styles.divider}/>
        {
            list.map((item, index) => (
                <View key={index} style={styles.listContainer}>
                    <TouchableOpacity style={styles.listRow}
                    onPress={() => handlePress(item.screen)}>
                    <Text style={styles.text}>{item.name}</Text>
                    <AntDesign name='right' size={18} color={Colors.DARK_GRAY} />
                    </TouchableOpacity>
                    <Divider style={styles.divider}/>
                </View>
            ))
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor: Colors.WHITE,
  },
  header: {
      flexDirection: 'row', 
      paddingHorizontal: 20, 
      paddingVertical: 10, 
      backgroundColor: Colors.WHITE
  },
  heading: {
      color: Colors.SECONDARY_BLACK,
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 19,
      paddingLeft: 10,
      paddingTop: 5
  },
  listContainer: {
    paddingHorizontal: 30,
    top: 30
  },
  listRow: {
    flexDirection: 'row', 
    paddingVertical: 15, 
    justifyContent: 'space-between'
  },
  text: {
    color: Colors.SECONDARY_BLACK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 17,
    paddingTop: 5
  },
  divider: {
    height: 0.9,
    color: Colors.SECONDARY_BLACK
  }
})

export default DrawerAboutUs;