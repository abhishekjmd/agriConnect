import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../utils/Theme';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const TopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.profileWithTitleContainer}>
          <Pressable>
            <Avatar.Image
              size={28}
              source={require('../../../assets/agriConnectLogo.png')}
              style={{marginRight: 5}}
            />
          </Pressable>
          <Text style={styles.textStyles}>Requirements</Text>
        </View>
        <View style={styles.iconContainers}>
          <Image
            style={styles.notificationIconStyles}
            source={require('../../../assets/requirements/notification.png')}
          />
          <TouchableOpacity>
            <Image
              style={styles.iconStyles}
              source={require('../../../assets/requirements/list.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  titleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  profileWithTitleContainer: {
    width: SCREEN_WIDTH * 0.63,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: '1%',
  },
  textStyles: {
    fontWeight: '600',
    marginLeft: '1%',
    color: 'black',
    fontSize: 18,
  },
  iconContainers: {
    width: SCREEN_WIDTH * 0.15,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  notificationIconStyles: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
  iconStyles: {
    height: 25,
    width: 25,
  },
});
