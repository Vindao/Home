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
    email: 'Email',
    password: 'Passwort',
    SignUp: {
      name: 'Name',
      company: 'Firma',
      phone: 'Telefon',
      confPass: 'Passwort Bestätigung'
    },
    BTNS: {
      login: 'Anmelden',
      next: 'Weiter',

      register: 'Registrieren'
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
    Slogans: ['Wir kreieren moderne Applikationen für ihr Unternehmen']
  },
  Services: {
    Hero: {
      title: 'Progressive web Applikationen, sind die nächste Generation von Hybriden Apps',
      text: `Wir sind spezialisiert in der Kreation von hybriden Applikationen. Durch moderne Web Technologien ist es uns möglich Applikationen zu entwickeln, die sich anfühlen wie alle bekannten Applikationen auf ihren unterschiedlichen Endgeräten. Jedoch können sie über den Browser auf sie zugreifen und müssen sie nicht installieren. Eine Installation ist jedoch trotzdem einfach möglich.`
    }
  }
};
