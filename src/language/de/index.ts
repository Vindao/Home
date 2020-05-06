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
  Home: {
    Slogan: "Die nächste Generation der hybriden App's"
  },
  Services: {
    Hero: {
      title: 'Progressive web Applikationen, sind die nächste Generation von Hybriden Apps',
      text: `Wir sind spezialisiert in der Kreation von hybriden Applikationen. Durch moderne Web Technologien ist es uns möglich Applikationen zu entwickeln, die sich anfühlen wie alle bekannten Applikationen auf ihren unterschiedlichen Endgeräten. Jedoch können sie über den Browser auf sie zugreifen und müssen sie nicht installieren. Eine Installation ist jedoch trotzdem einfach möglich.`
    }
  }
};
