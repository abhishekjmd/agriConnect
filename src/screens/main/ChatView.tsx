import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SCREEN_WIDTH } from '../../utils/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatView = ({ }) => {
  const socialMediaData = [
    {
      name: 'Facebook',
      icon: 'facebook',
      color: '#3b5998',
      url: 'https://m.facebook.com/nyakul.business',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      color: '#e4405f',
      url: 'https://www.instagram.com/nyakul_business/',
    },
    {
      name: 'Whatsapp',
      icon: 'whatsapp',
      color: 'green',
      url:
        'whatsapp://send?text=' +
        'Hello Nyakul. I have a query regarding ' +
        '&phone=' +
        '+91 7217724264',
    },
    {
      name: 'Call',
      icon: 'phone',
      color: 'green',
      url: 'tel:' + '+91 7217724264',
    },
  ];

  const renderSocialMediaButton = ({ item }) => (
    <TouchableOpacity
      style={styles.socialMediaButton}
      onPress={() => {}}
    >
      <Icon name={item.icon} size={30} color={item.color} />
    </TouchableOpacity>
  );

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((error) => {
      log.error('Error opening URL:', error);
    });
  };

  return (
    <View style={styles.chatContainer}>
      <Image
        style={styles.chatImage}
        source={require('../../assets/chat-coming-soon.png')}
      />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={socialMediaData}
          renderItem={renderSocialMediaButton}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  chatImage: {
    width: '100%',
    height: '90%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH - 50,
    backgroundColor: '#F5F6F9',
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 26,
    marginLeft: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  searchIconContainer: {
    width: 32,
    height: 32,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    marginRight: 8,
  },
  input: {
    fontWeight: '500',
    color: 'black',
    fontSize: 14,
    width: SCREEN_WIDTH - 120,
    height: 46,
  },
  message_item: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F6F9',
  },
  message_image_container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F3F3',
    marginRight: 8,
  },
  message_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  time: {
    fontSize: 12,
    color: '#858DB4',
  },
  socialMediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default ChatView;
