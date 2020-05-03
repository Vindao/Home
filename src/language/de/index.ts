export default {
  Navigation: {
    home: 'Home',
    about: 'Über uns',
    services: 'Leistungen',
    contact: 'Kontakt',
    agb: 'AGB',
    impressum: 'Impressum'
  },
  Home: {
    Slogans: ['Wir kreieren moderne Applikationen für ihr Unternehmen']
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
      server:
        'Leider ist ein Fehler aufgetreten. Bitte versuchen sie es später erneut.',
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
  }
};
