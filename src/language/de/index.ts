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
    },
    seeMore: 'Mehr entdecken'
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
      //   title: 'Eine App für alle Endgeräte',
      //   text: `Progressive-web-applikationen sind eine neue Technologie, die es
      //   möglich macht Applikationen für alle Endgeräte über den Browser bereit zu
      //   stellen. Das ist ein großer Schritt, da nun Applikationen für alle Geräte auf
      //   der Basis von einer CodeBase kreiert werden können.`,
      //   image: {
      //     alt: 'all the different devices',
      //     src: require('../../assets/images/responsive.png?resize'),
      //     placeholder: require('../../assets/images/responsive.png?lqip')
      //   }
      // },
      // {
      //   id: 2,

      //   title: 'Funktioniert Offline',
      //   text: `Mit Hilfe von intelligenten caching Techniken sind wir in der Lage die
      //   Applikationen komplett offline zur verfügung zu stellen. Das hat den Vorteil,
      //   dass sie nach dem ersten laden beziehungsweise installieren der Applikation,
      //   nicht mehr auf eine funktionierende Internetverbindung angewiesen sind. Das
      //   macht das benutzen der App vorallem auf dem Mobilen Endgerät um einiges
      //   angenehmer.`,
      //   image: {
      //     alt: 'A car at a remote area',
      //     src: require('../../assets/images/horizon.jpg?resize'),
      //     placeholder: require('../../assets/images/horizon.jpg?sqip')
      //   }
      // },
      // {
      //   id: 3,

      //   title: 'Installierbar',
      //   text: `Eine progressive-web-applikation kann wie jede herkümmliche Applikation
      //   auf ihrem Endgerät installiert werden. Nach der Installation ist diese über
      //   den Applikationslauncher ihres Geräts verfügbar. Zum beispiel können sie die
      //   App auf ihrem Smartphone über den Homescreen erreichen.`,
      //   image: {
      //     alt: 'Someone using an App',
      //     src: require('../../assets/images/ehr.jpg?resize'),
      //     placeholder: require('../../assets/images/ehr.jpg?sqip')
      //   }
      // },
      // {
      //   id: 4,
      //   title: 'Konsistent',
      //   text: `Da progressive-web-applikationen für alle Geräte auf dem gleichen Code
      //   basieren sind diese zwischen den Geräten sehr  ähnlich aufgebaut. Dies macht
      //   das benutzen der Applikation auf unterschiedlichen Geräten einfacher.
      //   Natürlich müssen die Applikationen eine teilweise andere Darstellung haben
      //   wenn sie sie auf ihrem 4k Computerbildschirm öffnen als wenn sie sie auf einem
      //   smartphone öffnen. Jedoch ist eine Kosistenz des Designs und der
      //   Funktionsweise immer gegeben.`,
      //   image: {
      //     alt: "A blackboard with 'The next step' written on it",
      //     src: require('../../assets/images/board.jpg?resize'),
      //     placeholder: require('../../assets/images/board.jpg?sqip')
      //   }
      // }
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
            'Javascript ist die meist benutzte Sprache in moderner web entwicklung, und wird bei nahezu jedem web-projekt gebraucht.',
          link: 'https://de.wikipedia.org/wiki/JavaScript',
          icon: require('../../assets/icons/JavaScript.svg')
        },
        {
          id: 2,
          title: 'NodeJS',
          text:
            'In der Regel benutzen wir ein NodeJS Back-End, da es die Interaction mit Front-End Javascript Frameworks vereinfacht.',
          link: 'https://nodejs.org',
          icon: require('../../assets/icons/NodeJS.svg')
        },
        {
          id: 3,
          title: 'React',
          text:
            'React ist das Front-End Framework mit dem wir am effizientesten arbeiten. Wir benutzen es für fast jedes Projekt was etwas mehr Complexität beinhaltet.',
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
            'Wir benutzen Typescript in all unseren Projekten, da es dem entstehen von Bugs enorm vorbeugt.',
          link: 'https://www.typescriptlang.org',
          icon: require('../../assets/icons/Typescript.svg')
        },
        {
          id: 6,
          title: 'HTML5',
          text:
            'Modernes HTML ist ein Muss für aktuelle Webseiten und kann nicht vernachlässigt werden.',
          link: 'https://de.wikipedia.org/wiki/HTML5',
          icon: require('../../assets/icons/HTML5.svg')
        },
        {
          id: 7,
          title: 'CSS3',
          text: 'Modernes CSS ist eine Basisfähigkeit von jedem web-developer.',
          link: 'https://de.wikipedia.org/wiki/Cascading_Style_Sheets',
          icon: require('../../assets/icons/CSS3.svg')
        },
        {
          id: 8,
          title: 'MongoDB',
          text:
            'MongoDB ist die meist benutzte non-relational Datenbank. Wir benutzen sie für fast alle unsere Projekte.',
          link: 'https://www.mongodb.com',
          icon: require('../../assets/icons/MongoDB.svg')
        },
        {
          id: 9,
          title: 'Netlify',
          text:
            'Netlify ist ein super host für moderne applicationen. Neben unglaublich schnellen servern stellt Netlify sehr viele Tools für uns Entwickler bereit. Dadurch haben wir mehr Zeit für die Entwicklung ihrer Applikation.',
          link: 'https://www.netlify.com',
          icon: require('../../assets/icons/Netlify.svg')
        }
      ]
    }
  }
};
