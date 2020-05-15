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
    }
  },
  Services: {
    Hero: {
      title: 'Progressive web applications, the next generation of applications',
      text: `We are specialized in the creation of progressive web applications (PWA's). 
      By utilizing modern web technologies, PWA's feel and function like a native app, but are distributed via the web. 
      Therefore they are as accessible as any website, while still offering all the features and conveniences like native applications. 
      `
    },
    Cards: [
      {
        id: 1,
        title: 'Een app voor alle apparaten',
        text: `Progressive-web-apps zijn een nieuwe technologie, die het mogelijk maken
        applikaties voor alle apparaten via de web beschijkbaar te maken. Dat is een
        "Gamechanger" omdat we nu applicaties voor al U apparaten via éen "Codebase"
        kunnen creeren.`,
        image: {
          alt: 'All de verschillenden apperaten',
          src: require('../../assets/images/responsive.png?resize'),
          placeholder: require('../../assets/images/responsive.png?lqip')
        }
      },
      {
        id: 2,
        title: 'Ook offline',
        text: `Met de hulp can intelligenten caching techniques kunnen wij de app
        helemaal offline toegankelijk maken. Dat heeft de voordeel, dat U niet bent
        afhankelijk van een werkende internet verbinding. Wat het werken met de
        applicatie vooral op de mobile apperaten sterk verbeterd.`,
        image: {
          alt: 'Een Auto-wrak aan de strand',
          src: require('../../assets/images/horizon.jpg?resize'),
          placeholder: require('../../assets/images/horizon.jpg?lqip')
        }
      },
      {
        id: 3,

        title: 'Installeerbaar',
        text: `Een progressive web applikatie kan hoe iedere gewoone app op U apperaat
        woorden geinstalleerd. Naar de installatie is de Applikatie via de normaale
        weg berijkbaar. Bijvoorbeeld kan de app op U mobile apperaten via de
        Homescreen woorden berijkt.`,
        image: {
          alt: 'Iemand gebruikt een app',
          src: require('../../assets/images/ehr.jpg?resize'),
          placeholder: require('../../assets/images/ehr.jpg?lqip')
        }
      },
      {
        id: 4,

        title: 'Consistent',
        text: `Omdat progressive-web-applicaties op allen apperaten de zelfde code
        gebruiken, zijn ze ook van de opbouw heel gelijk tussen U apperaten. Dat maakt
        het wisselen van U telefoon naar de computer heel makelijk. Natuurlijk gaan de
        applikaties een andere layout hebben als U die op de telefoon of U 4k
        computerscherm opened, maar de functionaliteid en design graat altijd
        consistent blijven.`,
        image: {
          alt: "Een schoolboard met de opschift: 'The next step'",
          src: require('../../assets/images/board.jpg?resize'),
          placeholder: require('../../assets/images/board.jpg?lqip')
        }
      }
    ]
  }
};
