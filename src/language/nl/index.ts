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
  Home: {
    Slogan: 'De volgende generatie van hybride applicaties'
  },
  Services: {
    Hero: {
      title: 'Progressive web applications, the next generation of applications',
      text: `We are specialized in the creation of progressive web applications (PWA's). 
      By utilizing modern web technologies, PWA's feel and function like a native app, but are distributed via the web. 
      Therefore they are as accessible as any website, while still offering all the features and conveniences like native applications. 
      `
    }
  }
};
