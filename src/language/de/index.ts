export default {
  Navigation: {
    home: 'Home',
    about: 'Über uns',
    services: 'Leistungen',
    contact: 'Kontakt',
    agb: 'AGB',
    impressum: 'Impressum'
  },

  Forms: {
    name: {
      label: 'Name',
      errors: {
        REQUIRED: 'Sie müssen einen Namen angeben',
        TOOLONG: 'Der Name darf nicht mehr als 20 Zeichen enthalten'
      }
    },
    email: {
      label: 'Email',
      errors: {
        REQUIRED: 'Sie müssen eine Emailadresse angeben',
        INVALID: 'Bitte benutzen sie eine gültige Emailadresse'
      }
    },
    company: {
      label: 'Firma',
      errors: { TOOLONG: 'Der Firmenname darf nicht mehr als 20 Zeichen enthalten' }
    },
    phone: {
      label: 'Telefon',
      errors: { INVALID: 'Bitte benutzen sie eine gültige Telefonnummer' }
    },
    message: {
      label: 'Ihre Nachricht'
    },
    stepper: {
      send: 'Nachricht senden',
      info: 'Generelle Informationen'
    },
    BTNS: {
      next: 'Weiter',
      back: 'Zurück',
      send: 'Senden'
    }
  },
  errors: {
    login: {
      server: 'Leider ist ein Fehler aufgetreten. Bitte versuchen sie es später erneut.',
      cred: 'Diese Zugangsdaten sind uns nicht bekannt.'
    },
    register: {
      server:
        'Es gab ein problem mit ihrer Registrierung. Bitte versuchen sie es später noch einmal.',
      name: {
        REQUIRED: 'Ein Name ist erforderlich.'
      },
      email: {
        INVALID: 'Bitte benutzen sie eine gültige Emailadresse'
      },
      company: {
        NOSPACES: 'Die Firma darf keine Leerzeichen enthalten'
      },
      phone: {
        INVALID: 'Bitte benutzen sie eine gültige Telefonnummer'
      },
      password: {
        LOWER: 'Benutzen sie mindestens einen Kleinbuchstaben',
        UPPER: 'Benutzen sie mindestens einen Großbuchstaben',
        NUMBER: 'Benutzen sie mindestens eine Zahl',
        MINCHAR: 'Das Passwort muss mindestens 8 Zeichen lang sein'
      },
      confPassword: {
        INVALID: 'Die Passwörter stimmen nicht überein'
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
        line4: 'Deutschland'
      }
    }
  },
  Home: {
    Slogan: "Die nächste Generation hybrider App's",
    paragraph:
      "Wir haben uns in der Entwicklung von hybriden Applikationen spezialisiert. Hybride Applikation basieren auf dem Grundgedanken dass sie auf allen herkömmlichen Betriebssystemen laufen. Das hat unter anderem den Vorteil dass diese Applikationen auf allen Geräten der gleichen 'CodeBase' unterliegen, und deshalb ein sehr Konstantes Nutzererlebnis kreieren.",
    bgImage: {
      alt: 'Ein einfacher grüner Hintergrund'
    }
  },
  Services: {
    Hero: {
      title: 'Progressive web Applikationen, sind die nächste Generation von Hybriden Apps',
      text: `Wir sind spezialisiert in der Kreation von hybriden Applikationen. Durch moderne Web Technologien ist es uns möglich Applikationen zu entwickeln, die sich anfühlen wie alle bekannten Applikationen auf ihren unterschiedlichen Endgeräten. Jedoch können sie über den Browser auf sie zugreifen und müssen sie nicht installieren. Eine Installation ist jedoch trotzdem einfach möglich.`
    },
    Cards: [
      {
        id: 1,
        title: 'Eine App für alle Endgeräte',
        text: `Progressive-web-applikationen sind eine neue Technologie, die es
        möglich macht Applikationen für alle Endgeräte über den Browser bereit zu
        stellen. Das ist ein großer Schritt, da nun Applikationen für alle Geräte auf
        der Basis von einer CodeBase kreiert werden können.`,
        image: {
          alt: 'all the different devices',
          src: require('../../assets/images/responsive.png?resize'),
          placeholder: require('../../assets/images/responsive.png?lqip')
        }
      },
      {
        id: 2,

        title: 'Funktioniert Offline',
        text: `Mit Hilfe von intelligenten caching Techniken sind wir in der Lage die
        Applikationen komplett offline zur verfügung zu stellen. Das hat den Vorteil,
        dass sie nach dem ersten laden beziehungsweise installieren der Applikation,
        nicht mehr auf eine funktionierende Internetverbindung angewiesen sind. Das
        macht das benutzen der App vorallem auf dem Mobilen Endgerät um einiges
        angenehmer.`,
        image: {
          alt: 'A car at a remote area',
          src: require('../../assets/images/horizon.jpg?resize'),
          placeholder: require('../../assets/images/horizon.jpg?sqip')
        }
      },
      {
        id: 3,

        title: 'Installierbar',
        text: `Eine progressive-web-applikation kann wie jede herkümmliche Applikation
        auf ihrem Endgerät installiert werden. Nach der Installation ist diese über
        den Applikationslauncher ihres Geräts verfügbar. Zum beispiel können sie die
        App auf ihrem Smartphone über den Homescreen erreichen.`,
        image: {
          alt: 'Someone using an App',
          src: require('../../assets/images/ehr.jpg?resize'),
          placeholder: require('../../assets/images/ehr.jpg?sqip')
        }
      },
      {
        id: 4,
        title: 'Konsistent',
        text: `Da progressive-web-applikationen für alle Geräte auf dem gleichen Code
        basieren sind diese zwischen den Geräten sehr  ähnlich aufgebaut. Dies macht
        das benutzen der Applikation auf unterschiedlichen Geräten einfacher.
        Natürlich müssen die Applikationen eine teilweise andere Darstellung haben
        wenn sie sie auf ihrem 4k Computerbildschirm öffnen als wenn sie sie auf einem
        smartphone öffnen. Jedoch ist eine Kosistenz des Designs und der
        Funktionsweise immer gegeben.`,
        image: {
          alt: "A blackboard with 'The next step' written on it",
          src: require('../../assets/images/board.jpg?resize'),
          placeholder: require('../../assets/images/board.jpg?sqip')
        }
      }
    ]
  }
};
