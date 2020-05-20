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
          icon: require('../../assets/icons/JavaScript.svg')
        },
        {
          id: 2,
          title: 'NodeJS',
          text:
            'In most cases, we will use NodeJS with express for the Back-End as it facilitates interactions with Front-End Javascript Frameworks.',
          link: 'https://nodejs.org',
          icon: require('../../assets/icons/NodeJS.svg')
        },
        {
          id: 3,
          title: 'React',
          text:
            'React is the Front-End Framework We are most efficient in. We use it for almost all medium to large size Projects.',
          link: 'https://reactjs.org',
          icon: require('../../assets/icons/React.svg')
        },
        {
          id: 4,
          title: 'Vue',
          text: 'Vue is a great alternative to React, especially for smaller projects.',
          link: 'https://vuejs.org',
          icon: require('../../assets/icons/Vue.svg')
        },
        {
          id: 5,
          title: 'Typescript',
          text:
            'We use Typescript in all our projects, because it will prevent bugs in so many cases.',
          link: 'https://www.typescriptlang.org',
          icon: require('../../assets/icons/Typescript.svg')
        },
        {
          id: 6,
          title: 'HTML5',
          text:
            'Modern HTML is a must-have for state-of-the-art websites and can not be neglected for SEO.',
          link: 'https://de.wikipedia.org/wiki/HTML5',
          icon: require('../../assets/icons/HTML5.svg')
        },
        {
          id: 7,
          title: 'CSS3',
          text: 'Modern CSS is a core-skill for almost every web developer.',
          link: 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets',
          icon: require('../../assets/icons/CSS3.svg')
        },
        {
          id: 8,
          title: 'MongoDB',
          text:
            'MongoDB is the most used non-relational Database. We use it for almost all projects.',
          link: 'https://www.mongodb.com',
          icon: require('../../assets/icons/MongoDB.svg')
        },
        {
          id: 9,
          title: 'Netlify',
          text:
            'Netlify is an awesome host for client-side applications and besides great hosting it offers an awesome developer experience, which enables us to put more time in the actual creation of the app',
          link: 'https://www.netlify.com',
          icon: require('../../assets/icons/Netlify.svg')
        }
      ]
    }
  }
};
