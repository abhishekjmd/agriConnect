import { StyleSheet, Text, View } from 'react-native';
import { SCREEN_WIDTH } from '../../../utils/Theme';
import { ProgressBar } from 'react-native-paper';
import Colors from '../../../utils/Colors';
import { useStores } from '../../../stores';

const ProfileCompletionView = () => {
  const  {userStore} = useStores();
  const progress = (userStore.loggedInUser.user.completionScore || 0) / 100;
  return (
    <View style={styles.completionMainContainer}>
      <View style={styles.completionInfoContainer}>
        <Text style={styles.completionInfoTextStyles}>By completing all the details you have higher chance of connecting with many people</Text>
      </View>
      <View style={styles.profileCompletionContainer}>
        <View>
          <Text style={styles.progressCountTextStyles}>{userStore.loggedInUser.user.completionScore}%</Text>
        </View>
        <View>
          <ProgressBar color={Colors.HELLOSPRING} style={styles.progressBar} progress={progress} />
        </View>
      </View>
    </View>
  )
}

export default ProfileCompletionView

const styles = StyleSheet.create({
  completionMainContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  completionInfoContainer: {
    width: SCREEN_WIDTH * 0.91,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10
  },
  completionInfoTextStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.BlackishGrey
  },
  profileCompletionContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  progressCountTextStyles: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.BLACK
  },
  progressBar: {
    width: SCREEN_WIDTH * 0.77,
    height: 10,
    borderRadius: 7
  },
})
