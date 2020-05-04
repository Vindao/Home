export default {
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
      errors: { REQUIRED: 'Name is required', TOOLONG: 'Name must be less than 10 characters' }
    },
    email: {
      label: 'Email',
      errors: { REQUIRED: 'Email is required', INVALID: 'Please enter a valid Email' }
    },
    company: {
      label: 'Company',
      errors: { TOOLONG: 'Name must be less than 10 characters' }
    },
    phone: {
      label: 'Phone',
      errors: { INVALID: 'Please enter a valid phone number' }
    },
    message: {
      label: 'Message'
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
    }
  },
  Home: {
    Slogans: ['We create modern user interfaces to make your business stand out']
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
