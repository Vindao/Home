module.exports = {
  Navigation: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact Us',

    agb: 'AGB',
    impressum: 'Impressum'
  },

  Forms: {
    name: {
      label: 'Name',
      errors: { REQUIRED: 'Name is required', TOOLONG: 'Name must be less than 20 characters' }
    },
    email: {
      label: 'Email',
      errors: { REQUIRED: 'Email is required', INVALID: 'Please enter a valid Email' }
    },
    company: {
      label: 'Company',
      errors: { TOOLONG: 'The company name must be less than 20 characters' }
    },
    phone: {
      label: 'Phone',
      errors: { INVALID: 'Please enter a valid phone number' }
    },
    message: {
      label: 'Message',
      placeholder: 'Please give a short explanation of your request'
    },
    stepper: {
      send: 'Send message',
      info: 'General information'
    },
    acceptPrivacyPolicy: {
      start: `I have read and accept the terms and conditions of the `,
      link: 'privacy policy',
      end: `. I agree that my details and data for answering my inquiry will be collected and stored electronically.`,
      note: `Note: You can revoke your consent at any time by sending an email with your request to support@vindao.io.`
    },

    BTNS: {
      next: 'Next',
      back: 'Back',
      send: 'Send'
    }
  },
  errors: {
    login: {
      server: 'Oops... Something happened, please try again later',
      cred: 'These credentials are invalid'
    },
    register: {
      server: 'There was a problem with your registration. Please try again later.',

      password: {
        LOWER: 'Please use at least one lowercase letter',
        UPPER: 'Please use at least one uppercase letter',
        NUMBER: 'Please use at least one number',
        MINCHAR: 'The password must contain at least 8 characters'
      },
      confPassword: {
        INVALID: 'The passwords do not match'
      }
    },
    sendMessage: 'Oops, there was an error sending your message. Please try again later.'
  },
  Footer: {
    contactInfo: {
      email: 'contact@vindao.io',
      phone: '+49 1782838557',
      adress: {
        line1: 'Kolpingstr.',
        line2: '86504',
        line3: 'Merching',
        line4: 'Germany'
      }
    },
    Impressum: {
      label: 'Legal Disclosure',
      title: 'Impressum',
      html: `
      <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
      <p>Vincent Schmitt<br />
      Kolpingstraße, 24<br />
      86504 Merching</p>
      
      <h2>Contact</h2>
      <p>Phone: 01782838557<br />
      E-mail: support@vindao.io</p>
      
      <h2>EU dispute resolution</h2>
      <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br /> Our e-mail address can be found above in the site notice.</p>
      
      <h2>Dispute resolution proceedings in front of a consumer arbitration board</h2><p>We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.</p>
      
      <h3>Liability for Contents</h3> <p>As service providers, we are liable for own contents of these websites according to Paragraph 7, Sect. 1 German Telemedia Act (TMG). However, according to Paragraphs 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.</p> <p>Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</p> <h3>Liability for Links</h3> <p>Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.</p> <p>The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.</p> <h3>Copyright</h3> <p>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.<br /> The commercial use of our contents without permission of the originator is prohibited.</p> <p>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</p>
      
      `
    },
    Datenschutz: {
      label: 'Privacy Policy',
      title: 'Privacy Policy',
      html: `
      <p>We are very delighted that you have shown interest in our enterprise. Data protection is of a particularly high priority for the management of the Vindao. The use of the Internet pages of the Vindao is possible without any indication of personal data; however, if a data subject wants to use special enterprise services via our website, processing of personal data could become necessary. If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.</p>
      
      <p>The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the country-specific data protection regulations applicable to the Vindao. By means of this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled.</p>
      
      <p>As the controller, the Vindao has implemented numerous technical and organizational measures to ensure the most complete protection of personal data processed through this website. However, Internet-based data transmissions may in principle have security gaps, so absolute protection may not be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means, e.g. by telephone. </p>
      
      <h4>1. Definitions</h4>
      <p>The data protection declaration of the Vindao is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable for the general public, as well as our customers and business partners. To ensure this, we would like to first explain the terminology used.</p>
      
      <p>In this data protection declaration, we use, inter alia, the following terms:</p>
      
      <ul style="list-style: none">
      <li><h4>a)    Personal data</h4>
      <p>Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>
      </li>
      <li><h4>b) Data subject</h4>
      <p>Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.</p>
      </li>
      <li><h4>c)    Processing</h4>
      <p>Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction. </p>
      </li>
      <li><h4>d)    Restriction of processing</h4>
      <p>Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future. </p>
      </li>
      <li><h4>e)    Profiling</h4>
      <p>Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements. </p>
      </li>
      <li><h4>f)     Pseudonymisation</h4>
      <p>Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person. </p>
      </li>
      <li><h4>g)    Controller or controller responsible for the processing</h4>
      <p>Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law. </p>
      </li>
      <li><h4>h)    Processor</h4>
      <p>Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller. </p>
      </li>
      <li><h4>i)      Recipient</h4>
      <p>Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing. </p>
      </li>
      <li><h4>j)      Third party</h4>
      <p>Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data.</p>
      </li>
      <li><h4>k)    Consent</h4>
      <p>Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her. </p>
      </li>
      </ul>
      
      <h4>2. Name and Address of the controller</h4>
      <p>Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:
      
      </p>
      
      <p>Vindao</p>
      <p>Kolpingstraße 24</p>
      <p>86504 Merching</p>
      <p>Germany</p>
      <p>Phone: +4915170006343</p>
      <p>Email: contact@vindao.io</p>
      <p>Website: www.vindao.io</p>
      
      <h4>3. Cookies</h4>
      <p>The Internet pages of the Vindao use cookies. Cookies are text files that are stored in a computer system via an Internet browser.</p>
      
      <p>Many Internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet sites and servers to differentiate the individual browser of the dats subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID.</p>
      
      <p>Through the use of cookies, the Vindao can provide the users of this website with more user-friendly services that would not be possible without the cookie setting.</p>
      
      <p>By means of a cookie, the information and offers on our website can be optimized with the user in mind. Cookies allow us, as previously mentioned, to recognize our website users. The purpose of this recognition is to make it easier for users to utilize our website. The website user that uses cookies, e.g. does not have to enter access data each time the website is accessed, because this is taken over by the website, and the cookie is thus stored on the user's computer system. Another example is the cookie of a shopping cart in an online shop. The online store remembers the articles that a customer has placed in the virtual shopping cart via a cookie.</p>
      
      <p>The data subject may, at any time, prevent the setting of cookies through our website by means of a corresponding setting of the Internet browser used, and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our website may be entirely usable.</p>
      
      <h4>4. Collection of general data and information</h4>
      <p>The website of the Vindao collects a series of general data and information when a data subject or automated system calls up the website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.</p>
      
      <p>When using these general data and information, the Vindao does not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our website correctly, (2) optimize the content of our website as well as its advertisement, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, the Vindao analyzes anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our enterprise, and to ensure an optimal level of protection for the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.</p>
      
      <h4>5. Contact possibility via the website </h4>
      <p>The website of the Vindao contains information that enables a quick electronic contact to our enterprise, as well as direct communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.</p>
      
      <h4>6. Routine erasure and blocking of personal data</h4>
      <p>The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject to.</p>
      
      <p>If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data are routinely blocked or erased in accordance with legal requirements.</p>
      
      <h4>7. Rights of the data subject</h4>
      <ul style="list-style: none;">
      <li><h4>a) Right of confirmation</h4>
      <p>Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right of confirmation, he or she may, at any time, contact any employee of the controller.</p>
      </li>
      <li><h4>b) Right of access</h4>
      <p>Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations grant the data subject access to the following information:</p>
      
      <ul style="list-style: none;">
      <li>the purposes of the processing;</li>
      <li>the categories of personal data concerned;</li>
      <li>the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;</li>
      <li>where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;</li>
      <li>the existence of the right to request from the controller rectification or erasure of personal data, or restriction of processing of personal data concerning the data subject, or to object to such processing;</li>
      <li>the existence of the right to lodge a complaint with a supervisory authority;</li>
      <li>where the personal data are not collected from the data subject, any available information as to their source;</li>
      <li>the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for the data subject.</li>
      
      </ul>
      <p>Furthermore, the data subject shall have a right to obtain information as to whether personal data are transferred to a third country or to an international organisation. Where this is the case, the data subject shall have the right to be informed of the appropriate safeguards relating to the transfer.</p>
      
      <p>If a data subject wishes to avail himself of this right of access, he or she may, at any time, contact any employee of the controller.</p>
      </li>
      <li><h4>c) Right to rectification </h4>
      <p>Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.</p>
      
      <p>If a data subject wishes to exercise this right to rectification, he or she may, at any time, contact any employee of the controller.</p></li>
      <li>
      <h4>d) Right to erasure (Right to be forgotten) </h4>
      <p>Each data subject shall have the right granted by the European legislator to obtain from the controller the erasure of personal data concerning him or her without undue delay, and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies, as long as the processing is not necessary: </p>
      
      <ul style="list-style: none;">
      <li>The personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed.</li>
      <li>The data subject withdraws consent to which the processing is based according to point (a) of Article 6(1) of the GDPR, or point (a) of Article 9(2) of the GDPR, and where there is no other legal ground for the processing.</li>
      <li>The data subject objects to the processing pursuant to Article 21(1) of the GDPR and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2) of the GDPR. </li>
      <li>The personal data have been unlawfully processed.</li>
      <li>The personal data must be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.</li>
      <li>The personal data have been collected in relation to the offer of information society services referred to in Article 8(1) of the GDPR.</li>
      
      </ul>
      <p>If one of the aforementioned reasons applies, and a data subject wishes to request the erasure of personal data stored by the Vindao, he or she may, at any time, contact any employee of the controller. An employee of Vindao shall promptly ensure that the erasure request is complied with immediately.</p>
      
      <p>Where the controller has made personal data public and is obliged pursuant to Article 17(1) to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform other controllers processing the personal data that the data subject has requested erasure by such controllers of any links to, or copy or replication of, those personal data, as far as processing is not required. An employees of the Vindao will arrange the necessary measures in individual cases.</p>
      </li>
      <li><h4>e) Right of restriction of processing</h4>
      <p>Each data subject shall have the right granted by the European legislator to obtain from the controller restriction of processing where one of the following applies:</p>
      
      <ul style="list-style: none;">
      <li>The accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data. </li>
      <li>The processing is unlawful and the data subject opposes the erasure of the personal data and requests instead the restriction of their use instead.</li>
      <li>The controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims.</li>
      <li>The data subject has objected to processing pursuant to Article 21(1) of the GDPR pending the verification whether the legitimate grounds of the controller override those of the data subject.</li>
      
      </ul>
      <p>If one of the aforementioned conditions is met, and a data subject wishes to request the restriction of the processing of personal data stored by the Vindao, he or she may at any time contact any employee of the controller. The employee of the Vindao will arrange the restriction of the processing. </p>
      </li>
      <li><h4>f) Right to data portability</h4>
      <p>Each data subject shall have the right granted by the European legislator, to receive the personal data concerning him or her, which was provided to a controller, in a structured, commonly used and machine-readable format. He or she shall have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, as long as the processing is based on consent pursuant to point (a) of Article 6(1) of the GDPR or point (a) of Article 9(2) of the GDPR, or on a contract pursuant to point (b) of Article 6(1) of the GDPR, and the processing is carried out by automated means, as long as the processing is not necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.</p>
      
      <p>Furthermore, in exercising his or her right to data portability pursuant to Article 20(1) of the GDPR, the data subject shall have the right to have personal data transmitted directly from one controller to another, where technically feasible and when doing so does not adversely affect the rights and freedoms of others.</p>
      
      <p>In order to assert the right to data portability, the data subject may at any time contact any employee of the Vindao.</p>
      
      </li>
      <li>
      <h4>g) Right to object</h4>
      <p>Each data subject shall have the right granted by the European legislator to object, on grounds relating to his or her particular situation, at any time, to processing of personal data concerning him or her, which is based on point (e) or (f) of Article 6(1) of the GDPR. This also applies to profiling based on these provisions.</p>
      
      <p>The Vindao shall no longer process the personal data in the event of the objection, unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject, or for the establishment, exercise or defence of legal claims.</p>
      
      <p>If the Vindao processes personal data for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing. This applies to profiling to the extent that it is related to such direct marketing. If the data subject objects to the Vindao to the processing for direct marketing purposes, the Vindao will no longer process the personal data for these purposes.</p>
      
      <p>In addition, the data subject has the right, on grounds relating to his or her particular situation, to object to processing of personal data concerning him or her by the Vindao for scientific or historical research purposes, or for statistical purposes pursuant to Article 89(1) of the GDPR, unless the processing is necessary for the performance of a task carried out for reasons of public interest.</p>
      
      <p>In order to exercise the right to object, the data subject may contact any employee of the Vindao. In addition, the data subject is free in the context of the use of information society services, and notwithstanding Directive 2002/58/EC, to use his or her right to object by automated means using technical specifications.</p>
      </li>
      <li><h4>h) Automated individual decision-making, including profiling</h4>
      <p>Each data subject shall have the right granted by the European legislator not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her, or similarly significantly affects him or her, as long as the decision (1) is not is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) is not authorised by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, or (3) is not based on the data subject's explicit consent.</p>
      
      <p>If the decision (1) is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) it is based on the data subject's explicit consent, the Vindao shall implement suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and contest the decision.</p>
      
      <p>If the data subject wishes to exercise the rights concerning automated individual decision-making, he or she may, at any time, contact any employee of the Vindao.</p>
      
      </li>
      <li><h4>i) Right to withdraw data protection consent </h4>
      <p>Each data subject shall have the right granted by the European legislator to withdraw his or her consent to processing of his or her personal data at any time. </p>
      
      <p>If the data subject wishes to exercise the right to withdraw the consent, he or she may, at any time, contact any employee of the Vindao.</p>
      
      </li>
      </ul>
      <h4>8. Data protection provisions about the application and use of Facebook</h4>
      <p>On this website, the controller has integrated components of the enterprise Facebook. Facebook is a social network.</p>
      
      <p>A social network is a place for social meetings on the Internet, an online community, which usually allows users to communicate with each other and interact in a virtual space. A social network may serve as a platform for the exchange of opinions and experiences, or enable the Internet community to provide personal or business-related information. Facebook allows social network users to include the creation of private profiles, upload photos, and network through friend requests.</p>
      
      <p>The operating company of Facebook is Facebook, Inc., 1 Hacker Way, Menlo Park, CA 94025, United States. If a person lives outside of the United States or Canada, the controller is the Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.</p>
      
      <p>With each call-up to one of the individual pages of this Internet website, which is operated by the controller and into which a Facebook component (Facebook plug-ins) was integrated, the web browser on the information technology system of the data subject is automatically prompted to download display of the corresponding Facebook component from Facebook through the Facebook component. An overview of all the Facebook Plug-ins may be accessed under https://developers.facebook.com/docs/plugins/. During the course of this technical procedure, Facebook is made aware of what specific sub-site of our website was visited by the data subject.</p>
      
      <p>If the data subject is logged in at the same time on Facebook, Facebook detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-site of our Internet page was visited by the data subject. This information is collected through the Facebook component and associated with the respective Facebook account of the data subject. If the data subject clicks on one of the Facebook buttons integrated into our website, e.g. the "Like" button, or if the data subject submits a comment, then Facebook matches this information with the personal Facebook user account of the data subject and stores the personal data.</p>
      
      <p>Facebook always receives, through the Facebook component, information about a visit to our website by the data subject, whenever the data subject is logged in at the same time on Facebook during the time of the call-up to our website. This occurs regardless of whether the data subject clicks on the Facebook component or not. If such a transmission of information to Facebook is not desirable for the data subject, then he or she may prevent this by logging off from their Facebook account before a call-up to our website is made.</p>
      
      <p>The data protection guideline published by Facebook, which is available at https://facebook.com/about/privacy/, provides information about the collection, processing and use of personal data by Facebook. In addition, it is explained there what setting options Facebook offers to protect the privacy of the data subject. In addition, different configuration options are made available to allow the elimination of data transmission to Facebook. These applications may be used by the data subject to eliminate a data transmission to Facebook.</p>
      
      <h4>9. Data protection provisions about the application and use of Google Analytics (with anonymization function)</h4>
      <p>On this website, the controller has integrated the component of Google Analytics (with the anonymizer function). Google Analytics is a web analytics service. Web analytics is the collection, gathering, and analysis of data about the behavior of visitors to websites. A web analysis service collects, inter alia, data about the website from which a person has come (the so-called referrer), which sub-pages were visited, or how often and for what duration a sub-page was viewed. Web analytics are mainly used for the optimization of a website and in order to carry out a cost-benefit analysis of Internet advertising.</p>
      
      <p>The operator of the Google Analytics component is Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.</p>
      
      <p>For the web analytics through Google Analytics the controller uses the application "_gat. _anonymizeIp". By means of this application the IP address of the Internet connection of the data subject is abridged by Google and anonymised when accessing our websites from a Member State of the European Union or another Contracting State to the Agreement on the European Economic Area.</p>
      
      <p>The purpose of the Google Analytics component is to analyze the traffic on our website. Google uses the collected data and information, inter alia, to evaluate the use of our website and to provide online reports, which show the activities on our websites, and to provide other services concerning the use of our Internet site for us.</p>
      
      <p>Google Analytics places a cookie on the information technology system of the data subject. The definition of cookies is explained above. With the setting of the cookie, Google is enabled to analyze the use of our website. With each call-up to one of the individual pages of this Internet site, which is operated by the controller and into which a Google Analytics component was integrated, the Internet browser on the information technology system of the data subject will automatically submit data through the Google Analytics component for the purpose of online advertising and the settlement of commissions to Google. During the course of this technical procedure, the enterprise Google gains knowledge of personal information, such as the IP address of the data subject, which serves Google, inter alia, to understand the origin of visitors and clicks, and subsequently create commission settlements.</p>
      
      <p>The cookie is used to store personal information, such as the access time, the location from which the access was made, and the frequency of visits of our website by the data subject. With each visit to our Internet site, such personal data, including the IP address of the Internet access used by the data subject, will be transmitted to Google in the United States of America. These personal data are stored by Google in the United States of America. Google may pass these personal data collected through the technical procedure to third parties.
      
      </p>
      
      <p>The data subject may, as stated above, prevent the setting of cookies through our website at any time by means of a corresponding adjustment of the web browser used and thus permanently deny the setting of cookies. Such an adjustment to the Internet browser used would also prevent Google Analytics from setting a cookie on the information technology system of the data subject. In addition, cookies already in use by Google Analytics may be deleted at any time via a web browser or other software programs.</p>
      
      <p>In addition, the data subject has the possibility of objecting to a collection of data that are generated by Google Analytics, which is related to the use of this website, as well as the processing of this data by Google and the chance to preclude any such. For this purpose, the data subject must download a browser add-on under the link https://tools.google.com/dlpage/gaoptout and install it. This browser add-on tells Google Analytics through a JavaScript, that any data and information about the visits of Internet pages may not be transmitted to Google Analytics. The installation of the browser add-ons is considered an objection by Google. If the information technology system of the data subject is later deleted, formatted, or newly installed, then the data subject must reinstall the browser add-ons to disable Google Analytics. If the browser add-on was uninstalled by the data subject or any other person who is attributable to their sphere of competence, or is disabled, it is possible to execute the reinstallation or reactivation of the browser add-ons.</p>
      
      <p>Further information and the applicable data protection provisions of Google may be retrieved under https://www.google.com/intl/en/policies/privacy/ and under http://www.google.com/analytics/terms/us.html. Google Analytics is further explained under the following Link https://www.google.com/analytics/.</p>
      
      <h4>10. Data protection provisions about the application and use of Google+</h4>
      <p>On this website, the controller has integrated the Google+ button as a component. Google+ is a so-called social network. A social network is a social meeting place on the Internet, an online community, which usually allows users to communicate with each other and interact in a virtual space. A social network may serve as a platform for the exchange of opinions and experiences, or enable the Internet community to provide personal or business-related information. Google+ allows users of the social network to include the creation of private profiles, upload photos and network through friend requests.</p>
      
      <p>The operating company of Google+ is Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.</p>
      
      <p>With each call-up to one of the individual pages of this website, which is operated by the controller and on which a Google+ button has been integrated, the Internet browser on the information technology system of the data subject automatically downloads a display of the corresponding Google+ button of Google through the respective Google+ button component. During the course of this technical procedure, Google is made aware of what specific sub-page of our website was visited by the data subject. More detailed information about Google+ is available under https://developers.google.com/+/.</p>
      
      <p>If the data subject is logged in at the same time to Google+, Google recognizes with each call-up to our website by the data subject and for the entire duration of his or her stay on our Internet site, which specific sub-pages of our Internet page were visited by the data subject. This information is collected through the Google+ button and Google matches this with the respective Google+ account associated with the data subject.</p>
      
      <p>If the data subject clicks on the Google+ button integrated on our website and thus gives a Google+ 1 recommendation, then Google assigns this information to the personal Google+ user account of the data subject and stores the personal data. Google stores the Google+ 1 recommendation of the data subject, making it publicly available in accordance with the terms and conditions accepted by the data subject in this regard. Subsequently, a Google+ 1 recommendation given by the data subject on this website together with other personal data, such as the Google+ account name used by the data subject and the stored photo, is stored and processed on other Google services, such as search-engine results of the Google search engine, the Google account of the data subject or in other places, e.g. on Internet pages, or in relation to advertisements. Google is also able to link the visit to this website with other personal data stored on Google. Google further records this personal information with the purpose of improving or optimizing the various Google services.</p>
      
      <p>Through the Google+ button, Google receives information that the data subject visited our website, if the data subject at the time of the call-up to our website is logged in to Google+. This occurs regardless of whether the data subject clicks or doesn’t click on the Google+ button.</p>
      
      <p>If the data subject does not wish to transmit personal data to Google, he or she may prevent such transmission by logging out of his Google+ account before calling up our website.</p>
      
      <p>Further information and the data protection provisions of Google may be retrieved under https://www.google.com/intl/en/policies/privacy/. More references from Google about the Google+ 1 button may be obtained under https://developers.google.com/+/web/buttons-policy.</p>
      
      <h4>11. Data protection provisions about the application and use of Instagram</h4>
      <p>On this website, the controller has integrated components of the service Instagram. Instagram is a service that may be qualified as an audiovisual platform, which allows users to share photos and videos, as well as disseminate such data in other social networks.</p>
      
      <p>The operating company of the services offered by Instagram is Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland.</p>
      
      <p>With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which an Instagram component (Insta button) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to the download of a display of the corresponding Instagram component of Instagram. During the course of this technical procedure, Instagram becomes aware of what specific sub-page of our website was visited by the data subject.</p>
      
      <p>If the data subject is logged in at the same time on Instagram, Instagram detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This information is collected through the Instagram component and is associated with the respective Instagram account of the data subject. If the data subject clicks on one of the Instagram buttons integrated on our website, then Instagram matches this information with the personal Instagram user account of the data subject and stores the personal data.</p>
      
      <p>Instagram receives information via the Instagram component that the data subject has visited our website provided that the data subject is logged in at Instagram at the time of the call to our website. This occurs regardless of whether the person clicks on the Instagram button or not. If such a transmission of information to Instagram is not desirable for the data subject, then he or she can prevent this by logging off from their Instagram account before a call-up to our website is made.</p>
      
      <p>Further information and the applicable data protection provisions of Instagram may be retrieved under https://help.instagram.com/155833707900388 and https://www.instagram.com/about/legal/privacy/.</p>
      
      <h4>12. Data protection provisions about the application and use of LinkedIn</h4>
      <p>The controller has integrated components of the LinkedIn Corporation on this website. LinkedIn is a web-based social network that enables users with existing business contacts to connect and to make new business contacts. Over 400 million registered people in more than 200 countries use LinkedIn. Thus, LinkedIn is currently the largest platform for business contacts and one of the most visited websites in the world.</p>
      
      <p>The operating company of LinkedIn is LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, UNITED STATES. For privacy matters outside of the UNITED STATES LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, is responsible.</p>
      
      <p>With each call-up to one of the individual pages of this Internet site, which is operated by the controller and on which a LinkedIn component (LinkedIn plug-in) was integrated, the Internet browser on the information technology system of the data subject is automatically prompted to the download of a display of the corresponding LinkedIn component of LinkedIn. Further information about the LinkedIn plug-in may be accessed under https://developer.linkedin.com/plugins. During the course of this technical procedure, LinkedIn gains knowledge of what specific sub-page of our website was visited by the data subject.</p>
      
      <p>If the data subject is logged in at the same time on LinkedIn, LinkedIn detects with every call-up to our website by the data subject—and for the entire duration of their stay on our Internet site—which specific sub-page of our Internet page was visited by the data subject. This information is collected through the LinkedIn component and associated with the respective LinkedIn account of the data subject. If the data subject clicks on one of the LinkedIn buttons integrated on our website, then LinkedIn assigns this information to the personal LinkedIn user account of the data subject and stores the personal data.</p>
      
      <p>LinkedIn receives information via the LinkedIn component that the data subject has visited our website, provided that the data subject is logged in at LinkedIn at the time of the call-up to our website. This occurs regardless of whether the person clicks on the LinkedIn button or not. If such a transmission of information to LinkedIn is not desirable for the data subject, then he or she may prevent this by logging off from their LinkedIn account before a call-up to our website is made.</p>
      
      <p>LinkedIn provides under https://www.linkedin.com/psettings/guest-controls the possibility to unsubscribe from e-mail messages, SMS messages and targeted ads, as well as the ability to manage ad settings. LinkedIn also uses affiliates such as Eire, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua, and Lotame. The setting of such cookies may be denied under https://www.linkedin.com/legal/cookie-policy. The applicable privacy policy for LinkedIn is available under https://www.linkedin.com/legal/privacy-policy. The LinkedIn Cookie Policy is available under https://www.linkedin.com/legal/cookie-policy.</p>
      
      <h4>13. Legal basis for the processing </h4>
      <p>Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent for a specific processing purpose. If the processing of personal data is necessary for the performance of a contract to which the data subject is party, as is the case, for example, when processing operations are necessary for the supply of goods or to provide any other service, the processing is based on Article 6(1) lit. b GDPR. The same applies to such processing operations which are necessary for carrying out pre-contractual measures, for example in the case of inquiries concerning our products or services. Is our company subject to a legal obligation by which processing of personal data is required, such as for the fulfillment of tax obligations, the processing is based on Art. 6(1) lit. c GDPR.
      In rare cases, the processing of personal data may be necessary to protect the vital interests of the data subject or of another natural person. This would be the case, for example, if a visitor were injured in our company and his name, age, health insurance data or other vital information would have to be passed on to a doctor, hospital or other third party. Then the processing would be based on Art. 6(1) lit. d GDPR.
      Finally, processing operations could be based on Article 6(1) lit. f GDPR. This legal basis is used for processing operations which are not covered by any of the abovementioned legal grounds, if processing is necessary for the purposes of the legitimate interests pursued by our company or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data. Such processing operations are particularly permissible because they have been specifically mentioned by the European legislator. He considered that a legitimate interest could be assumed if the data subject is a client of the controller (Recital 47 Sentence 2 GDPR).
      </p>
      
      <h4>14. The legitimate interests pursued by the controller or by a third party</h4>
      <p>Where the processing of personal data is based on Article 6(1) lit. f GDPR our legitimate interest is to carry out our business in favor of the well-being of all our employees and the shareholders.</p>
      
      <h4>15. Period for which the personal data will be stored</h4>
      <p>The criteria used to determine the period of storage of personal data is the respective statutory retention period. After expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of the contract or the initiation of a contract.</p>
      
      <h4>16. Provision of personal data as statutory or contractual requirement; Requirement necessary to enter into a contract; Obligation of the data subject to provide the personal data; possible consequences of failure to provide such data </h4>
      <p>We clarify that the provision of personal data is partly required by law (e.g. tax regulations) or can also result from contractual provisions (e.g. information on the contractual partner).
      
      Sometimes it may be necessary to conclude a contract that the data subject provides us with personal data, which must subsequently be processed by us. The data subject is, for example, obliged to provide us with personal data when our company signs a contract with him or her. The non-provision of the personal data would have the consequence that the contract with the data subject could not be concluded.
      
      Before personal data is provided by the data subject, the data subject must contact any employee. The employee clarifies to the data subject whether the provision of the personal data is required by law or contract or is necessary for the conclusion of the contract, whether there is an obligation to provide the personal data and the consequences of non-provision of the personal data.
      </p>
      
      <h4>17. Existence of automated decision-making</h4>
      <p>As a responsible company, we do not use automatic decision-making or profiling.</p>
      
      <p>This Privacy Policy has been generated by the Privacy Policy Generator of the <a href="https://dg-datenschutz.de/?lang=en">German Association for Data Protection</a> that was developed in cooperation with  <a href="https://www.wbs-law.de/eng/practice-areas/internet-law/it-law/">Privacy Lawyers</a> from WILDE BEUGER SOLMECKE, Cologne.
      </p>
      
      `
    }
  },
  Home: {
    Slogan: 'Creating the next generation of apps',
    paragraph:
      'We are specialized in the creation of progressive web apps. These applications are distributed via the browser, while offering all conveniences of modern native applications.',
    bgImage: {
      alt: 'A greenish background'
    },
    seeMore: 'See more'
  },
  Services: {
    Hero: {
      title: 'Progressive web applications the next generation of Apps',
      text: `Progressive web applications (PWA’s) are apps that are distributed via the browser. In contrast to traditional native-applications, PWA’s run on any operating system. Therefore, they are as accessible as any website, while still offering all conveniences of native applications (See below). In short they are native applications distributed via the web.`
    },
    Cards: [
      {
        id: 1,
        title: 'One application for all devices',
        text: `Because PWA’s are based on modern web technologies, they are accessible via any device that can access a website. This offers great advantages over traditional apps which are distributed via an operating systems intern app-store, because the app is more widely accessible and behaves very consistent between devices. This consistency helps users to seamlessly switch between there devices and creates a pleasurable user-experience. 
        Sure the application has to visually change when displayed on a smartphone screen or a 8k TV, but because it is based on the same code-base the app will still feel and behave very similar .
        Furthermore the development of a single application is not as costly and time intensive as creating one application for every operating system. For a standard application it is reasonable to expect about 60 – 80% of the cost of creating an app for the android and ios app-store. And the resulting application will not only run on your android and ios devices, but will also cover all the desktop systems, and even modern smart-tv’s or any browser capable device in this regard.`,
        image: {
          alt: 'All the different devices',
          name: 'responsive.png'
        }
      },
      {
        id: 2,
        title: 'Installable',
        text: `A PWA can be installed on your smartphone, laptop, desktop-pc, and even some smart TV’s, by just one click. After the installation the app will behave like any other native app on your operating system. For instance, you will be able to access the application on your smartphone via the homescreen. On your PC the application can be launched with the standard application launcher of your operating system.`,
        image: {
          alt: 'Someone using an app',
          name: 'ehr.jpg'
        }
      },
      {
        id: 3,
        title: 'Offline capable',
        text: `Through intelligent caching techniques, our applications are fully offline capable. Meaning that most feature of the application can be completely accessed offline. However, features that do rely on a connection to the network, such as sending messages, creating accounts etc., are stored and will be triggered as soon as a network connection is available. This offers high reliability especially for mobile users, because the speed and functioning of the application is not dependent on the network connection.`,
        image: {
          alt: 'An car at a remote beach',
          name: 'horizon.jpg'
        }
      },

      {
        id: 4,
        title: 'Fast',
        text: `Applications that naturally live on the web, are easily accessible by a huge audience. In contrast to traditional applications which are distributed via the operating-systems private app-store, PWA’s have a much shorter time to initial interaction. From the point of entering the URL in your browser, it should usually take seconds at most to interact with the application. Whereas the procedure of installing a native app from an app-store takes much longer and does involve a lot more steps than just entering an URL or click a link. 
        Besides fast initial interactions, our applications also offer fast continuous interactions. By utilizing modern web technologies, our applications will be as fast as any native app. And in some occasions also exceed the performance of native applications. For applications that highly rely on fast and complex computations, there also is an opportunity of utilizing webassembly modules. Those modules are capable of extremely fast computations, only limited by the devices internal hardware. `,
        image: {
          alt: "Eine Tafel mit der Aufschrift: 'The next step'",
          name: 'freerider.jpg'
        }
      },
      {
        id: 5,
        title: 'Discoverability',
        text: `Besides fast initial interaction times, the distribution via the world-wide-web also helps people to discover the application. PWA’s can be easily linked to, from anywhere. They can simply show up as search results in any search engine, or be referred to from anywhere. This creates a much easier marketing, and eases the way for people to use the app.`,
        image: {
          alt: "Eine Tafel mit der Aufschrift: 'The next step'",
          name: 'discover.jpg'
        }
      },
      {
        id: 6,
        title: 'Integrated',
        text: `PWA’s integrate with all operating systems and devices. By offering great accessibility to all users, this also comes with some challenges. Different devices are capable of different features. For example, most devices nowadays are equipped with a camera, but there still are some that aren’t. Our applications will utilize modern technologies to detect those capabilities and react accordingly if some feature is not available on a given device.`,
        image: {
          alt: "Eine Tafel mit der Aufschrift: 'The next step'",
          name: 'integrated.jpg'
        }
      }
    ]
  },
  About: {
    hero: {
      title: 'Collaborative development',
      paragraph: `We offer professional application development services. Our applications not only meet the industry standards, but go far beyond your expectations. By utilizing internal motivations we are able to create awesome products, while maintaining a pleasurable working experiences for all participants. Through modern communication we are able to guarantee amazing results, and offer high customization even during the development process. Our goal is to create a collaborative working environment instead of ticking of tasks from a list. We belief in the power of individuals who are incentivized to create good work instead of working off their hours. Therefore we’ve created a unique payment system for our collaborators. This system is based on actual value rather than hours and is backed by a secret evaluation system, which creates an equal chance for everyone while encouraging fairness. 
      All of those efforts are made to create the best possible product for your business and a pleasurable collaboration between our businesses.`
    },
    technologies: {
      title: 'Technologies',
      technologies: [
        {
          id: 1,
          title: 'JavaScript',
          text:
            'Javascript is the most used language in modern web development, and will be needed for almost every web based projects.',
          link: 'https://de.wikipedia.org/wiki/JavaScript',
          icon: 'JavaScript.svg'
        },
        {
          id: 2,
          title: 'NodeJS',
          text:
            'In most cases, we will use NodeJS with express for the Back-End as it facilitates interactions with Front-End Javascript Frameworks.',
          link: 'https://nodejs.org',
          icon: 'NodeJS.svg'
        },
        {
          id: 3,
          title: 'React',
          text:
            'React is the Front-End Framework We are most efficient in. We use it for almost all medium to large size Projects.',
          link: 'https://reactjs.org',
          icon: 'React.svg'
        },
        {
          id: 4,
          title: 'Vue',
          text: 'Vue is a great alternative to React, especially for smaller projects.',
          link: 'https://vuejs.org',
          icon: 'Vue.svg'
        },
        {
          id: 5,
          title: 'Typescript',
          text:
            'We use Typescript in all our projects, because it will prevent bugs in so many cases.',
          link: 'https://www.typescriptlang.org',
          icon: 'Typescript.svg'
        },
        {
          id: 6,
          title: 'HTML5',
          text:
            'Modern HTML is a must-have for state-of-the-art websites and can not be neglected for SEO.',
          link: 'https://de.wikipedia.org/wiki/HTML5',
          icon: 'HTML5.svg'
        },
        {
          id: 7,
          title: 'CSS3',
          text: 'Modern CSS is a core-skill for almost every web developer.',
          link: 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets',
          icon: 'CSS3.svg'
        },
        {
          id: 8,
          title: 'MongoDB',
          text:
            'MongoDB is the most used non-relational Database. We use it for almost all projects.',
          link: 'https://www.mongodb.com',
          icon: 'MongoDB.svg'
        },
        {
          id: 9,
          title: 'Netlify',
          text:
            'Netlify is an awesome host for client-side applications and besides great hosting it offers an awesome developer experience, which enables us to put more time in the actual creation of the app',
          link: 'https://www.netlify.com',
          icon: 'Netlify.svg'
        }
      ]
    }
  }
};
