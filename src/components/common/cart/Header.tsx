import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { SCREEN_WIDTH } from '../../../utils/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../utils/Colors';


const Header = (props: HeaderProps) => {
  const { handleBackPress, titleText} = props
  return (
    <View style={styles.container}>
      {/* Back button and title */}
      <Pressable onPress={handleBackPress} style={styles.goBackContainer}>
        <View style={{ paddingTop: 2 }} >
          {/* Icon for the back button */}
          <Ionicons name='chevron-back' size={28} color={Colors.BLACK} />
        </View>
        <Text style={styles.headerTextStyles}>{titleText}</Text>
      </Pressable>
    </View>
  );
};

export default Header

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.SEMI_TRANSPARENT_MIDNIGHT_BLACK,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goBackContainer: {
    flexDirection: 'row',
  },
  headerTextStyles: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.BLACK,
    marginLeft: 10,
  },
})