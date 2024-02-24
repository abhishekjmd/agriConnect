import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper'
import Colors from '../../utils/Colors';

const TermsAndConditionsView = ({navigation}) => {
  return (
    <>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerAboutUs')}>
        <Ionicons name='chevron-back' size={24} color={Colors.SECONDARY_BLACK} />
        </TouchableOpacity>
        <Text style={styles.heading}>Terms and Conditions</Text>
        </View>
        <Divider style={styles.divider}/>
        <ScrollView style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center'}}>TERMS OF USE</Text>
          <Text style={{paddingTop: 20}}>
          These Terms of Use describe the terms and conditions applicable to your access and use of the website www.nyakul.com and its mobile application platform (each a “Platform”). This document is a legally binding agreement between you as the user(s) of the Platform (referred to as “you”, “your” or “User” hereinafter) and the Inogy Solutions Private Limited entity listed in clause 
          2.a below (referred to as “we”, “our” or “Inogy” or “Nyakul” hereinafter).
          </Text>

          <Text style={{paddingTop: 20}}>      
          Application and Acceptance of the Terms
          User use of the Platform and Nyakul services, software and products (collectively the as the “Services” hereinafter) is subject to the terms and conditions contained in this document as well as the Privacy Policy, The Product Listing Policy, and any other rules and policies of the Platform that Nyakul may publish from time to time.
          This document and such other rules and policies of the Platform are collectively referred to below as the “Terms”. By accessing the Platform or using the Services, User agrees to accept and be bound by the Terms. Please do not use the Services or access the Platform if you do not accept all of the Terms or are unable to be bound by the Terms.
          </Text>

          <Text style={{paddingTop: 20}}>  
          User may not use the Services and may not accept the Terms if you are not of legal age to form a binding contract with Nyakul.
          You acknowledge and agree that Nyakul may amend any Terms at any time by posting the relevant amended and restated Terms on the Platform. By continuing to use the Services or the Platform, you acknowledge to have accepted the amended Terms and agree that the amended Terms will apply to you.
          The Terms may not otherwise be modified except in writing by an authorized officer of Nyakul.
          Provision of Services
          The Nyakul contracting entity that you are contracting with for access to the Platform is Inogy Solutions Private Limited. 
          </Text>

          <Text style={{paddingTop: 20}}>
          In case you avail services while accessing the Platform, that may be supported and/or provided by third party service provider(s), for all such services your contracting entity will be such third party service provider(s), as the case may be. Nyakul disclaims all liability for any claims that may arise pursuant to your use of services provided by such third party service provider(s).
          You must register as a member on the Platform in order to access and use Services. Further, Nyakul reserves the right, without prior notice, to restrict access to or use of certain Services (or any features within the Services) subject to other conditions that Nyakul may impose in its discretion.Fees and Charges Payable by User
          User will pay to Nyakul, if applicable, fee for use and access of the Platform and for services availed while accessing the Platform that may be supported and/or provided by third party service provider(s) to the seller (collectively referred to as ‘Platform Fee’). 
          </Text>
          
          <Text style={{paddingTop: 20}}>
          Platform Fee will be ascertained based on the criteria determined by Nyakul and communicated to the seller, from time to time.
          The applicable Platform Fee shall be as communicated by Nyakul to the user(s), from time to time, via the Platform or through such other mode of communication as may be determined by Nyakul in its sole discretion. It shall be the user’s responsibility to routinely check on such Platform Fee. In the event you continue to use the Platform and the services by third party service providers made available by the Platform, it shall be deemed that you have agreed to such change in the Platform Fee.
          The Platform Fee shall be exclusive of all applicable taxes, including Goods and Services Tax.
          The invoices for the Platform Fee shall be issued to you via the Platform
          Users General Terms
          You agree to use the Platform or Services solely for your own private and internal purposes. 
          </Text>

          <Text style={{paddingTop: 20}}>
          You agree that (a) you will not copy, reproduce, download, re-publish, sell, distribute or resell any Services or any information, text, images, graphics, video clips, sound, directories, files, databases or listings, etc. available on or through the Platform (the “Site Content”), and (b) you will not copy, reproduce, download, compile or otherwise use any Platform Content for the purposes of operating a business that competes with Nyakul, or otherwise commercially exploiting the Platform Content or systematic retrieval of Platform Content from the Platform to create or compile, directly or indirectly, a collection, compilation, database or directory (whether through robots, spiders, automatic devices or manual processes).
          You must read Nyakuls Privacy Policy which governs the protection and use of personal information about Users of Platform. You accept the terms of the Privacy Policy and agree to the use of the personal information about you in accordance with the Privacy Policy.
          </Text>

          <Text style={{paddingTop: 20}}>
          Nyakul may allow Users access to content, products or services offered by third parties through hyperlinks (in the form of word link, banners, channels or otherwise), API or otherwise to such third parties web sites. You are cautioned to read such third parties terms and conditions and/or privacy policies before using the Platform with respect to such content, products or services that you may avail. You acknowledge that Nyakul has no control over such third parties web sites and shall not be responsible or liable to anyone for such web sites, or any content, products or services made available on such web sites.
          You agree not to undertake any action which may undermine the integrity of Nyakul  feedback system.
          By posting or displaying any information, content or material (User Content) on the Platform or providing any User Content to Nyakul or our representative(s), you grant an irrevocable, perpetual, worldwide, royalty-free, and sub-licensable license to Nyakul to display, transmit, distribute, reproduce, publish, duplicate, adapt, modify, translate, create derivative works, and otherwise use any or all of the User Content in any form, media, or technology now known or not currently known in any manner and for any purpose which may be beneficial to the operation of the Platform, the provision of any Services and/or the business of the User. 
          </Text>

          <Text style={{paddingTop: 20}}>          
          You confirm and warrant to Nyakul that you have all the rights, power and authority necessary to grant the above license.
          User agree, undertake and confirm that User use of Platform shall be strictly governed by the following binding principles:
          User shall not host, display, upload, modify, publish, transmit, update or share any information which:
          belongs to another person and to which User does not have any right to;
          is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; or unlawfully threatening or unlawfully harassing including but not limited to indecent representation of women within the meaning of the Indecent Representation of Women (Prohibition) Act 1986;
          </Text>

          <Text style={{paddingTop: 20}}>
          is misleading in any way;
          is patently offensive to the online community, such as sexually explicit content, or content that promotes obscenity, paedophilia, racism, bigotry, hatred or physical harm of any kind against any group or individual;
          harasses or advocates harassment of another person;
          involves the transmission of junk mail, chain letters, or unsolicited mass mailing or spamming or messages using Nyakul communication platform;
          promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libellous;
          infringes upon or violates any third party rights [including, but not limited to, intellectual property rights, rights of privacy (including without limitation unauthorized disclosure of a persons name, email address, physical address or phone number) or rights of publicity];
          promotes an illegal or unauthorized copy of another person copyrighted work, such as providing pirated computer programs or links to them, providing information to circumvent manufacture-installed copy-protect devices, or providing pirated music or links to pirated music files;
          contains restricted or password-only access pages, or hidden pages or images (those not linked to or from another accessible page);
          provides material that exploits people in a sexual, violent or otherwise inappropriate manner or solicits personal information from anyone;
          provides instructional information about illegal activities such as making or buying illegal weapons, violating someones privacy, or providing or creating computer viruses;
          contains video, photographs, or images of another person (with a minor or an adult).
          tries to gain unauthorized access or exceeds the scope of authorized access to the Platform or to profiles, blogs, communities, account information, bulletins, friend request, or other areas of the Platform or solicits passwords or personal identifying information for commercial or unlawful purposes from other users;
          engages in commercial activities and/or sales without prior written consent such as contests, sweepstakes, barter, advertising and pyramid schemes, or the buying or selling of virtual products related to the Platform. 
          </Text>

          <Text style={{paddingTop: 20}}>
          Throughout this Terms of Use, Nyakul s prior written consent means a communication coming from Nyakul s Legal Department, specifically in response to Your request, and specifically addressing the activity or conduct for which You seek authorization;
          solicits gambling or engages in any gambling activity which, in sole discretion, believes is or could be construed as being illegal;
          interferes with another Users use and enjoyment of the Platform or any other individuals User and enjoyment of similar services;
          refers to any website or URL that, in sole discretion, contains material that is inappropriate for the Platform or any other website, contains content that would be prohibited or violates the letter or spirit of these Terms of Use.
          </Text>

          <Text style={{paddingTop: 20}}>
          harm minors in any way;
          infringes any patent, trademark, copyright or other proprietary rights or third partys trade secrets or rights of publicity or privacy or shall not be fraudulent or involve the sale of counterfeit or stolen products;
          violates any law for the time being in force;
          deceives or misleads the addressee/ users about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;
          impersonate another person;
          contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource; or contains any trojan horses, worms, time bombs, cancel-bots, easter eggs or other computer programming routines that may damage, detrimentally interfere with, diminish value of, surreptitiously intercept or expropriate any system, data or personal information;
          threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.
          </Text>

          <Text style={{paddingTop: 20}}>
          shall not be false, inaccurate or misleading;
          shall not, directly or indirectly, offer, attempt to offer, trade or attempt to trade in any item, the dealing of which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force.
          shall not create liability for Nyakul or cause Nyakul to lose (in whole or in part) the services of our internet service provider (ISPs) or other suppliers;
          You shall not use any deep-link,page-scrape, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Platform or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Platform or any Content, to obtain or attempt to obtain any materials, documents or information through any means not purposely made available through the Platform. Nyakul reserve its right to bar any such activity.
          User shall not attempt to gain unauthorized access to any portion or feature of the Platform, or any other systems or networks connected to the Platform or to any server, computer, network, or to any of the services offered on or through the Platform, by hacking, password mining or any other illegitimate means.
          </Text>

          <Text style={{paddingTop: 20}}>
          Unless expressly permitted, User shall not probe, scan or test the vulnerability of the Platform or any network connected to the Platform nor breach the security or authentication measures on the Platform or any network connected to the Platform. User may not reverse look-up, trace or seek to trace any information on any other User of or visitor to Platform, or any other user, including any account on the Platform not owned by User, to its source, or exploit the Platform or any service or information made available or offered by or through the Platform, in any way where the purpose is to reveal any information, including but not limited to personal identification or information, other than Users own information, as provided for by the Platform.
          User Accounts
          User must be registered on the Platform to access or avail the Services. 
          </Text>

          <Text style={{paddingTop: 20}}>
          Except with Nyakuls approval, one User may only register one account on the Platform. Nyakul may cancel or terminate a Users account if Nyakul has reasons to suspect that the User has concurrently registered or controlled two or more accounts. Further, Nyakul may reject Users application, without assigning any reasons thereof, for registration for any other reason.
          A set of User ID and OTP (One Time Password) / password is unique to a single account. You shall be solely responsible for maintaining the confidentiality and security of your user ID and password and for all activities that occur under Users account. 
          </Text>

          <Text style={{paddingTop: 20}}>
          You agree that all activities that occur under your account (including without limitation, posting any company or product information, clicking to accept any terms & conditions or rules, subscribing to or making any payment for any services, sending emails using the Platform or other communications) will be deemed to have been authorized by you.
          Users Responsibilities
          You represents, warrants and agrees that (a) you are at least eighteen (18) years of age or above and are fully able and competent to understand and agree to the Terms (b) you have full power and authority to accept the Terms, to grant the license and authorization and to perform the obligations hereunder; (c) you use the Platform and Services for business purposes only and that By registering on Nyakul App, you represent and agree that you are a bonafide business; and (d) the address you provide when registering is the principal place of business of your business entity.
          User will be required to provide information or material about Users entity, business or products/services as part of the registration process on the Platform or your use of any Service or the User account. Each User represents, warrants and agrees that (a) such information and material whether submitted during the registration process or thereafter throughout the continuation of the use of the Platform or Service is true, accurate, current and complete, and (b) User will maintain and promptly amend all information and material to keep it true, accurate, current and complete.
          User consents to the inclusion of the contact information about User in Nyakuls database.
          </Text>

          <Text style={{paddingTop: 20}}>
          You represents, warrants and agrees that (a) you shall be solely responsible for obtaining all necessary third party licenses and permissions regarding any User Content that you submit, post or display; (b) any User Content that User submit, post or display does not infringe or violate any of the copyright, patent, trademark, trade name, trade secrets or any other personal or proprietary rights of any third party (“Third Party Rights”); (c) User have the right and authority to sell, trade, distribute or export or offer to sell, trade, distribute or export the products or services described in the User Content and such sale, trade, distribution or export or offer does not violate any Third Party Rights.
          Breaches
          Nyakul reserves the right in its sole discretion, without intimation to the User, remove, modify or reject any User Content that User submit to, post or display on the Platform which Nyakul reasonably believes is unlawful, violates the Terms, could subject Nyakul or its affiliates to liability, or is otherwise found inappropriate in Nyakuls opinion.
          If any User breaches any Terms, or if Nyakul has reasonable grounds to believe that a User is in breach of any Terms, Nyakul shall have the right to take such disciplinary actions as it deems appropriate, including without limitation: (i) suspending or terminating the Users account and any and all accounts determined to be related to such account by Nyakul in its discretion; (ii) restricting, downgrading, suspending or terminating the subscription of, access to, or current or future use of any Service; (iii) removing any product listings or other User Content that the User has submitted, posted or displayed; and (v) any other corrective actions, discipline or penalties as Nyakul may deem necessary or appropriate in its sole discretion.
          Nyakul reserves the right to cooperate fully with governmental authorities, private investigators and/or injured third parties in the investigation of any suspected criminal or civil wrongdoing. Further, Nyakul may disclose the User
          s identity and contact information, if requested by a government or law enforcement body, an injured third party, or as a result of a subpoena or other legal action.
          Each User agrees to indemnify Nyakul, its affiliates, directors, employees, agents and representatives and to hold them harmless, from any and all damages, losses, claims and liabilities (including legal costs on a full indemnity basis) which may arise from your submission, posting or display of any User Content, from your use of the Platform or Services, or from your breach of the Terms.
          Transactions Between Users
          For any Services, Nyakul does not represent either the seller or the buyer in specific transactions. 
          </Text>

          <Text style={{paddingTop: 20}}>
          Nyakul does not control and is not liable to or responsible for the quality, safety, lawfulness or availability of the products or services offered for sale on the Platform or the ability of the sellers to complete a sale or the ability of buyers to complete a purchase.
          Users agree that Nyakul cannot and does not confirm each Users purported identity. Nyakul encourage Users to exercise discretion and caution while dealing with various Users.
          Each User acknowledges that it is fully assuming the risks of conducting any purchase and sale transactions (hereinafter referred to as “Transaction Risk”) in connection with using the Platform or Services, and that it is fully assuming the risks of liability or harm of any kind in connection with subsequent activity of any kind relating to products or services that are the subject of transactions using the Platform.
          </Text>

          <Text style={{paddingTop: 20}}>
          In the event that any User has a dispute with any party to a transaction, such User agrees to release and indemnify Nyakul (and our agents, affiliates, directors, officers and employees) from all claims, demands, actions, proceedings, costs, expenses and damages (including without limitation any actual, special, incidental or consequential damages) arising out of or in connection with such transaction. This clause shall also apply to any additional services opted for by the User by accessing any link from Nyakul site to avail of services related to the transaction of buy-sell conducted on the Nyakul Platform.
          Limitation of Liability
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES PROVIDED BY Nyakul ON OR THROUGH THE PLATFORM ARE PROVIDED AS IS, AS AVAILABLE AND WITH ALL FAULTS
          , AND Nyakul HEREBY EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, ANY WARRANTIES OF CONDITION, QUALITY, DURABILITY, PERFORMANCE, ACCURACY, RELIABILITY, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. 
          </Text>

          <Text style={{paddingTop: 20}}>
          ALL SUCH WARRANTIES, REPRESENTATIONS, CONDITIONS, AND UNDERTAKINGS ARE HEREBY EXCLUDED.
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, Nyakul MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE VALIDITY, ACCURACY, CORRECTNESS, RELIABILITY, QUALITY, STABILITY, COMPLETENESS OR CURRENTNESS OF ANY INFORMATION PROVIDED ON OR THROUGH THE PLATFORM; Nyakul DOES NOT REPRESENT OR WARRANT THAT THE MANUFACTURE, IMPORTATION, EXPORT, DISTRIBUTION, OFFER, DISPLAY, PURCHASE, SALE AND/OR USE OF PRODUCTS OR SERVICES OFFERED OR DISPLAYED ON THE PLATFORM DOES NOT VIOLATE ANY THIRD PARTY RIGHTS; AND Nyakul MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND CONCERNING ANY PRODUCT OR SERVICE OFFERED OR DISPLAYED ON THE PLATFORM.
          </Text>

          <Text style={{paddingTop: 20}}>
          Force Majeure
          Under no circumstances shall Nyakul be held liable for any delay or failure or disruption of the content or services delivered through the Platform resulting directly or indirectly from acts of nature, forces or causes beyond our reasonable control, including without limitation, Internet failures, computer, telecommunications or any other equipment failures, electrical power failures, strikes, labor disputes, riots, insurrections, civil disturbances, shortages of labor or materials, fires, flood, storms, explosions, acts of God, war, governmental actions, orders of domestic or foreign courts or tribunals or non-performance of third parties.
          Intellectual Property Rights
          Nyakul is the sole owner or lawful licensee of all the rights and interests in the Platform and the Platform Content. All title, ownership and intellectual property rights in the Platform and Platform Content shall remain with Nyakul or licensors of the Platform Content, as the case may be. 
          </Text>

          <Text style={{paddingTop: 20}}>
          All rights not otherwise claimed under the Terms or by Nyakul are hereby reserved.
          Nyakul and any other related icons and logos are registered trademarks or trademarks or service marks of Inogy Solutions Private Limited, in various jurisdictions and are protected under applicable copyright, trademark and other proprietary rights laws. The unauthorized copying, modification, use or publication of these marks is strictly prohibited.
          Notices
          All legal notices or demands to or upon Nyakul shall be made in writing and sent to Nyakul personally, by courier, certified mail, or facsimile to the following entity and address: Inogy Solutions Private Limited, House No.133, Pocket A-2, Sector-3, Rohini, Delhi-110085, Attn: Legal Department. 
          </Text>

          <Text style={{paddingTop: 20}}>
          The notices shall be effective when they are received by Nyakul in any of the above-mentioned manner.
          All legal notices or demands to or upon a User shall be effective if either delivered personally, sent by courier, certified mail, by facsimile or email to the last-known correspondence, fax or email address provided by the User to Nyakul, or by posting such notice or demand on an area of the Platform that is publicly accessible without a charge. Notice to a User shall be deemed to be received by such User if and when, a) Nyakul is able to demonstrate that communication, whether in physical or electronic form, has been sent to such User, or b) immediately upon Nyakul posting such notice on an area of the Platform that is publicly accessible without charge.
          General Provisions
          Subject to any terms & conditions, the Terms constitute the entire agreement between User and Nyakul with respect to and govern Users use of the Platform and Services, superseding any prior written or oral agreements in relation to the same subject matter herein.
          Nyakul and User are independent contractors, and no agency, partnership, joint venture, employee-employer relationship is intended or created by the Terms.
          </Text>

          <Text style={{paddingTop: 20}}>
          If any provision of the Terms is held to be invalid or unenforceable, such provision shall be deleted and the remaining provisions shall remain valid and be enforced.
          Nyakul’s failure to enforce any right or failure to act with respect to any breach by User under the Terms will not constitute a waiver of that right nor a waiver of Nyakuls right to act with respect to subsequent or similar breaches.
          </Text>

          <Text style={{paddingTop: 20}}>
          Nyakul shall have the right to assign the Terms (including all of our rights, titles, benefits, interests, and obligations and duties in the Terms to any person or entity (including any affiliates of Nyakul). User may not assign, in whole or part, the Terms to any person or entity.
          The Terms shall be governed by the laws of India and the parties to the Terms agree to submit to the exclusive jurisdiction of the courts of Delhi, India.
          Grievance Officer
          In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below: Anish Goel, contact@nyakul.com
          IP Infringement Policy
          Notice and Procedure for Making Claims of Right Infringements
          We respect third parties Intellectual Property Rights. 
          </Text>

          <Text style={{paddingTop: 20}}>
          If your rights are being infringed, you notify us by submitting the Notice Form attached to this policy
          Upon receipt of a Notice Form we may take certain actions, such as informing the users about the infringing content or removing information without any admission as to liability and without prejudice to any rights, remedies or defenses, all of which are expressly reserved. Furthermore, in submitting a Notice Form, you grant to Nyakul the right to use, reproduce, modify, adapt, publish, translate, create derivative works from, and display its content throughout the world in any media. This includes forwarding the Notice Form to the parties involved in the provision of the allegedly infringing content. You agree to indemnify Nyakul for all claims brought by a third party against Nyakul arising out of or in connection with the submission of a Notice Form.
          Note on Third Party User Listings: Please keep in mind that Third Party User listings are merely hosted on Nyakul and are posted solely by the Third Party Users who may be contacted via their User Information page, accessible from any of their listings.
          Important Warning: giving false, misleading or inaccurate information in the Notice Form to Nyakul may result in civil and/or criminal liability. You should contact a legal advisor should you have any questions.
          Notice Form
          If you believe that your rights are being violated by an information on the Nyakul, you may fill out and submit the Notice Form (below). 
          </Text>

          <Text style={{paddingTop: 20}}>
          This form needs to be signed can be sent via E-mail PDF to the Grievance Officer:
          </Text>

          <Text style={{paddingTop: 10}}>
          E-mail: contact@nyakul.com
          </Text>

          <Text style={{paddingTop: 10}}>
          Subject Line: Notice of Infringement
          </Text>

          <Text style={{paddingTop: 5}}>
          (We will accept a signed PDF via e-mail with the subject line Notice of Infringement).
          </Text>

          <Text style={{paddingTop: 5}}>
          Please fill out the Notice form using the corresponding numbered paragraphs to frame your communication.
          </Text>

          <Text style={{paddingTop: 5}}>
          Notice Form
          </Text>

           <Text style={{paddingTop: 5}}>
          I, [INSERT FULL NAME AND TITLE] of [COMPANY NAME, IF APPLICABLE], state as follows:
          </Text>

         <Text style={{paddingTop: 5}}>
          Contact information
          Your and/ or your companys name, address, telephone number and contact email address;
          The contact email address and/or name which we will provide to Third Party Sellers (if relevant) so they may contact you to resolve any issues regarding your notification to us. If you do not provide a separate contact email, you authorize us to use the contact information you provide in while registering at Nyakul.
          Listings details and Allegation of Infringed Right:
          </Text>

          <Text style={{paddingTop: 5}}>
          The listings URL and detailed description of the information that you claim is infringing your rights is located on Nyakul Platform; if regarding a Third Party User listing please also provide the name used to identify the User on the Platform.
          A description of your intellectual property right(s) that you claim has/have been infringed. 
          </Text>

          <Text style={{paddingTop: 5}}>
          Please provide the copy of Trademark Certificate / Copyright Registration Certificate / Patent Registration Certificate. [Please also provide as to how you have arrived in determining that third party Intellectual Property Rights have been infringed]
          </Text>

         <Text style={{paddingTop: 5}}>
          Include the following statement: I have a good faith belief that the portion of the listing(s) described above violate(s) the intellectual property rights owned by the intellectual property owner or its agent, nor is such use otherwise permissible under law. [Please provide a copy of authorization Certificate in favour of applicant]
          </Text>

          <Text style={{paddingTop: 5}}>
          Include the following statement: I represent that the information in this notification is true and correct and that I am the intellectual property owner or authorised to act on behalf of the intellectual property owner for the rights described above.
          </Text>

          <Text style={{paddingTop: 5, paddingBottom: 30}}>
          Sign the Notice Form.
        </Text>
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

export default TermsAndConditionsView;