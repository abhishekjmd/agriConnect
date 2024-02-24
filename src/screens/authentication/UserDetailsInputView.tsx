import { View, Text, StyleSheet, Image, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import Colors from '../../utils/Colors';
import { SCREEN_WIDTH } from '../../utils/Theme';
import ShopInput from '../../components/Profile/ShopInput';
import { ScrollView } from 'react-native-gesture-handler';
import SocialInput from '../../components/Profile/SocialInput';
import BusinessInput from '../../components/Profile/BusinessInput';

export default function UserRegistrationScreen() {
  const [selectProgress, setSelectProgress] = useState(0);
  const [userData, setUserData] = useState({});
  const [dealsIn, setDealsIn] = useState('');

  const checkProgress = (progress: number): string => {
    if (progress === selectProgress) {
      return 'active';
    } else if (progress < selectProgress) {
      return 'completed';
    } else {
      return 'inactive';
    }
  };

  const progressBarData = [
    {
      title: 'Business Details',
      status: checkProgress(0),
    },
    {
      title: 'Shop Details',
      status: checkProgress(1),
    },
    {
      title: 'Social Media Details',
      status: checkProgress(2),
    },
  ];

  const handleBackPress = () => {
    if (selectProgress > 0) {
      setSelectProgress(selectProgress - 1);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => backHandler.remove();
  }, [selectProgress]);


  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/agriConnectLogo.png')}
        style={styles.image}
      />
      <View style={styles.progressBarContainer}>
        {progressBarData.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: index === 2 ? 0 : SCREEN_WIDTH / 2 - 55,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    styles.roundButton,
                    {
                      backgroundColor:
                        item.status === 'completed' || item.status === 'active'
                          ? Colors.PRIMARY
                          : '#fff',
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      color:
                        item.status === 'completed' || item.status === 'active'
                          ? '#fff'
                          : '#00000080',
                    }}>
                    {index + 1}
                  </Text>
                </View>
                {index !== 2 && (
                  <View
                    style={{
                      height: 6,
                      width: '100%',
                      backgroundColor:
                        item.status === 'completed'
                          ? Colors.PRIMARY
                          : '#E0E0E0',
                    }}
                  />
                )}
              </View>
              {item.status === 'active' && index !== 2 && (
                <Text style={styles.title}>{item.title}</Text>
              )}
            </View>
          );
        })}
      </View>
      <View
        style={{
          paddingHorizontal: 16,
        }}>
        {selectProgress === 0 ? (
          <BusinessInput
            userData={userData}
            setUserData={setUserData}
            setSelectProgress={setSelectProgress}
            dealsIn={dealsIn}
            setDealsIn={setDealsIn}
          />
        ) : selectProgress === 1 ? (
          <ShopInput
            userData={userData}
            setUserData={setUserData}
            setSelectProgress={setSelectProgress}
          />
        ) : (
          <SocialInput
            userData={userData}
            setUserData={setUserData}
            dealsIn={dealsIn}
          />
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  progressBarContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.PRIMARY,
    right: 20
  },
  roundButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 51,
    width: 155,
    alignSelf: 'center',
    marginBottom: 16,
  },
});
