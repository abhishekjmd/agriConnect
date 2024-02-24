import { StyleSheet, Text, View } from 'react-native'
import { SCREEN_WIDTH } from '../../../utils/Theme'
import { ProgressBar } from 'react-native-paper'
import Colors from '../../../utils/Colors';
import { useStores } from '../../../stores';
const ProfileCompletion = () => {
  const { userStore } = useStores();
  const progress = (userStore.loggedInUser.user.completionScore || 0) / 100;
  return (
    <View style={styles.rootContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.countTextStyles}>Profile {userStore.loggedInUser.user.completionScore}%</Text>
        </View>
        <View style={[
          styles.completeProfileContainer,
          {
            width: progress === 1 ? SCREEN_WIDTH * 0.32 : SCREEN_WIDTH * 0.3,
            borderColor: progress === 1 ? Colors.HELLOSPRING : Colors.CHERRYVELVET,
            backgroundColor: progress === 1 ? Colors.HELLOSPRING : Colors.DEEP_ROSEWOOD
          }]}>
          <Text style={[
            styles.completeProfileTextStyles,
            {
              color: progress === 1 ? Colors.HELLOSPRING : Colors.CHERRYVELVET
            }
          ]}>
            {
              progress === 1 ? 'Profile completed' : 'Complete profile'
            }
          </Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar color={Colors.HELLOSPRING} style={styles.progressBar} progress={progress} />
      </View>
    </View>
  )
}

export default ProfileCompletion

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH * 0.64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  countContainer: {},
  countTextStyles: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.BLACK
  },
  completeProfileContainer: {
    height: 26,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeProfileTextStyles: {
    fontSize: 11,
    fontWeight: '600',
  },
  progressBarContainer: {
    width: '100%',
    paddingVertical: 6,
    marginTop: 2,
  },
  progressBar: {
    width: '100%',
    height: 10,
    borderRadius: 7,
  },
})