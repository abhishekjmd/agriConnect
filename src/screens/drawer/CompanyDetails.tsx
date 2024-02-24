import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import DetailsInfoCard from '../../components/companyDetails/DetailsInfoCard';
import Footer from '../../components/companyDetails/Footer';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors';
import { NYAKUL_COMPANY_DETAILS } from '../../config/constants';

export default function CompanyDetails({navigation}) {
  const copyToClipboard = (key, value) => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: `${key} Copied to clipboard`,
    });
    Clipboard.setString(value);
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={{paddingRight: 10}} 
          onPress={() => navigation.navigate('DrawerAboutUs')}>
          <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
        </TouchableOpacity>
        <Text style={styles.heading}>Nyakul Company details</Text>
        </View>
        <Divider style={styles.divider}/>
      <View style={{paddingHorizontal: 20}}>
      {NYAKUL_COMPANY_DETAILS.map((item, index) => {
        return (
          <DetailsInfoCard
            key={index}
            detailskey={item.key}
            detailsValue={index == 0
              ? item.value.replace(/\d{4}(?=.)/g, '$& ')
              : item.value}
            onClipBoardPress={() => copyToClipboard(item.key, item.value)}
          />
        );
      })}
      </View>
      <Footer contentText='Copyright © 2023 Nyakul' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingBottom: 15
  },
  header: {
    flexDirection: 'row', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    alignSelf: 'flex-start'
},
heading: {
    color: Colors.SECONDARY_BLACK,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 19,
    paddingTop: 5
},
divider: {
    height: 1,
    color: Colors.SECONDARY_BLACK,
    marginBottom: 20
}
});
