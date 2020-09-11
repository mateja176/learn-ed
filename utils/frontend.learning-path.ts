import * as lp from '../models/learning-path';

const next: lp.LearningPath = {
  priority: lp.Priority.gold,
  label: 'Next',
  associations: ['react'],
  children: {},
};
const nuxt: lp.LearningPath = {
  priority: lp.Priority.gold,
  label: 'Nuxt',
  associations: ['vue'],
  children: {},
};

const frontend: lp.LearningPath = {
  priority: lp.Priority.platinum,
  label: 'Front-end',
  children: {
    internet: {
      priority: lp.Priority.platinum,
      label: 'Internet',
      children: {
        internet101: {
          priority: lp.Priority.gold,
          label: 'Internet 101',
          children: {},
        },
        http: { priority: lp.Priority.gold, label: 'HTTP', children: {} },
        browsers: {
          priority: lp.Priority.gold,
          label: 'Browsers',
          children: {},
        },
        dns: { priority: lp.Priority.gold, label: 'DNS', children: {} },
        hosting: { priority: lp.Priority.gold, label: 'hosting', children: {} },
      },
    },
    html: {
      priority: lp.Priority.platinum,
      label: 'HTML',
      children: {
        basics: { priority: lp.Priority.gold, label: 'Basics', children: {} },
        semanticHtml: {
          priority: lp.Priority.gold,
          label: 'Semantic HTML',
          children: {},
        },
        formsAndValidation: {
          priority: lp.Priority.gold,
          label: 'Forms and Validation',
          children: {},
        },
        bestPractices: {
          priority: lp.Priority.gold,
          label: 'Best Practices',
          children: {},
        },
        seo: { priority: lp.Priority.gold, label: 'SEO', children: {} },
      },
    },
    css: {
      priority: lp.Priority.platinum,
      label: 'CSS',
      children: {
        basics: { priority: lp.Priority.gold, label: 'Basics', children: {} },
        buildingLayouts: {
          priority: lp.Priority.gold,
          label: 'Building Layouts',
          children: {
            floats: {
              priority: lp.Priority.gold,
              label: 'Floats',
              children: {},
            },
            positioning: {
              priority: lp.Priority.gold,
              label: 'Positioning',
              children: {},
            },
            display: {
              priority: lp.Priority.gold,
              label: 'Display',
              children: {},
            },
            boxModel: {
              priority: lp.Priority.gold,
              label: 'Box Model',
              children: {},
            },
            cssGrid: {
              priority: lp.Priority.gold,
              label: 'CSS Grid',
              children: {},
            },
            flexBox: {
              priority: lp.Priority.gold,
              label: 'Flex Box',
              children: {},
            },
          },
        },
        responsiveDesign: {
          priority: lp.Priority.gold,
          label: 'Responsive Design',
          children: {},
        },
      },
    },
    javaScript: {
      priority: lp.Priority.platinum,
      label: 'JavaScript',
      children: {
        basics: { priority: lp.Priority.gold, label: 'Basics', children: {} },
        dom: { priority: lp.Priority.gold, label: 'DOM', children: {} },
        dataFetching: {
          priority: lp.Priority.gold,
          label: 'Data Fetching',
          children: {
            ajax: { priority: lp.Priority.gold, label: 'AJAX', children: {} },
            fetchApi: {
              priority: lp.Priority.gold,
              label: 'Fetch API',
              children: {},
            },
          },
        },
        es6: {
          priority: lp.Priority.gold,
          label: 'ES6',
          children: {
            es6Modules: {
              priority: lp.Priority.gold,
              label: 'ES6 Modules',
              children: {},
            },
            arrayMethods: {
              priority: lp.Priority.gold,
              label: 'Array Methods',
              children: {},
            },
            variableDeclaration: {
              priority: lp.Priority.gold,
              label: 'Variable Declaration',
              children: {},
            },
            promises: {
              priority: lp.Priority.gold,
              label: 'Promises',
              children: {},
            },
            templateLiterals: {
              priority: lp.Priority.gold,
              label: 'Template Literals',
              children: {},
            },
            restAndSpread: {
              priority: lp.Priority.gold,
              label: 'Rest and Spread',
              children: {},
            },
            destructuring: {
              priority: lp.Priority.gold,
              label: 'Destructuring',
              children: {},
            },
          },
        },
      },
    },
    versionControl: {
      priority: lp.Priority.platinum,
      label: 'Version Control',
      children: {
        git: { priority: lp.Priority.platinum, label: 'Git', children: {} },
        remoteRepositories: {
          priority: lp.Priority.gold,
          label: 'Remote Repositories',
          children: {
            github: {
              priority: lp.Priority.platinum,
              label: 'Github',
              children: {},
            },
            gitLab: {
              priority: lp.Priority.bronze,
              label: 'GitLab',
              children: {},
            },
            bitbucket: {
              priority: lp.Priority.bronze,
              label: 'Bitbucket',
              children: {},
            },
          },
        },
      },
    },
    webSecurity: {
      priority: lp.Priority.platinum,
      label: 'Web Security',
      children: {
        https: { priority: lp.Priority.gold, label: 'Https', children: {} },
        cors: { priority: lp.Priority.gold, label: 'CORS', children: {} },
        contentSecurityPolicy: {
          priority: lp.Priority.gold,
          label: 'Content Security Policy ',
          children: {},
        },
        owaspSecurityRisks: {
          priority: lp.Priority.gold,
          label: 'OWASP Security Risks',
          children: {},
        },
      },
    },
    packageManagers: {
      priority: lp.Priority.platinum,
      label: 'Package Managers',
      children: {
        npm: { priority: lp.Priority.platinum, label: 'NPM', children: {} },
        yarn: { priority: lp.Priority.gold, label: 'Yarn', children: {} },
      },
    },
    cssArchitecture: {
      priority: lp.Priority.gold,
      label: 'CSS Architecture',
      children: {
        bem: { priority: lp.Priority.gold, label: 'BEM', children: {} },
      },
    },
    cssPreprocessors: {
      priority: lp.Priority.gold,
      label: 'CSS Preprocessors',
      children: {
        sass: { priority: lp.Priority.gold, label: 'Sass', children: {} },
        less: { priority: lp.Priority.bronze, label: 'Less', children: {} },
      },
    },
    buildTools: {
      priority: lp.Priority.platinum,
      label: 'Build Tools',
      children: {
        linters: {
          priority: lp.Priority.gold,
          label: 'Linters',
          children: {
            eslint: {
              priority: lp.Priority.gold,
              label: 'Eslint',
              children: {},
            },
          },
        },
        formatters: {
          priority: lp.Priority.gold,
          label: 'Code Formatters',
          children: {
            prettier: {
              priority: lp.Priority.gold,
              label: 'Prettier',
              children: {},
            },
          },
        },
        taskRunners: {
          priority: lp.Priority.gold,
          label: 'Task Runners',
          children: {
            npmScripts: {
              priority: lp.Priority.gold,
              label: 'NPM Scripts',
              children: {},
            },
            gulp: {
              priority: lp.Priority.bronze,
              label: 'Gulp',
              children: {},
            },
          },
        },
        moduleBundlers: {
          priority: lp.Priority.gold,
          label: 'Module Bundlers',
          children: {
            webpack: {
              priority: lp.Priority.gold,
              label: 'Webpack',
              children: {},
            },
            rollup: {
              priority: lp.Priority.silver,
              label: 'Rollup',
              children: {},
            },
            parcel: {
              priority: lp.Priority.silver,
              label: 'Parcel',
              children: {},
            },
          },
        },
      },
    },
    frameworks: {
      priority: lp.Priority.platinum,
      label: 'frameworks',
      children: {
        react: {
          priority: lp.Priority.platinum,
          label: 'React',
          children: {
            redux: { priority: lp.Priority.gold, label: 'Redux', children: {} },
            mobX: { priority: lp.Priority.gold, label: 'MobX', children: {} },
          },
        },
        angular: {
          priority: lp.Priority.gold,
          label: 'Angular',
          children: {
            rxjs: { priority: lp.Priority.gold, label: 'RxJS', children: {} },
            ngrx: { priority: lp.Priority.gold, label: 'NgRX', children: {} },
          },
        },
        vue: {
          priority: lp.Priority.gold,
          label: 'Vue',
          children: {
            vueX: { priority: lp.Priority.gold, label: 'VueX', children: {} },
          },
        },
      },
    },
    cssInJs: {
      priority: lp.Priority.platinum,
      label: 'CSS in JS',
      children: {
        styledComponents: {
          priority: lp.Priority.gold,
          label: 'Styled Components',
          children: {},
        },
        cssModules: {
          priority: lp.Priority.gold,
          label: 'CSS Modules',
          children: {},
        },
        emotion: { priority: lp.Priority.gold, label: 'Emotion', children: {} },
        jss: { priority: lp.Priority.gold, label: 'JSS', children: {} },
      },
    },
    webComponents: {
      priority: lp.Priority.gold,
      label: 'Web Components',
      children: {
        htmlTemplates: {
          priority: lp.Priority.gold,
          label: 'HTML Templates',
          children: {},
        },
        customElements: {
          priority: lp.Priority.gold,
          label: 'Custom Elements',
          children: {},
        },
      },
    },
    componentLibraries: {
      priority: lp.Priority.platinum,
      label: 'Component Libraries',
      children: {
        materialUi: {
          priority: lp.Priority.gold,
          label: 'Material UI',
          children: {},
        },
        antDesign: {
          priority: lp.Priority.gold,
          label: 'Ant Design',
          children: {},
        },
        grommet: { priority: lp.Priority.gold, label: 'Grommet', children: {} },
        reactBootstrap: {
          priority: lp.Priority.gold,
          label: 'React Bootstrap',
          children: {},
        },
        reactstrap: {
          priority: lp.Priority.gold,
          label: 'Reactstrap',
          children: {},
        },
      },
    },
    cssLibraries: {
      priority: lp.Priority.gold,
      label: 'CSS Libraries',
      children: {
        bootstrap: {
          priority: lp.Priority.gold,
          label: 'Bootstrap',
          children: {},
        },
      },
    },
    testing: {
      priority: lp.Priority.platinum,
      label: 'Testing',
      children: {
        jest: { priority: lp.Priority.platinum, label: 'Jest', children: {} },
        testingLibrary: {
          priority: lp.Priority.platinum,
          label: 'Testing Library',
          children: {},
        },
        cypress: {
          priority: lp.Priority.platinum,
          label: 'Cypress',
          children: {},
        },
        cucumber: {
          priority: lp.Priority.gold,
          label: 'Cucumber',
          children: {},
        },
        mochaAndChai: {
          priority: lp.Priority.bronze,
          label: 'Mocha And Chai',
          children: {},
        },
      },
    },
    typeCheckers: {
      priority: lp.Priority.platinum,
      label: 'Type Checkers',
      children: {
        typeScript: {
          priority: lp.Priority.gold,
          label: 'TypeScript',
          children: {},
        },
      },
    },
    progressiveWebApps: {
      priority: lp.Priority.platinum,
      label: 'Progressive Web Apps',
      children: {
        serviceWorkers: {
          priority: lp.Priority.platinum,
          label: 'Service Workers',
          children: {},
        },
        manifest: {
          priority: lp.Priority.platinum,
          label: 'Manifest',
          children: {},
        },
        pushNotifications: {
          priority: lp.Priority.gold,
          label: 'Push Notifications',
          children: {},
        },
        deviceApis: {
          priority: lp.Priority.gold,
          label: "Device API's",
          children: {},
        },
        prplPattern: {
          priority: lp.Priority.gold,
          label: 'PRPL Pattern',
          children: {},
        },
      },
    },
    lighthouse: {
      priority: lp.Priority.platinum,
      label: 'LightHouse',
      children: {},
    },
    performanceOptimization: {
      priority: lp.Priority.platinum,
      label: 'Performance Optimization',
      children: {},
    },
    websockets: {
      priority: lp.Priority.gold,
      label: 'Websockets',
      children: {},
    },
    analytics: {
      priority: lp.Priority.platinum,
      label: 'Analytics',
      children: {
        googleAnalytics: {
          priority: lp.Priority.gold,
          label: 'Google Analytics',
          children: {},
        },
        mixPanel: {
          priority: lp.Priority.gold,
          label: 'Mix Panel',
          children: {},
        },
      },
    },
    serverSideRendering: {
      priority: lp.Priority.gold,
      label: 'Server Side Rendering',
      children: {
        next,
        angularUniversal: {
          priority: lp.Priority.gold,
          label: 'Angular Universal',
          associations: ['angular'],
          children: {},
        },
        nuxt,
      },
    },
    graphql: {
      priority: lp.Priority.gold,
      label: 'GraphQL',
      children: {
        apollo: { priority: lp.Priority.gold, label: 'Apollo', children: {} },
        relay: { priority: lp.Priority.silver, label: 'Relay', children: {} },
      },
    },
    staticSiteGenerators: {
      priority: lp.Priority.gold,
      label: 'staticSiteGenerators',
      children: {
        next,
        gatsby: { priority: lp.Priority.gold, label: 'Gatsby', children: {} },
        nuxt,
        jekyll: { priority: lp.Priority.bronze, label: 'Jekyll', children: {} },
        huge: { priority: lp.Priority.bronze, label: 'Hugo', children: {} },
      },
    },
    mobileApps: {
      priority: lp.Priority.gold,
      label: 'Mobile Apps',
      children: {
        reactNative: {
          priority: lp.Priority.gold,
          label: 'React Native',
          children: {},
        },
        flutter: {
          priority: lp.Priority.silver,
          label: 'flutter',
          children: {},
        },
        ionic: { priority: lp.Priority.bronze, label: 'Ionic', children: {} },
        nativeScript: {
          priority: lp.Priority.bronze,
          label: 'NativeScript',
          children: {},
        },
      },
    },
    desktopApps: {
      priority: lp.Priority.silver,
      label: 'Desktop Apps',
      children: {
        electron: {
          priority: lp.Priority.silver,
          label: 'Electron',
          children: {},
        },
      },
    },
    webAssembly: {
      priority: lp.Priority.gold,
      label: 'Web Assembly',
      children: {
        rust: { priority: lp.Priority.gold, label: 'Rust', children: {} },
        cpp: { priority: lp.Priority.silver, label: 'C++', children: {} },
      },
    },
  },
};

export default frontend;
