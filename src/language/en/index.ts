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
      label: 'Your Message'
    },
    stepper: {
      send: 'Send message',
      info: 'General information'
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
    Slogan: 'Creating the next generation of apps'
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
        title: 'One application for all your devices',
        text: `Progressive web applications are a new technology which bring native-like
        applicationsto the web. It is a game changer because it enables us to create integrated applications
        for all devices with one single codebase.`,
        image: '~/assets/images/responsive.png'
      },

      {
        id: 2,

        title: 'Offline capable',
        text: `Through intelligent caching techniques, our applications are fully
        offline capable. Therefore you will never have a slow experience because of a
        bad internet connection. After the initial load, a PWA will always load
        instantly.`,
        image: '~/assets/images/horizon.jpg'
      },
      {
        id: 3,

        title: 'Installable',
        text: `Like any native application, a PWA can be installed to your system by
        just one click. After installation the application will be available like all
        other applications on your device. For instance, you can access the
        application via you homescreen on your smartphone, or the application launcher
        on your laptop or desktop PC.`,
        image: '~/assets/images/ehr.svg'
      },
      {
        id: 4,

        title: 'Consistent',
        text: `Because progressive web applications are based on a single code-base,
        they are highly consistent across devices. Users can seemlessly switch between
        devices, and the application will still work and feel almost the same. Sure,
        there are differences between a mobile screen and the 4K monitor you use on
        your desktop PC, and the application has to visually change between those
        devices. But because PWA's are based on a single code-base the application
        will have a consistent feel across those devices.`,
        image: '~/assets/images/board.jpg'
      }
      // Discoverable: {
      //   id: 5,

      //   title: 'Discoverable',
      //   text: `In contrast to native applictaions, which are only discoverable through the operating-systems intern app-store, PWA's are distributed via the web.
      //   This offers a lot of opportunities. Such as easily finding the application via major search engines, linking to the applictaion from any website ... .
      //   `,
      //   img:
      //     'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto/v1588126230/Vindao%20Home/outlook-2208932_bpfalg'
      // },
      // Fire: {
      //   id: 6,
      //   title: 'Fast, Integrated, Reliable, and Engaging',
      //   text: `Through background processing, and intelligent caching techniques, our applications are as fast as any native app installed on your phone or desktop.
      //   Progressive web applications can be perfectly integrated with any hardware. If a feature is not available on a given device, the application is able to detect that and react accordingly.
      //   Reliability is a huge factor, especially in mobile applications, because a fast internet connection is not always available. Through the rich caching techniques, PWA's completely work offline. Therefore slow internet connections will not slow down the application.
      //   Because of the seamless integration of PWA's with the operating system, users stay much more engaged.`,
      //   img:
      //     'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto/v1588126230/Vindao%20Home/freerider-498473_ktpzmh'
      // },
      // Interaction: {
      //   id: 7,

      //   title: 'Faster initial interaction',
      //   text: `Because of their web-based nature, you can interact with an PWA much faster than with traditional native applications.
      //   It is as easy as opening a URL in your favorite browser.
      //   However, PWA's are also called hybrid apps, because they can be accessed through the browser, but if you want you can always install it natively.`,
      //   img:
      //     'https://res.cloudinary.com/dhrg3xz0y/image/upload/f_auto/v1588126230/Vindao%20Home/spaceman-4160023_zng5oa'
      // }
    ]
  }
};
