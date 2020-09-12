import * as lp from '../models/learning-path';

const next: lp.ChildLearningPath = {
  priority: lp.Priority.gold,
  label: 'Next',
  videoUrl: '',
  children: {},
  associations: ['react'],
};
const nuxt: lp.ChildLearningPath = {
  priority: lp.Priority.gold,
  label: 'Nuxt',
  videoUrl: '',
  children: {},
  associations: ['vue'],
};

const frontend: lp.RootLearningPath = {
  priority: lp.Priority.platinum,
  label: 'Front-end',
  videoUrl: '',
  children: {
    internet: {
      priority: lp.Priority.platinum,
      color: 'darkSlateGrey',
      label: 'Internet',
      children: {
        internet101: {
          priority: lp.Priority.gold,
          label: 'Internet 101',
          videoUrl: '',
          children: {},
        },
        http: {
          priority: lp.Priority.gold,
          label: 'HTTP',
          videoUrl: '',
          children: {},
        },

        browsers: {
          priority: lp.Priority.gold,
          label: 'Browsers',
          videoUrl: '',
          children: {},
        },
        dns: {
          priority: lp.Priority.gold,
          label: 'DNS',
          videoUrl: '',
          children: {},
        },

        hosting: {
          priority: lp.Priority.gold,
          label: 'hosting',
          videoUrl: '',
          children: {},
        },
      },
    },
    html: {
      priority: lp.Priority.platinum,
      color: 'orangeRed',
      label: 'HTML',
      videoUrl: '',
      children: {
        basics: {
          priority: lp.Priority.gold,
          label: 'Basics',
          videoUrl: '',
          children: {},
        },

        semanticHtml: {
          priority: lp.Priority.gold,
          label: 'Semantic HTML',
          videoUrl: '',
          children: {},
        },
        formsAndValidation: {
          priority: lp.Priority.gold,
          label: 'Forms and Validation',
          videoUrl: '',
          children: {},
        },
        bestPractices: {
          priority: lp.Priority.gold,
          label: 'Best Practices',
          videoUrl: '',
          children: {},
        },
        seo: {
          priority: lp.Priority.gold,
          label: 'SEO',
          videoUrl: '',
          children: {},
        },
      },
    },
    css: {
      priority: lp.Priority.platinum,
      color: 'mediumBlue',
      label: 'CSS',
      videoUrl: '',
      children: {
        basics: {
          priority: lp.Priority.gold,
          label: 'Basics',
          videoUrl: '',
          children: {},
        },
        buildingLayouts: {
          priority: lp.Priority.gold,
          label: 'Building Layouts',
          videoUrl: '',
          children: {
            floats: {
              priority: lp.Priority.gold,
              label: 'Floats',
              videoUrl: '',
              children: {},
            },
            positioning: {
              priority: lp.Priority.gold,
              label: 'Positioning',
              videoUrl: '',
              children: {},
            },
            display: {
              priority: lp.Priority.gold,
              label: 'Display',
              videoUrl: '',
              children: {},
            },
            boxModel: {
              priority: lp.Priority.gold,
              label: 'Box Model',
              videoUrl: '',
              children: {},
            },
            cssGrid: {
              priority: lp.Priority.gold,
              label: 'CSS Grid',
              videoUrl: '',
              children: {},
            },
            flexBox: {
              priority: lp.Priority.gold,
              label: 'Flex Box',
              videoUrl: '',
              children: {},
            },
          },
        },
        responsiveDesign: {
          priority: lp.Priority.gold,
          label: 'Responsive Design',
          videoUrl: '',
          children: {},
        },
      },
    },
    javaScript: {
      priority: lp.Priority.platinum,
      color: 'yellow',
      label: 'JavaScript',
      videoUrl: '',
      children: {
        basics: {
          priority: lp.Priority.gold,
          label: 'Basics',
          videoUrl: '',
          children: {},
        },
        dom: {
          priority: lp.Priority.gold,
          label: 'DOM',
          videoUrl: '',
          children: {},
        },

        dataFetching: {
          priority: lp.Priority.gold,
          label: 'Data Fetching',
          videoUrl: '',
          children: {
            ajax: {
              priority: lp.Priority.gold,
              label: 'AJAX',
              videoUrl: '',
              children: {},
            },
            fetchApi: {
              priority: lp.Priority.gold,
              label: 'Fetch API',
              videoUrl: '',
              children: {},
            },
          },
        },
        es6: {
          priority: lp.Priority.gold,
          label: 'ES6',
          videoUrl: '',
          children: {
            es6Modules: {
              priority: lp.Priority.gold,
              label: 'ES6 Modules',
              videoUrl: '',
              children: {},
            },
            arrayMethods: {
              priority: lp.Priority.gold,
              label: 'Array Methods',
              videoUrl: '',
              children: {},
            },
            variableDeclaration: {
              priority: lp.Priority.gold,
              label: 'Variable Declaration',
              videoUrl: '',
              children: {},
            },
            promises: {
              priority: lp.Priority.gold,
              label: 'Promises',
              videoUrl: '',
              children: {},
            },
            templateLiterals: {
              priority: lp.Priority.gold,
              label: 'Template Literals',
              videoUrl: '',
              children: {},
            },
            restAndSpread: {
              priority: lp.Priority.gold,
              label: 'Rest and Spread',
              videoUrl: '',
              children: {},
            },
            destructuring: {
              priority: lp.Priority.gold,
              label: 'Destructuring',
              videoUrl: '',
              children: {},
            },
          },
        },
      },
    },
    versionControl: {
      priority: lp.Priority.platinum,
      color: 'tomato',
      label: 'Version Control',
      videoUrl: '',
      children: {
        git: {
          priority: lp.Priority.platinum,
          label: 'Git',
          videoUrl: '',
          children: {},
        },
        remoteRepositories: {
          priority: lp.Priority.gold,
          label: 'Remote Repositories',
          videoUrl: '',
          children: {
            github: {
              priority: lp.Priority.platinum,
              label: 'Github',
              videoUrl: '',
              children: {},
            },
            gitLab: {
              priority: lp.Priority.bronze,
              label: 'GitLab',
              videoUrl: '',
              children: {},
            },
            bitbucket: {
              priority: lp.Priority.bronze,
              label: 'Bitbucket',
              videoUrl: '',
              children: {},
            },
          },
        },
      },
    },
    webSecurity: {
      priority: lp.Priority.platinum,
      color: 'steelBlue',
      label: 'Web Security',
      videoUrl: '',
      children: {
        https: {
          priority: lp.Priority.gold,
          label: 'Https',
          videoUrl: '',
          children: {},
        },
        cors: {
          priority: lp.Priority.gold,
          label: 'CORS',
          videoUrl: '',
          children: {},
        },
        contentSecurityPolicy: {
          priority: lp.Priority.gold,
          label: 'Content Security Policy ',
          videoUrl: '',
          children: {},
        },
        owaspSecurityRisks: {
          priority: lp.Priority.gold,
          label: 'OWASP Security Risks',
          videoUrl: '',
          children: {},
        },
      },
    },
    packageManagers: {
      priority: lp.Priority.platinum,
      color: 'firebrick',
      label: 'Package Managers',
      videoUrl: '',
      children: {
        npm: {
          priority: lp.Priority.platinum,
          label: 'NPM',
          videoUrl: '',
          children: {},
        },
        yarn: {
          priority: lp.Priority.gold,
          label: 'Yarn',
          videoUrl: '',
          children: {},
        },
      },
    },
    cssArchitecture: {
      priority: lp.Priority.gold,
      color: 'midnightBlue',
      label: 'CSS Architecture',
      videoUrl: '',
      children: {
        bem: {
          priority: lp.Priority.gold,
          label: 'BEM',
          videoUrl: '',
          children: {},
        },
      },
    },
    cssPreprocessors: {
      priority: lp.Priority.gold,
      color: 'navy',
      label: 'CSS Preprocessors',
      videoUrl: '',
      children: {
        sass: {
          priority: lp.Priority.gold,
          label: 'Sass',
          videoUrl: '',
          children: {},
        },
        less: {
          priority: lp.Priority.bronze,
          label: 'Less',
          videoUrl: '',
          children: {},
        },
      },
    },
    buildTools: {
      priority: lp.Priority.platinum,
      color: 'powderBlue',
      label: 'Build Tools',
      videoUrl: '',
      children: {
        linters: {
          priority: lp.Priority.gold,
          label: 'Linters',
          videoUrl: '',
          children: {
            eslint: {
              priority: lp.Priority.gold,
              label: 'Eslint',
              videoUrl: '',
              children: {},
            },
          },
        },
        formatters: {
          priority: lp.Priority.gold,
          label: 'Code Formatters',
          videoUrl: '',
          children: {
            prettier: {
              priority: lp.Priority.gold,
              label: 'Prettier',
              videoUrl: '',
              children: {},
            },
          },
        },
        taskRunners: {
          priority: lp.Priority.gold,
          label: 'Task Runners',
          videoUrl: '',
          children: {
            npmScripts: {
              priority: lp.Priority.gold,
              label: 'NPM Scripts',
              videoUrl: '',
              children: {},
            },
            gulp: {
              priority: lp.Priority.bronze,
              label: 'Gulp',
              videoUrl: '',
              children: {},
            },
          },
        },
        moduleBundlers: {
          priority: lp.Priority.gold,
          label: 'Module Bundlers',
          videoUrl: '',
          children: {
            webpack: {
              priority: lp.Priority.gold,
              label: 'Webpack',
              videoUrl: '',
              children: {},
            },
            rollup: {
              priority: lp.Priority.silver,
              label: 'Rollup',
              videoUrl: '',
              children: {},
            },
            parcel: {
              priority: lp.Priority.silver,
              label: 'Parcel',
              videoUrl: '',
              children: {},
            },
          },
        },
      },
    },
    frameworks: {
      priority: lp.Priority.platinum,
      color: 'cyan',
      label: 'frameworks',
      videoUrl: '',
      children: {
        react: {
          priority: lp.Priority.platinum,
          label: 'React',
          videoUrl: '',
          children: {
            redux: {
              priority: lp.Priority.gold,
              label: 'Redux',
              videoUrl: '',
              children: {},
            },
            mobX: {
              priority: lp.Priority.gold,
              label: 'MobX',
              videoUrl: '',
              children: {},
            },
          },
        },
        angular: {
          priority: lp.Priority.gold,
          label: 'Angular',
          videoUrl: '',
          children: {
            rxjs: {
              priority: lp.Priority.gold,
              label: 'RxJS',
              videoUrl: '',
              children: {},
            },
            ngrx: {
              priority: lp.Priority.gold,
              label: 'NgRX',
              videoUrl: '',
              children: {},
            },
          },
        },
        vue: {
          priority: lp.Priority.gold,
          label: 'Vue',
          videoUrl: '',
          children: {
            vueX: {
              priority: lp.Priority.gold,
              label: 'VueX',
              videoUrl: '',
              children: {},
            },
          },
        },
      },
    },
    cssInJs: {
      priority: lp.Priority.platinum,
      color: 'limeGreen',
      label: 'CSS in JS',
      videoUrl: '',
      children: {
        styledComponents: {
          priority: lp.Priority.gold,
          label: 'Styled Components',
          videoUrl: '',
          children: {},
        },
        cssModules: {
          priority: lp.Priority.gold,
          label: 'CSS Modules',
          videoUrl: '',
          children: {},
        },
        emotion: {
          priority: lp.Priority.gold,
          label: 'Emotion',
          videoUrl: '',
          children: {},
        },
        jss: {
          priority: lp.Priority.gold,
          label: 'JSS',
          videoUrl: '',
          children: {},
        },
      },
    },
    webComponents: {
      priority: lp.Priority.gold,
      color: 'darkOrange',
      label: 'Web Components',
      videoUrl: '',
      children: {
        htmlTemplates: {
          priority: lp.Priority.gold,
          label: 'HTML Templates',
          videoUrl: '',
          children: {},
        },
        customElements: {
          priority: lp.Priority.gold,
          label: 'Custom Elements',
          videoUrl: '',
          children: {},
        },
      },
    },
    componentLibraries: {
      priority: lp.Priority.platinum,
      color: 'deepSykBlue',
      label: 'Component Libraries',
      videoUrl: '',
      children: {
        materialUi: {
          priority: lp.Priority.gold,
          label: 'Material UI',
          videoUrl: '',
          children: {},
        },
        antDesign: {
          priority: lp.Priority.gold,
          label: 'Ant Design',
          videoUrl: '',
          children: {},
        },
        grommet: {
          priority: lp.Priority.gold,
          label: 'Grommet',
          videoUrl: '',
          children: {},
        },
        reactBootstrap: {
          priority: lp.Priority.gold,
          label: 'React Bootstrap',
          videoUrl: '',
          children: {},
        },
        reactstrap: {
          priority: lp.Priority.gold,
          label: 'Reactstrap',
          videoUrl: '',
          children: {},
        },
      },
    },
    cssLibraries: {
      priority: lp.Priority.gold,
      color: 'rebeccaPurple',
      label: 'CSS Libraries',
      videoUrl: '',
      children: {
        bootstrap: {
          priority: lp.Priority.gold,
          label: 'Bootstrap',
          videoUrl: '',
          children: {},
        },
      },
    },
    testing: {
      priority: lp.Priority.platinum,
      color: 'green',
      label: 'Testing',
      videoUrl: '',
      children: {
        jest: {
          priority: lp.Priority.platinum,
          label: 'Jest',
          videoUrl: '',
          children: {},
        },
        testingLibrary: {
          priority: lp.Priority.platinum,
          label: 'Testing Library',
          videoUrl: '',
          children: {},
        },
        cypress: {
          priority: lp.Priority.platinum,
          label: 'Cypress',
          videoUrl: '',
          children: {},
        },
        cucumber: {
          priority: lp.Priority.gold,
          label: 'Cucumber',
          videoUrl: '',
          children: {},
        },
        mochaAndChai: {
          priority: lp.Priority.bronze,
          label: 'Mocha And Chai',
          videoUrl: '',
          children: {},
        },
      },
    },
    typeCheckers: {
      priority: lp.Priority.platinum,
      color: 'royalBlue',
      label: 'Type Checkers',
      videoUrl: '',
      children: {
        typeScript: {
          priority: lp.Priority.gold,
          label: 'TypeScript',
          videoUrl: '',
          children: {},
        },
      },
    },
    progressiveWebApps: {
      priority: lp.Priority.platinum,
      color: 'indigo',
      label: 'Progressive Web Apps',
      videoUrl: '',
      children: {
        serviceWorkers: {
          priority: lp.Priority.platinum,
          label: 'Service Workers',
          videoUrl: '',
          children: {},
        },
        manifest: {
          priority: lp.Priority.platinum,
          label: 'Manifest',
          videoUrl: '',
          children: {},
        },
        pushNotifications: {
          priority: lp.Priority.gold,
          label: 'Push Notifications',
          videoUrl: '',
          children: {},
        },
        deviceApis: {
          priority: lp.Priority.gold,
          label: "Device API's",
          videoUrl: '',
          children: {},
        },
        prplPattern: {
          priority: lp.Priority.gold,
          label: 'PRPL Pattern',
          videoUrl: '',
          children: {},
        },
      },
    },
    lighthouse: {
      priority: lp.Priority.platinum,
      color: 'orange',
      label: 'LightHouse',
      videoUrl: '',
      children: {},
    },
    performanceOptimization: {
      priority: lp.Priority.platinum,
      color: 'hotPink',
      label: 'Performance Optimization',
      videoUrl: '',
      children: {},
    },
    websockets: {
      priority: lp.Priority.gold,
      color: 'black',
      label: 'Websockets',
      videoUrl: '',
      children: {},
    },
    analytics: {
      priority: lp.Priority.platinum,
      color: 'orchid',
      label: 'Analytics',
      videoUrl: '',
      children: {
        googleAnalytics: {
          priority: lp.Priority.gold,
          label: 'Google Analytics',
          videoUrl: '',
          children: {},
        },
        mixPanel: {
          priority: lp.Priority.gold,
          label: 'Mix Panel',
          videoUrl: '',
          children: {},
        },
      },
    },
    serverSideRendering: {
      priority: lp.Priority.gold,
      color: 'dimGrey',
      label: 'Server Side Rendering',
      videoUrl: '',
      children: {
        next,
        angularUniversal: {
          priority: lp.Priority.gold,
          label: 'Angular Universal',
          videoUrl: '',
          children: {},
          associations: ['angular'],
        },
        nuxt,
      },
    },
    graphql: {
      priority: lp.Priority.gold,
      color: 'deepPink',
      label: 'GraphQL',
      videoUrl: '',
      children: {
        apollo: {
          priority: lp.Priority.gold,
          label: 'Apollo',
          videoUrl: '',
          children: {},
        },
        relay: {
          priority: lp.Priority.silver,
          label: 'Relay',
          videoUrl: '',
          children: {},
        },
      },
    },
    staticSiteGenerators: {
      priority: lp.Priority.gold,
      color: 'purple',
      label: 'staticSiteGenerators',
      videoUrl: '',
      children: {
        next,
        gatsby: {
          priority: lp.Priority.gold,
          label: 'Gatsby',
          videoUrl: '',
          children: {},
        },
        nuxt,
        jekyll: {
          priority: lp.Priority.bronze,
          label: 'Jekyll',
          videoUrl: '',
          children: {},
        },
        huge: {
          priority: lp.Priority.bronze,
          label: 'Hugo',
          videoUrl: '',
          children: {},
        },
      },
    },
    mobileApps: {
      priority: lp.Priority.gold,
      color: 'turquoise',
      label: 'Mobile Apps',
      videoUrl: '',
      children: {
        reactNative: {
          priority: lp.Priority.gold,
          label: 'React Native',
          videoUrl: '',
          children: {},
        },
        flutter: {
          priority: lp.Priority.silver,
          label: 'flutter',
          videoUrl: '',
          children: {},
        },
        ionic: {
          priority: lp.Priority.bronze,
          label: 'Ionic',
          videoUrl: '',
          children: {},
        },
        nativeScript: {
          priority: lp.Priority.bronze,
          label: 'NativeScript',
          videoUrl: '',
          children: {},
        },
      },
    },
    desktopApps: {
      priority: lp.Priority.silver,
      color: 'cadetBlue',
      label: 'Desktop Apps',
      videoUrl: '',
      children: {
        electron: {
          priority: lp.Priority.silver,
          label: 'Electron',
          videoUrl: '',
          children: {},
        },
      },
    },
    webAssembly: {
      priority: lp.Priority.gold,
      color: 'darkSlateBlue',
      label: 'Web Assembly',
      videoUrl: '',
      children: {
        rust: {
          priority: lp.Priority.gold,
          label: 'Rust',
          videoUrl: '',
          children: {},
        },
        cpp: {
          priority: lp.Priority.silver,
          label: 'C++',
          videoUrl: '',
          children: {},
        },
      },
    },
  },
};

export default frontend;
