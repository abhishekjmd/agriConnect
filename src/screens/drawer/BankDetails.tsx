import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/Colors';
import Clipboard from '@react-native-clipboard/clipboard';
import { SCREEN_HEIGHT } from '../../utils/Theme';
import Toast from 'react-native-toast-message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-paper';
import { NYAKUL_BANK_DETAILS } from '../../config/constants';

export default function BankDetails({ navigation }) {
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
        <TouchableOpacity style={{paddingRight: 10, paddingTop: 2}} 
          onPress={() => navigation.navigate('DrawerAboutUs')}>
          <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
        </TouchableOpacity>
        <Text style={styles.heading}>Nyakul bank details</Text>
        </View>
        <Divider style={styles.divider}/>
      <View style={{paddingHorizontal: 20}}>

        {NYAKUL_BANK_DETAILS.map((item, index) => {
          return (
            <View key={index} style={[styles.item]}>
              <Text style={styles.textStyle}>{item.key}</Text>
              <View style={styles.itemContent}>
                <Text style={styles.text}>
                  {index == 0
                    ? item.value.replace(/\d{4}(?=.)/g, '$& ')
                    : item.value}
                </Text>
                <MaterialIcons
                  name='content-copy'
                  size={20}
                  color={Colors.BLACK}
                  onPress={() => {
                    copyToClipboard(item.key, item.value);
                  }}
                />
              </View>
            </View>
          );
        })}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    height: SCREEN_HEIGHT, 
    backgroundColor: Colors.WHITE 
  },
  item: {
    padding: 10,
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.SECONDARY_BLACK,
  },
  heading: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.SECONDARY_BLACK,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    alignSelf: 'flex-start'
},
divider: {
    height: 1,
    color: Colors.SECONDARY_BLACK,
    marginBottom: 20
},
textStyle: { 
  color: Colors.BLACK, 
  fontWeight: '600', 
  fontSize: 15 
}
});