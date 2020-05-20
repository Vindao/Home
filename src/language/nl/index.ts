export default {
  Navigation: {
    home: 'Home',
    about: 'Over ons',
    services: 'Diensten',
    contact: 'Contact',

    agb: 'AGB',
    impressum: 'Impressum'
  },

  Forms: {
    name: {
      label: 'Naam',
      errors: {
        REQUIRED: 'De naam is verplicht',
        TOOLONG: 'De naam mag niet meer dan 20 tokens bevatten'
      }
    },
    email: {
      label: 'Email',
      errors: {
        REQUIRED: 'De email is verplicht',
        INVALID: 'Gebruik een valide email, alstublieft'
      }
    },
    company: {
      label: 'Bedrijf',
      errors: { TOOLONG: 'De bedrijf mag niet meer dan 20 tokens bevatten' }
    },
    phone: {
      label: 'Telefoon',
      errors: { INVALID: 'Gebruik een valide telefoonnummer, alstublieft' }
    },
    message: {
      label: 'U bericht'
    },
    stepper: {
      send: 'Bericht zenden',
      info: 'Algemene informatie'
    },
    BTNS: {
      next: 'Verder',
      back: 'Terug',
      send: 'Zenden'
    }
  },
  errors: {
    login: {
      server: 'Oops... Er was een probleem met de server. Probeer het later opnieuw.',
      cred: 'Deze combinatie van email en wachtwoord is ons niet bekend'
    },
    register: {
      server: 'Er was een probleem met U registrering. Probeer het later opnieuw.',
      name: {
        REQUIRED: 'De Naam is vereist'
      },
      email: {
        INVALID: 'Gebruik een valide email alsteblieft'
      },
      company: {
        NOSPACES: 'De Bedrijf mag geen spaties bevatten'
      },
      phone: {
        INVALID: 'Gebruik een valide nummer slteblieft'
      },
      password: {
        LOWER: 'De wachtwoord moet ten minst een kleine letter bevatten',
        UPPER: 'De wachtwoord moet tenminst een hooftletter bevatten',
        NUMBER: 'De wachtwoord moet tenminst een nummer bevatten',
        MINCHAR: 'De wachtwoord moet tenminst 8 tekenen lang zijn'
      },
      confPassword: {
        INVALID: 'De wachtwoorden komen niet overeen'
      }
    }
  },
  Footer: {
    contactInfo: {
      email: 'contact@vindao.io',
      phone: '+49 1782838557',
      adress: {
        line1: 'Kolpingstr.',
        line2: '86504',
        line3: 'Merching',
        line4: 'Duitsland'
      }
    }
  },
  Home: {
    Slogan: 'De volgende generatie van hybride applicaties',
    paragraph:
      "Wir haben uns in der Entwicklung von hybriden Applikationen spezialisiert. Hybride Applikation basieren auf dem Grundgedanken dass sie auf allen herkömmlichen Betriebssystemen laufen. Das hat unter anderem den Vorteil dass diese Applikationen auf allen Geräten der gleichen 'CodeBase' unterliegen, und deshalb ein sehr Konstantes Nutzererlebnis kreiert.",
    bgImage: {
      alt: 'Een groene achtergrond'
    },
    seeMore: 'Meer ontdekken'
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
          src: require('../../assets/images/responsive.png?resize'),
          placeholder: require('../../assets/images/responsive.png?lqip')
        }
      },
      {
        id: 2,
        title: 'Installable',
        text: `A PWA can be installed on your smartphone, laptop, desktop-pc, and even some smart TV’s, by just one click. After the installation the app will behave like any other native app on your operating system. For instance, you will be able to access the application on your smartphone via the homescreen. On your PC the application can be launched with the standard application launcher of your operating system.`,
        image: {
          alt: 'Someone using an app',
          src: require('../../assets/images/ehr.jpg?resize'),
          placeholder: require('../../assets/images/ehr.jpg?lqip')
        }
      },
      {
        id: 3,
        title: 'Offline capable',
        text: `Through intelligent caching techniques, our applications are fully offline capable. Meaning that most feature of the application can be completely accessed offline. However, features that do rely on a connection to the network, such as sending messages, creating accounts etc., are stored and will be triggered as soon as a network connection is available. This offers high reliability especially for mobile users, because the speed and functioning of the application is not dependent on the network connection.`,
        image: {
          alt: 'An car at a remote beach',
          src: require('../../assets/images/horizon.jpg?resize'),
          placeholder: require('../../assets/images/horizon.jpg?lqip')
        }
      },

      {
        id: 4,
        title: 'Fast',
        text: `Applications that naturally live on the web, are easily accessible by a huge audience. In contrast to traditional applications which are distributed via the operating-systems private app-store, PWA’s have a much shorter time to initial interaction. From the point of entering the URL in your browser, it should usually take seconds at most to interact with the application. Whereas the procedure of installing a native app from an app-store takes much longer and does involve a lot more steps than just entering an URL or click a link. 
        Besides fast initial interactions, our applications also offer fast continuous interactions. By utilizing modern web technologies, our applications will be as fast as any native app. And in some occasions also exceed the performance of native applications. For applications that highly rely on fast and complex computations, there also is an opportunity of utilizing webassembly modules. Those modules are capable of extremely fast computations, only limited by the devices internal hardware. `,
        image: {
          alt: "Eine Tafel mit der Aufschrift: 'The next step'",
          src: require('../../assets/images/freerider.jpg?resize'),
          placeholder: require('../../assets/images/freerider.jpg?lqip')
        }
      },
      {
        id: 5,
        title: 'Discoverability',
        text: `Besides fast initial interaction times, the distribution via the world-wide-web also helps people to discover the application. PWA’s can be easily linked to, from anywhere. They can simply show up as search results in any search engine, or be referred to from anywhere. This creates a much easier marketing, and eases the way for people to use the app.`,
        image: {
          alt: "Eine Tafel mit der Aufschrift: 'The next step'",
          src: require('../../assets/images/discover.jpg?resize'),
          placeholder: require('../../assets/images/discover.jpg?lqip')
        }
      },
      {
        id: 6,
        title: 'Integrated',
        text: `PWA’s integrate with all operating systems and devices. By offering great accessibility to all users, this also comes with some challenges. Different devices are capable of different features. For example, most devices nowadays are equipped with a camera, but there still are some that aren’t. Our applications will utilize modern technologies to detect those capabilities and react accordingly if some feature is not available on a given device.`,
        image: {
          alt: "Eine Tafel mit der Aufschrift: 'The next step'",
          src: require('../../assets/images/integrated.jpg?resize'),
          placeholder: require('../../assets/images/integrated.jpg?lqip')
        }
      }
      // {
      //   id: 1,
      //   title: 'Een app voor alle apparaten',
      //   text: `Progressive-web-apps zijn een nieuwe technologie, die het mogelijk maken
      //   applikaties voor alle apparaten via de web beschijkbaar te maken. Dat is een
      //   "Gamechanger" omdat we nu applicaties voor al U apparaten via éen "Codebase"
      //   kunnen creeren.`,
      //   image: {
      //     alt: 'All de verschillenden apperaten',
      //     src: require('../../assets/images/responsive.png?resize'),
      //     placeholder: require('../../assets/images/responsive.png?lqip')
      //   }
      // },
      // {
      //   id: 2,
      //   title: 'Ook offline',
      //   text: `Met de hulp can intelligenten caching techniques kunnen wij de app
      //   helemaal offline toegankelijk maken. Dat heeft de voordeel, dat U niet bent
      //   afhankelijk van een werkende internet verbinding. Wat het werken met de
      //   applicatie vooral op de mobile apperaten sterk verbeterd.`,
      //   image: {
      //     alt: 'Een Auto-wrak aan de strand',
      //     src: require('../../assets/images/horizon.jpg?resize'),
      //     placeholder: require('../../assets/images/horizon.jpg?lqip')
      //   }
      // },
      // {
      //   id: 3,

      //   title: 'Installeerbaar',
      //   text: `Een progressive web applikatie kan hoe iedere gewoone app op U apperaat
      //   woorden geinstalleerd. Naar de installatie is de Applikatie via de normaale
      //   weg berijkbaar. Bijvoorbeeld kan de app op U mobile apperaten via de
      //   Homescreen woorden berijkt.`,
      //   image: {
      //     alt: 'Iemand gebruikt een app',
      //     src: require('../../assets/images/ehr.jpg?resize'),
      //     placeholder: require('../../assets/images/ehr.jpg?lqip')
      //   }
      // },
      // {
      //   id: 4,

      //   title: 'Consistent',
      //   text: `Omdat progressive-web-applicaties op allen apperaten de zelfde code
      //   gebruiken, zijn ze ook van de opbouw heel gelijk tussen U apperaten. Dat maakt
      //   het wisselen van U telefoon naar de computer heel makelijk. Natuurlijk gaan de
      //   applikaties een andere layout hebben als U die op de telefoon of U 4k
      //   computerscherm opened, maar de functionaliteid en design graat altijd
      //   consistent blijven.`,
      //   image: {
      //     alt: "Een schoolboard met de opschift: 'The next step'",
      //     src: require('../../assets/images/board.jpg?resize'),
      //     placeholder: require('../../assets/images/board.jpg?lqip')
      //   }
      // }
    ]
  },
  About: {
    Hero: {
      title: 'Collaborative development',
      paragraph: `We offer professional application development services. Our applications not only meet the industry standards, but go far beyond your expectations. By utilizing internal motivations we are able to create awesome products, while maintaining a pleasurable working experiences for all participants. Through modern communication we are able to guarantee amazing results, and offer high customization even during the development process. Our goal is to create a collaborative working environment instead of ticking of tasks from a list. We belief in the power of individuals who are incentivized to create good work instead of working off their hours. Therefore we’ve created a unique payment system for our collaborators. This system is based on actual value rather than hours and is backed by a secret evaluation system, which creates an equal chance for everyone while encouraging fairness. 
      All of those efforts are made to create the best possible product for your business and a pleasurable collaboration between our businesses.`
    }
  }
};
