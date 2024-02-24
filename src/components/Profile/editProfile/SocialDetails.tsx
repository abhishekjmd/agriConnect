import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { EmailIcon, FacebookIcon, InstagramIcon, WebsiteIcon } from '../../../assets';
import EditProfileCustomInput from './EditProfileCustomInput';
import { isValidEmail } from '../../../utils/InputFieldValidators';
import TitlesHeader from './TitlesHeader';

type SocialDetailsProps = {
  primaryEmailId: string,
  setPrimaryEmailId: React.Dispatch<React.SetStateAction<string>>,
  setEmailIdError: boolean,
  emailIdError: boolean,
  facebookLink: string,
  setFacebookLink: React.Dispatch<React.SetStateAction<string>>,
  instagramLink: string,
  setInstagramLink: React.Dispatch<React.SetStateAction<string>>,
  website: string,
  setWebsite: React.Dispatch<React.SetStateAction<string>>
}

const SocialDetails = (props: SocialDetailsProps) => {
  const {
    primaryEmailId,
    setPrimaryEmailId,
    setEmailIdError,
    emailIdError,
    facebookLink,
    setFacebookLink,
    instagramLink,
    setInstagramLink,
    website,
    setWebsite
  } = props
  const socialDetailsInputData = [
    {
      placeholder: 'Email ID',
      leftIconComponent: (
        <Image
          source={EmailIcon}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: primaryEmailId,
      onChangeText: (primaryEmailId) => {
        setPrimaryEmailId(primaryEmailId);
        setEmailIdError(!isValidEmail(primaryEmailId));
      },
      error: emailIdError,
      errorMessage: 'Please enter a valid email ID',
    },
    {
      placeholder: 'Facebook',
      leftIconComponent: (
        <Image
          source={FacebookIcon}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: facebookLink,
      onChangeText: (facebookLink) => {
        setFacebookLink(facebookLink);
      },
    },
    {
      placeholder: `Instagram`,
      leftIconComponent: (
        <Image
          source={InstagramIcon}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: instagramLink,
      onChangeText: (instagramLink) => {
        setInstagramLink(instagramLink);
      },
    },
    {
      placeholder: 'Website',
      leftIconComponent: (
        <Image
          source={WebsiteIcon}
          style={{ width: 30, height: 50 }}
          resizeMode='center'
        />
      ),
      value: website,
      onChangeText: (website) => {
        setWebsite(website);
      },
    },
  ];

  return (
    <View style={styles.social_details_container}>
      <TitlesHeader
        text={`Social Media Details (optional)`}
        style={{ marginLeft: 10 }}
      />
      {socialDetailsInputData.map((item, index) => {
        return (
          <EditProfileCustomInput
            key={index}
            placeholder={item.placeholder}
            leftIconComponent={item.leftIconComponent}
            showConnectingLine={index < socialDetailsInputData.length - 1}
            value={item.value}
            onChangeText={item.onChangeText}
          />
        );
      })}
    </View>
  )
}

export default SocialDetails

const styles = StyleSheet.create({
  social_details_container: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})