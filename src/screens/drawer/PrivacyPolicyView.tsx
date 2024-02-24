import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import Colors from '../../utils/Colors';

const PrivacyPolicyView = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerAboutUs')}>
        <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
        </TouchableOpacity>
        <Text style={styles.heading}>Privacy Policy</Text>
        </View>
        <Divider style={styles.divider}/>
        <ScrollView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Text>
          This privacy policy (“Policy”) explains our policy regarding the collection, use, 
          disclosure, and transfer of your (Your/ User/ Users)
          Information by Inogy Solutions Private Limited and/or its subsidiary
          (ies) and/or affiliate(s) (collectively referred to as the “Company” /
          “We”/ “Us”/ “Our”), which operates the website https://nyakul.com/
          (SITE), “Nyakul App” (the “App”) available on Google Play Store, iOS
          and other similar platforms and other services (collectively referred
          to as “Services”/ “Nyakul App Services”).</Text>
          
          <Text style={{paddingTop: 20}}>
          This Privacy Policy applies to all products and services provided by the 
          company and sets out how the company may collect, use and disclose Information 
          in relation to Users of the Platform. This Privacy Policy forms part and parcel 
          of the Terms of Use for the Nyakul App Services. Capitalized terms that
          have been used here but are undefined shall have the same meaning as
          attributed to them in the Terms of Use. As We update, improve and
          expand the Nyakul App Services, this Policy may change, so please
          refer back to it periodically.</Text>

          <Text style={{paddingTop: 20}}>
          By accessing the Site, App, or
          otherwise using the Nyakul App Services, You consent to the
          collection, storage, and use of the Information You provide (including
          any changes thereto as provided by You) for any of the services that
          We offer. The Company respects the privacy of the Users of the Nyakul
          App Services and is committed to protecting the Information in all
          respects on best efforts basis.</Text> 
          
          <Text style={{paddingTop: 20}}>
          The information about the User as collected by the Company is:
          </Text>

          <Text>(a) information supplied by Users and</Text> 
          <Text>(b) information automatically tracked while using a mobile device having
          Nyakul App Services enabled (collectively referred to as
          “Information”).</Text>

          <Text style={{paddingTop: 20}}>
          Information supplied by users To avail of certain
          Services on the Nyakul App, Users are required to provide certain
          personally identifiable information for the registration process which
          may include:</Text>

          <Text>a) their name,</Text> 
          <Text>b) profile and store images,</Text> 
          <Text>c) phone number,</Text> 
          <Text>d) business entity information and any other such information
          as required.</Text>
          
          <Text style={{paddingTop: 20}}>
          The Information supplied by the Users enables us to
          improve the Nyakul App Services and provide You the most user-friendly
          experience. In some cases/provision of certain service(s) or
          utility(ies), we may require Your contact address as well. This
          information may be shared with third parties to enable certain
          features and functionalities in Nyakul (For example, chat).</Text> 
          
          <Text style={{paddingTop: 20}}>
          Further, upon downloading the App, Users are requested to share access to their
          contact list (as stored on their mobile device on which the App is
          downloaded), so as to enable the User to find relevant business
          connections on Nyakul. This contact list of the User is uploaded to
          com.aam.ui.app, for the purposes of improving and enhancing the User
          experience of the App. We do not share contact list data with any
          third party and treat this data as personal or sensitive data subject
          to the Privacy Policy, Secure Transmission, and Prominent Disclosure
          requirements of User.</Text>
          
          <Text style={{paddingTop: 20}}>
          All required Information is service dependent
          and unless otherwise specified, the Company may use the above said
          Information to, maintain, protect, and improve the Nyakul App
          Services, and for developing new services. We may also use Your phone
          number without further consent for non-marketing or administrative
          purposes (such as notifying You of major changes, for customer service
          purposes, providing information about updates to Nyakul App Services,
          billing, etc.).</Text>
          
          <Text style={{paddingTop: 20}}>
          Any personally identifiable Information provided by
          You will not be considered as sensitive if it is freely available
          and/or accessible in the public domain. Further, any reviews,
          comments, messages, blogs posted/uploaded/conveyed/communicated by
          Users on the public sections of the Site or on the App (like the App
          Store or Play Store) becomes published content and is not considered
          personally identifiable Information which is subject to this Privacy
          Policy. In case You choose to decline to submit personally
          identifiable Information on the Nyakul App/Site, we may not be able to
          provide certain services on the App/Site to You.</Text>
          
          <Text style={{paddingTop: 20}}>
          We will make reasonable efforts to notify You of the same at the appropriate time.
          In any case, we will not be liable and or responsible for the denial
          of certain services to You for lack of You providing the necessary
          personal Information. When You register with the Nyakul App Services,
          we may contact You from time to time about updation of Your personal
          Information to provide the Users with such features that we believe
          may benefit/interest You. Information about Products and Collections
          on Nyakul Users may provide product-related information and may list
          it on Nyakul in the form of products or collections.</Text> 
          
          <Text style={{paddingTop: 20}}>
          Any product-related information (like posts, comments and images of the
          product) on Nyakul is not considered to be sensitive since it will be
          freely available and accessible in the public domain (On the Nyakul
          platform). While there are privacy options to limit the accessibility
          of information, Nyakul in no way guarantees that this information will
          not be viewable or accessible by other users, and the User agrees to
          indemnify Nyakul App Services for any liability arising of information
          being viewed and downloaded by other Users or Third Parties.</Text>

          <Text style={{paddingTop: 20}}>
          Furthermore, while Nyakul App Services will endeavor to make this data
          secure and only accessible to the parties the User chooses to share
          this information to, Nyakul App Services in no way guarantees the
          safety and consistency of this information. Information automatically
          tracked while using the app or site: Customer Information: We store
          the contact information of Your customers, provided they sign up with
          Nyakul and voluntarily choose to share this information. We also keep
          a log of all orders, posts, and chat related communication to the
          customers.</Text> 
          
          <Text style={{paddingTop: 20}}>
          Demographic and Related Information: We may reference other
          sources of demographic and other information in order to provide You
          with more targeted communications and promotions. We use Google
          Analytics, or similar such tools, to track User behaviour on our
          website. Log File Information: Our servers automatically collect
          limited Information about Your DEVICE connection to the internet,
          including Your IP address, when You visit our Site or use the App. We
          automatically receive and log Information from the App and/or Your
          browser including but not limited to IP address, Your device or
          computer name, and Your operating system.</Text> 
          
          <Text style={{paddingTop: 20}}>
          We may also collect log Information from Your device, including but 
          not limited to Your location, IP address, Your device name, device 
          serial number, or unique identification number (e.g. UDID on Your iOS 
          device, Android ID, or ADID on Your Android Device), Your device operating
          system, browser type, and version, CPU speed, and connection speed, etc.
          Cookies: To improve the responsiveness of the Site for our Users, we
          may use COOKIES , or similar electronic tools to collect information
          to assign each visitor a unique, random number as a User
          Identification (User ID) to understand the User individual interests
          using the identified computer.</Text> 
          
          <Text style={{paddingTop: 20}}>
          Our partners may also assign their own
          cookies to Your browser, a process that We do not control. Link to
          third party sites/ad-servers The Site may include links to other
          websites. Such websites are governed by their respective privacy
          policies, which are beyond our control. Once You leave our servers
          (You can tell where You are by checking the URL in the location bar on
          Your browser), use of any information You provide is governed by the
          privacy policy of the operator of the site You are visiting. That
          policy may differ from ours. If You cannot find the privacy policy of
          any of these sites via a link from the website homepage, You should
          contact the website directly for more information.</Text> 
          
          <Text style={{paddingTop: 20}}>
          Information sharing
          The Company may share the Information (including sensitive personal
          information) with any third party without obtaining the prior consent
          of the User in the following limited circumstances: When it is
          requested or required by law or by any court or governmental agency or
          authority to disclose, for the purpose of verification of identity, or
          for the prevention, detection, investigation including cyber
          incidents, or for prosecution and punishment of offences. These
          disclosures are made in good faith and belief that such disclosure is
          reasonably necessary for enforcing the Terms of Use or for complying
          with the applicable laws and regulations.</Text> 
          
          <Text style={{paddingTop: 20}}>
          The Company may also present
          information related to credit records, User spends, patterns, and User
          data tracked by the Company only in the form of aggregated statistics
          on data such as overall App usage by date, time, balances, etc. within
          our app/site or to our partners. Accessing and updating personal
          information Our Services and related documentation on the Site and the
          App provide You with the ability to access, update and delete certain
          Information from Your account if any. We will provide You with
          information about whether We hold any of Your Information upon
          request. We will respond to such requests within a reasonable
          timeframe. Please note, however, that We may need to retain certain
          information for record-keeping purposes, to complete Our Services and
          related obligations to You, or to comply with Our legal obligations.</Text>

          <Text style={{paddingTop: 20}}>
          Information storage and backup From time to time, we take backup of
          your data on Nyakul App on our cloud database. This is done for the
          purpose of enabling Users to get their data back in case their phone
          data becomes unusable, or phone gets lost, or the User moves to a new
          phone device. We also use this backup to provide useful insights and
          Information related to their usage of the app, and to provide
          Information related to product views, patterns and User data. We shall
          keep your information in our records till the period of time where we
          can potentially offer the Nyakul App Services to you. After such
          period of time Nyakul App Services are no more relevant to you, we
          remove all the Information from our records.</Text> 
          
          <Text style={{paddingTop: 20}}>
          Object or restrict processing of Your Information You have the right to: 
          (i) object to Our processing of Your Personal Information; and/or 
          (ii) request that We restrict the processing of Your Personal Information.</Text> 
          
          <Text style={{paddingTop: 20}}>
          You can write to Us via email or other means of communication in case 
          You want to exercise any or all of these data protection rights. Information
          storage and backup From time to time, We take backup of Your data on
          the Nyakul App on our cloud database. This is done for the purpose of
          enabling Users to get their data back in case their phone data becomes
          unusable, or the phone gets lost, or the User moves to a new phone
          device. We also use this backup to provide useful insights and
          Information related to their usage of the App, and to provide
          Information related to product views, patterns, and User data. We
          shall keep Your Information in our records till the period of time
          where We can potentially offer the Nyakul App Services to You.</Text> 
          
          <Text style={{paddingTop: 20}}>
          After such a period of time where Nyakul App Services is no more relevant to
          You, We remove all the Information from our records. Information
          security We take appropriate security measures to protect against
          unauthorized access to or unauthorized alteration, disclosure, or
          destruction of data. These include internal reviews of our data
          collection, storage, and processing practices and security measures,
          including appropriate encryption and physical security measures to
          guard against unauthorized access to systems where We store personal
          data. All Information gathered on the Nyakul App is securely stored
          within the controlled database. Access to the servers is
          password-protected and is strictly limited. Updates/Changes We may
          alter our Privacy Policy from time to time to incorporate necessary
          changes in technology, applicable law, or any other variant.</Text> 
          
          <Text style={{paddingTop: 20}}>
          In any case, We reserve the right to change (at any point in time) the terms
          of this Privacy Policy or the Terms of Use. Any changes We make will
          be effective immediately on notice, which We may give by posting the
          new policy on the Site. Your use of the Nyakul App Services after such
          notice will be deemed acceptance of such changes. We may also make
          reasonable efforts to inform You via electronic mail. In any case, You
          are advised to review this Privacy Policy periodically on the Site to
          ensure that You are aware of the latest version. Questions/Grievance
          Redressal In accordance with Information Technology Act 2000, Consumer
          Protection (E-Commerce) Rules, 2020 as amended from time to time, and
          rules made thereunder, the name and contact details of the Grievance
          Officer are provided below:</Text>
          <Text style={{fontWeight: '500'}}>Name: Mr. Anish Goel</Text>
          <Text style={{paddingBottom: 40, fontWeight: '500'}}>Email:contact@nyakul.com</Text>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor: Colors.WHITE,
      padding: 20
  },
  header: {
      flexDirection: 'row', 
      paddingHorizontal: 20, 
      paddingVertical: 10, 
      backgroundColor: Colors.WHITE
  },
  heading: {
      color: Colors.SECONDARY_BLACK,
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 19,
      paddingLeft: 10,
      paddingTop: 5
  },
  divider: {
      height: 1,
      color: Colors.SECONDARY_BLACK
  }
})

export default PrivacyPolicyView;
