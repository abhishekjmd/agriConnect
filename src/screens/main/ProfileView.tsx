import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const ProfileView = () => {
  const onWhatsAppPress = () => {
    let url = 'whatsapp://send?text=Hello!&phone=+919825571401';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const onCallPress = () => {
    let url = 'tel:+919825571401';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/splash4.png')} // Replace with your image
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.userName}>Ramu kaka mandi</Text>
      <Text style={styles.userTitle}>Farmer</Text>
      <View style={styles.userStats}>
        <Text style={styles.userStatsText}>8 Connections - 5 Products</Text>
      </View>
      <Text style={styles.userDescription}>
        Dedicated farmers seeking quality agricultural hardware and supplies for
        enhanced productivity and efficient farm management.
      </Text>
      {/* Tabs can be added here for "About us" and "Catalogue" */}
      <View style={styles.contactContainer}>
        <TouchableOpacity
          onPress={onWhatsAppPress}
          style={styles.contactButton}>
          <Image
            source={require('../../assets/icons/whatsApp.png')} // Replace with your WhatsApp icon
            style={styles.contactIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCallPress} style={styles.contactButton}>
          <Image
            source={require('../../assets/icons/call.png')} // Replace with your phone icon
            style={styles.contactIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  profileHeader: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 4,
    borderColor: 'white',
  },
  verifyAccount: {
    color: 'white',
    fontSize: 16,
    marginVertical: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginTop: 10,
  },
  userTitle: {
    fontSize: 18,
    color: '#555',
    alignSelf: 'center',
    marginBottom: 4,
  },
  userStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  userStatsText: {
    fontSize: 14,
    color: '#777',
  },
  userDescription: {
    fontSize: 18,
    color: '#000000CC',
    padding: 10,
    textAlign: 'center',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  contactButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
  contactIcon: {
    width: 30,
    height: 30,
  },
});

export default ProfileView;
