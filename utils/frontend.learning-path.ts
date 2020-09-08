enum Priority {
  platinum,
  gold,
  silver,
  bronze,
}

const next = {
  priority: Priority.gold,
  label: 'Next',
  associations: 'react',
  children: {},
};
const nuxt = {
  priority: Priority.gold,
  label: 'Nuxt',
  associations: 'vue',
  children: {},
};

export default {
  priority: Priority.platinum,
  label: 'Front-end',
  children: {
    internet: {
      priority: Priority.platinum,
      label: 'Internet',
      children: {
        internet101: {
          priority: Priority.gold,
          label: 'Internet 101',
          children: {},
        },
        http: { priority: Priority.gold, label: 'HTTP', children: {} },
        browsers: { priority: Priority.gold, label: 'Browsers', children: {} },
        dns: { priority: Priority.gold, label: 'DNS', children: {} },
        hosting: { priority: Priority.gold, label: 'hosting', children: {} },
      },
    },
    html: {
      priority: Priority.platinum,
      label: 'HTML',
      children: {
        basics: { priority: Priority.gold, label: 'Basics', children: {} },
        semanticHtml: {
          priority: Priority.gold,
          label: 'Semantic HTML',
          children: {},
        },
        formsAndValidation: {
          priority: Priority.gold,
          label: 'Forms and Validation',
          children: {},
        },
        bestPractices: {
          priority: Priority.gold,
          label: 'Best Practices',
          children: {},
        },
        seo: { priority: Priority.gold, label: 'SEO', children: {} },
      },
    },
    css: {
      priority: Priority.platinum,
      label: 'CSS',
      children: {
        basics: { priority: Priority.gold, label: 'Basics', children: {} },
        buildingLayouts: {
          priority: Priority.gold,
          label: 'Building Layouts',
          children: {
            floats: { priority: Priority.gold, label: 'Floats', children: {} },
            positioning: {
              priority: Priority.gold,
              label: 'Positioning',
              children: {},
            },
            display: {
              priority: Priority.gold,
              label: 'Display',
              children: {},
            },
            boxModel: {
              priority: Priority.gold,
              label: 'Box Model',
              children: {},
            },
            cssGrid: {
              priority: Priority.gold,
              label: 'CSS Grid',
              children: {},
            },
            flexBox: {
              priority: Priority.gold,
              label: 'Flex Box',
              children: {},
            },
          },
        },
        responsiveDesign: {
          priority: Priority.gold,
          label: 'Responsive Design',
          children: {},
        },
      },
    },
    javaScript: {
      priority: Priority.platinum,
      label: 'JavaScript',
      children: {
        basics: { priority: Priority.gold, label: 'Basics', children: {} },
        dom: { priority: Priority.gold, label: 'DOM', children: {} },
        dataFetching: {
          priority: Priority.gold,
          label: 'Data Fetching',
          children: {
            ajax: { priority: Priority.gold, label: 'AJAX', children: {} },
            fetchApi: {
              priority: Priority.gold,
              label: 'Fetch API',
              children: {},
            },
          },
        },
        es6: {
          priority: Priority.gold,
          label: 'ES6',
          children: {
            es6Modules: {
              priority: Priority.gold,
              label: 'ES6 Modules',
              children: {},
            },
            arrayMethods: {
              priority: Priority.gold,
              label: 'Array Methods',
              children: {},
            },
            variableDeclaration: {
              priority: Priority.gold,
              label: 'Variable Declaration',
              children: {},
            },
            promises: {
              priority: Priority.gold,
              label: 'Promises',
              children: {},
            },
            templateLiterals: {
              priority: Priority.gold,
              label: 'Template Literals',
              children: {},
            },
            restAndSpread: {
              priority: Priority.gold,
              label: 'Rest and Spread',
              children: {},
            },
            destructuring: {
              priority: Priority.gold,
              label: 'Destructuring',
              children: {},
            },
          },
        },
      },
    },
    versionControl: {
      priority: Priority.platinum,
      label: 'Version Control',
      children: {
        git: { priority: Priority.platinum, label: 'Git', children: {} },
        remoteRepositories: {
          priority: Priority.gold,
          label: 'Remote Repositories',
          children: {
            github: {
              priority: Priority.platinum,
              label: 'Github',
              children: {},
            },
            gitLab: {
              priority: Priority.bronze,
              label: 'GitLab',
              children: {},
            },
            bitbucket: {
              priority: Priority.bronze,
              label: 'Bitbucket',
              children: {},
            },
          },
        },
      },
    },
    webSecurity: {
      priority: Priority.platinum,
      label: 'Web Security',
      children: {
        https: { priority: Priority.gold, label: 'Https', children: {} },
        cors: { priority: Priority.gold, label: 'CORS', children: {} },
        contentSecurityPolicy: {
          priority: Priority.gold,
          label: 'Content Security Policy ',
          children: {},
        },
        owaspSecurityRisks: {
          priority: Priority.gold,
          label: 'OWASP Security Risks',
          children: {},
        },
      },
    },
    packageManagers: {
      priority: Priority.platinum,
      label: 'Package Managers',
      children: {
        npm: { priority: Priority.platinum, label: 'NPM', children: {} },
        yarn: { priority: Priority.gold, label: 'Yarn', children: {} },
      },
    },
    cssArchitecture: {
      priority: Priority.gold,
      label: 'CSS Architecture',
      children: {
        bem: { priority: Priority.gold, label: 'BEM', children: {} },
      },
    },
    cssPreprocessors: {
      priority: Priority.gold,
      label: 'CSS Preprocessors',
      children: {
        sass: { priority: Priority.gold, label: 'Sass', children: {} },
        less: { priority: Priority.bronze, label: 'Less', children: {} },
      },
    },
    buildTools: {
      priority: Priority.platinum,
      label: 'Build Tools',
      children: {
        linters: {
          priority: Priority.gold,
          label: 'Linters',
          children: {
            eslint: { priority: Priority.gold, label: 'Eslint', children: {} },
          },
        },
        formatters: {
          priority: Priority.gold,
          label: 'Code Formatters',
          children: {
            prettier: {
              priority: Priority.gold,
              label: 'Prettier',
              children: {},
            },
          },
        },
        taskRunners: {
          priority: Priority.gold,
          label: 'Task Runners',
          children: {
            npmScripts: {
              priority: Priority.gold,
              label: 'NPM Scripts',
              children: {},
            },
            gulp: {
              priority: Priority.bronze,
              label: 'Gulp',
              children: {},
            },
          },
        },
        moduleBundlers: {
          priority: Priority.gold,
          label: 'Module Bundlers',
          children: {
            webpack: {
              priority: Priority.gold,
              label: 'Webpack',
              children: {},
            },
            rollup: {
              priority: Priority.silver,
              label: 'Rollup',
              children: {},
            },
            parcel: {
              priority: Priority.silver,
              label: 'Parcel',
              children: {},
            },
          },
        },
      },
    },
    frameworks: {
      priority: Priority.platinum,
      label: 'frameworks',
      children: {
        react: {
          priority: Priority.platinum,
          label: 'React',
          children: {
            redux: { priority: Priority.gold, label: 'Redux', children: {} },
            mobX: { priority: Priority.gold, label: 'MobX', children: {} },
          },
        },
        angular: {
          priority: Priority.gold,
          label: 'Angular',
          children: {
            rxjs: { priority: Priority.gold, label: 'RxJS', children: {} },
            ngrx: { priority: Priority.gold, label: 'NgRX', children: {} },
          },
        },
        vue: {
          priority: Priority.gold,
          label: 'Vue',
          children: {
            vueX: { priority: Priority.gold, label: 'VueX', children: {} },
          },
        },
      },
    },
    cssInJs: {
      priority: Priority.platinum,
      label: 'CSS in JS',
      children: {
        styledComponents: {
          priority: Priority.gold,
          label: 'Styled Components',
          children: {},
        },
        cssModules: {
          priority: Priority.gold,
          label: 'CSS Modules',
          children: {},
        },
        emotion: { priority: Priority.gold, label: 'Emotion', children: {} },
        jss: { priority: Priority.gold, label: 'JSS', children: {} },
      },
    },
    webComponents: {
      priority: Priority.gold,
      label: 'Web Components',
      children: {
        htmlTemplates: {
          priority: Priority.gold,
          label: 'HTML Templates',
          children: {},
        },
        customElements: {
          priority: Priority.gold,
          label: 'Custom Elements',
          children: {},
        },
      },
    },
    componentLibraries: {
      priority: Priority.platinum,
      label: 'Component Libraries',
      children: {
        materialUi: {
          priority: Priority.gold,
          label: 'Material UI',
          children: {},
        },
        antDesign: {
          priority: Priority.gold,
          label: 'Ant Design',
          children: {},
        },
        grommet: { priority: Priority.gold, label: 'Grommet', children: {} },
        reactBootstrap: {
          priority: Priority.gold,
          label: 'React Bootstrap',
          children: {},
        },
        reactstrap: {
          priority: Priority.gold,
          label: 'Reactstrap',
          children: {},
        },
      },
    },
    cssLibraries: {
      bootstrap: { priority: Priority.gold, label: 'Bootstrap', children: {} },
    },
    testing: {
      priority: Priority.platinum,
      label: 'Testing',
      children: {
        jest: { priority: Priority.platinum, label: 'Jest', children: {} },
        testingLibrary: {
          priority: Priority.platinum,
          label: 'Testing Library',
          children: {},
        },
        cypress: {
          priority: Priority.platinum,
          label: 'Cypress',
          children: {},
        },
        cucumber: {
          priority: Priority.gold,
          label: 'Cucumber',
          children: {},
        },
        mochaAndChai: {
          priority: Priority.bronze,
          label: 'Mocha And Chai',
          children: {},
        },
      },
    },
    typeCheckers: {
      priority: Priority.platinum,
      label: 'Type Checkers',
      children: {
        typeScript: {
          priority: Priority.gold,
          label: 'TypeScript',
          children: {},
        },
      },
    },
    progressiveWebApps: {
      priority: Priority.platinum,
      label: 'Progressive Web Apps',
      children: {
        serviceWorkers: {
          priority: Priority.platinum,
          label: 'Service Workers',
          children: {},
        },
        manifest: {
          priority: Priority.platinum,
          label: 'Manifest',
          children: {},
        },
        pushNotifications: {
          priority: Priority.gold,
          label: 'Push Notifications',
          children: {},
        },
        deviceApis: {
          priority: Priority.gold,
          label: "Device API's",
          children: {},
        },
        prplPattern: {
          priority: Priority.gold,
          label: 'PRPL Pattern',
          children: {},
        },
      },
    },
    lighthouse: {
      priority: Priority.platinum,
      label: 'LightHouse',
      children: {},
    },
    performanceOptimization: {
      priority: Priority.platinum,
      label: 'Performance Optimization',
      children: {},
    },
    websockets: { priority: Priority.gold, label: 'Websockets', children: {} },
    analytics: {
      priority: Priority.platinum,
      label: 'Analytics',
      children: {
        googleAnalytics: {
          priority: Priority.gold,
          label: 'Google Analytics',
          children: {},
        },
        mixPanel: {
          priority: Priority.gold,
          label: 'Mix Panel',
          children: {},
        },
      },
    },
    serverSideRendering: {
      priority: Priority.gold,
      label: 'Server Side Rendering',
      children: {
        next,
        angularUniversal: {
          priority: Priority.gold,
          label: 'Angular Universal',
          associations: 'angular',
          children: {},
        },
        nuxt,
      },
    },
    graphql: {
      priority: Priority.gold,
      label: 'GraphQL',
      children: {
        apollo: { priority: Priority.gold, label: 'Apollo', children: {} },
        relay: { priority: Priority.silver, label: 'Relay', children: {} },
      },
    },
    staticSiteGenerators: {
      priority: Priority.gold,
      label: 'staticSiteGenerators',
      children: {
        next,
        gatsby: { priority: Priority.gold, label: 'Gatsby', children: {} },
        nuxt,
        jekyll: { priority: Priority.bronze, label: 'Jekyll', children: {} },
        huge: { priority: Priority.bronze, label: 'Hugo', children: {} },
      },
    },
    mobileApps: {
      priority: Priority.gold,
      label: 'Mobile Apps',
      children: {
        reactNative: {
          priority: Priority.gold,
          label: 'React Native',
          children: {},
        },
        flutter: { priority: Priority.silver, label: 'flutter', children: {} },
        ionic: { priority: Priority.bronze, label: 'Ionic', children: {} },
        nativeScript: {
          priority: Priority.bronze,
          label: 'NativeScript',
          children: {},
        },
      },
    },
    desktopApps: {
      priority: Priority.silver,
      label: 'Desktop Apps',
      children: {
        electron: {
          priority: Priority.silver,
          label: 'Electron',
          children: {},
        },
      },
    },
    webAssembly: {
      priority: Priority.gold,
      label: 'Web Assembly',
      children: {
        rust: { priority: Priority.gold, label: 'Rust', children: {} },
        cpp: { priority: Priority.silver, label: 'C++', children: {} },
      },
    },
  },
};
