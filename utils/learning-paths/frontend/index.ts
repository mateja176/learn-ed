import Analytics from '../../../assets/analytics.svg';
import Angular from '../../../assets/angular.svg';
import AngularUniversal from '../../../assets/angularUniversal.svg';
import Apollo from '../../../assets/apollo.svg';
import Aws from '../../../assets/aws.svg';
import Bem from '../../../assets/bem.svg';
import Bitbucket from '../../../assets/bitbucket.svg';
import Bootstrap from '../../../assets/bootstrap.svg';
import BoxModel from '../../../assets/boxModel.svg';
import Browsers from '../../../assets/browsers.svg';
import BuildingLayouts from '../../../assets/buildingLayouts.svg';
import BuildTools from '../../../assets/buildTools.svg';
import ChromeDevTools from '../../../assets/chromeDevTools.svg';
import CodeEditors from '../../../assets/codeEditors.svg';
import ContentSecurityPolicy from '../../../assets/contentSecurityPolicy.svg';
import Cors from '../../../assets/cors.svg';
import Cpp from '../../../assets/cpp.svg';
import Css from '../../../assets/css.svg';
import CssArchitecture from '../../../assets/cssArchitecture.svg';
import CssGrid from '../../../assets/cssGrid.svg';
import CssInJs from '../../../assets/cssInJs.svg';
import CssLibraries from '../../../assets/cssLibraries.svg';
import CssPreprocessors from '../../../assets/cssPreprocessors.svg';
import Cucumber from '../../../assets/cucumber.svg';
import CustomElements from '../../../assets/customElements.svg';
import Cypress from '../../../assets/cypress.svg';
import Debugging from '../../../assets/debugging.svg';
import DeviceApis from '../../../assets/deviceApis.svg';
import Display from '../../../assets/display.svg';
import Dns from '../../../assets/dns.svg';
import Documentation from '../../../assets/documentation.svg';
import Docusaurus from '../../../assets/docusaurus.svg';
import Electron from '../../../assets/electron.svg';
import Eslint from '../../../assets/eslint.svg';
import Firebase from '../../../assets/firebase.svg';
import FlexBox from '../../../assets/flexBox.svg';
import Floats from '../../../assets/floats.svg';
import Flutter from '../../../assets/flutter.svg';
import FormsAndValidation from '../../../assets/forms.svg';
import Frameworks from '../../../assets/frameworks.svg';
import Frontend from '../../../assets/frontend.svg';
import Git from '../../../assets/git.svg';
import Github from '../../../assets/github.svg';
import GitLab from '../../../assets/gitLab.svg';
import GoogleAnalytics from '../../../assets/googleAnalytics.svg';
import Graphql from '../../../assets/graphql.svg';
import Hosting from '../../../assets/hosting.svg';
import Html from '../../../assets/html.svg';
import HtmlTemplates from '../../../assets/htmlTemplates.svg';
import Http from '../../../assets/http.svg';
import Https from '../../../assets/https.svg';
import Hugo from '../../../assets/hugo.svg';
import Ionic from '../../../assets/ionic.svg';
import Jekyll from '../../../assets/jekyll.svg';
import JsDoc from '../../../assets/jsDoc.svg';
import LazyLoading from '../../../assets/lazyLoading.svg';
import Less from '../../../assets/less.svg';
import Lighthouse from '../../../assets/lighthouse.svg';
import Linters from '../../../assets/linters.svg';
import Manifest from '../../../assets/manifest.svg';
import Mixpanel from '../../../assets/mixpanel.svg';
import MobileApps from '../../../assets/mobileApps.svg';
import MochaAndChai from '../../../assets/mochaAndChai.svg';
import ModuleBundlers from '../../../assets/moduleBundlers.svg';
import Netlify from '../../../assets/netlify.svg';
import Ngrx from '../../../assets/ngrx.svg';
import Npm from '../../../assets/npm.svg';
import NpmScripts from '../../../assets/npmScripts.svg';
import Nuxt from '../../../assets/nuxt.svg';
import OwaspSecurityRisks from '../../../assets/owaspSecurityRisks.svg';
import PackageManagers from '../../../assets/packageManagers.svg';
import Parcel from '../../../assets/parcel.svg';
import PerformanceOptimization from '../../../assets/performanceOptimization.svg';
import Positioning from '../../../assets/positioning.svg';
import Prettier from '../../../assets/prettier.svg';
import ProgressiveWebApps from '../../../assets/progressiveWebApps.svg';
import PushNotifications from '../../../assets/pushNotifications.svg';
import Relay from '../../../assets/relay.svg';
import RemoteRepositories from '../../../assets/remoteRepositories.svg';
import ResponsiveDesign from '../../../assets/responsiveDesign.svg';
import Rest from '../../../assets/rest.svg';
import Rollup from '../../../assets/rollup.svg';
import Rust from '../../../assets/rust.svg';
import Rxjs from '../../../assets/rxjs.svg';
import Sass from '../../../assets/sass.svg';
import SemanticHtml from '../../../assets/semanticHtml.svg';
import Seo from '../../../assets/seo.svg';
import Serverless from '../../../assets/serverless.svg';
import ServiceWorkers from '../../../assets/serviceWorkers.svg';
import SocketIo from '../../../assets/socketIo.svg';
import Ssr from '../../../assets/ssr.svg';
import StaticSiteGenerators from '../../../assets/staticSiteGenerators.svg';
import Testing from '../../../assets/testing.svg';
import TypeCheckers from '../../../assets/typeCheckers.svg';
import TypeDoc from '../../../assets/typeDoc.svg';
import Typescript from '../../../assets/typescript.svg';
import VersionControl from '../../../assets/versionControl.svg';
import VsCode from '../../../assets/vsCode.svg';
import Vue from '../../../assets/vue.svg';
import VueX from '../../../assets/vueX.svg';
import Web from '../../../assets/web.svg';
import WebAssembly from '../../../assets/webAssembly.svg';
import WebComponents from '../../../assets/webComponents.svg';
import Webpack from '../../../assets/webpack.svg';
import WebSecurity from '../../../assets/webSecurity.svg';
import Websockets from '../../../assets/websockets.svg';
import Yarn from '../../../assets/yarn.svg';
import * as lp from '../../../models/learning-path';
import componentLibraries from './componentLibraries';
import cssModules from './cssModules';
import emotion from './emotion';
import gatsby from './gatsby';
import javascript from './javascript';
import jest from './jest';
import jss from './jss';
import next from './next';
import react from './react';
import reactNative from './reactNative';
import styledComponents from './styledComponents';
import testingLibrary from './testingLibrary';

const nuxt = {
  Logo: Nuxt,
  priority: lp.Priority.gold,
  color: '#00C58E',
  label: 'Nuxt',
  description: 'Hybrid static & server rendering for Vue.',
  url: 'https://nuxtjs.org/',
  videoUrl: 'https://www.youtube.com/watch?v=ltzlhAxJr74',
  children: {},
  associations: ['frontend/frameworks/vue'],
};

const frontend = {
  Logo: Frontend,
  priority: lp.Priority.platinum,
  color: 'royalblue',
  label: '🖥️ Front-end',
  description:
    'With the surge of Rich Web Applications followed by Progressive Web Application, building the user facing side of the Internet has never been more impactful.',
  url:
    'https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html',
  videoUrl: 'https://www.youtube.com/watch?v=QA0XpGhiz5w',
  children: {
    web: {
      Logo: Web,
      priority: lp.Priority.platinum,
      color: 'darkSlateGrey',
      label: 'The Web',
      description:
        'First we had steam power, then we had electricity, now we also have The Internet.',
      url: 'https://www.w3.org/',
      videoUrl: 'https://www.youtube.com/watch?v=J8hzJxb0rpc',
      children: {
        http: {
          Logo: Http,
          priority: lp.Priority.gold,
          color: '#005896',
          description:
            'A client-server protocol which is the foundation of any data exchange on the Web.',
          label: 'HTTP',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
          videoUrl: 'https://www.youtube.com/watch?v=iYM2zFP3Zn0',
          children: {},
        },

        browsers: {
          Logo: Browsers,
          priority: lp.Priority.gold,
          color: 'springGreen',
          description:
            'Your main window for accessing information on the World Wide Web.',
          label: 'Browsers',
          url: 'https://en.wikipedia.org/wiki/Web_browser',
          videoUrl: 'https://www.youtube.com/watch?v=QzohDuGk4mM',
          children: {},
        },
        dns: {
          Logo: Dns,
          priority: lp.Priority.gold,
          color: '#005896',
          description:
            'Without it you\'d be typing in "172.217.18.78" instead of google.com',
          label: 'DNS',
          url: 'https://www.cloudflare.com/learning/dns/what-is-dns/',
          videoUrl: 'https://www.youtube.com/watch?v=uOfonONtIuk',
          children: {},
        },

        hosting: {
          Logo: Hosting,
          priority: lp.Priority.gold,
          color: 'paleGreen',
          description: 'Make your website accessible to the world.',
          label: 'Hosting',
          url:
            'https://www.website.com/beginnerguide/webhosting/6/1/what-is-web-hosting',
          videoUrl: 'https://www.youtube.com/watch?v=0hGK7qiQ6WA',
          children: {},
        },
      },
    },
    html: {
      Logo: Html,
      priority: lp.Priority.platinum,
      color: 'orangeRed',
      description:
        'In 1989 Tim Berners-Lee created the first website using the Hyper Text Markup Language.',
      label: 'HTML',
      url: 'https://www.w3schools.com/html/html_intro.asp',
      videoUrl: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
      children: {
        semanticHtml: {
          Logo: SemanticHtml,
          priority: lp.Priority.gold,
          color: 'orange',
          description: 'Meaningful HTML.',
          label: 'Semantic HTML',
          url: 'https://www.w3schools.com/html/html5_semantic_elements.asp',
          videoUrl: 'https://www.youtube.com/watch?v=g2tzEil5TL0',
          children: {},
        },
        formsAndValidation: {
          Logo: FormsAndValidation,
          priority: lp.Priority.gold,
          color: 'darkMagenta',
          description:
            'Servers constantly send information to clients, but clients can also send information to servers.',
          label: 'Forms and Validation',
          url: 'https://www.w3schools.com/html/html_forms.asp',
          videoUrl: 'https://www.youtube.com/watch?v=fNcJuPIZ2WE',
          children: {},
        },
        seo: {
          Logo: Seo,
          priority: lp.Priority.gold,
          color: 'khaki',
          description: 'Want to get your site on the first page of Google?',
          label: 'SEO',
          url: 'https://moz.com/beginners-guide-to-seo',
          videoUrl: 'https://www.youtube.com/watch?v=DvwS7cV9GmQ',
          children: {},
        },
      },
    },
    css: {
      Logo: Css,
      priority: lp.Priority.platinum,
      color: 'mediumBlue',
      label: 'CSS',
      description: 'We all need some style in our lives.',
      url: 'https://www.w3schools.com/css/css_intro.asp',
      videoUrl: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
      children: {
        buildingLayouts: {
          Logo: BuildingLayouts,
          priority: lp.Priority.gold,
          color: 'mediumAquaMarine',
          label: 'Building Layouts',
          description:
            'This can be frustrating, but after some time it becomes second nature.',
          url: 'https://www.w3schools.com/css/css_website_layout.asp',
          videoUrl: 'https://www.youtube.com/watch?v=R7gqJkdc5dM',
          children: {
            floats: {
              Logo: Floats,
              priority: lp.Priority.gold,
              color: 'aqua',
              label: 'Floats',
              description: 'Left or right?',
              url: 'https://www.w3schools.com/cssref/pr_class_float.asp',
              videoUrl: 'https://www.youtube.com/watch?v=VwxGKpvW8Zk',
              children: {},
            },
            positioning: {
              Logo: Positioning,
              priority: lp.Priority.gold,
              color: 'aquaMarine',
              label: 'Positioning',
              description: 'Not everything is static in this world.',
              url: 'https://www.w3schools.com/css/css_positioning.asp',
              videoUrl: 'https://www.youtube.com/watch?v=jx5jmI0UlXU',
              children: {},
            },
            display: {
              Logo: Display,
              priority: lp.Priority.gold,
              color: 'lightCyan',
              label: 'Display',
              description: 'To display or not to display?',
              url: 'https://www.w3schools.com/css/css_display_visibility.asp',
              videoUrl: 'https://www.youtube.com/watch?v=Qf-wVa9y9V4',
              children: {},
            },
            boxModel: {
              Logo: BoxModel,
              priority: lp.Priority.gold,
              color: 'darkCyan',
              label: 'Box Model',
              description: 'Elements can be deceiving.',
              url: 'https://www.w3schools.com/css/css_boxmodel.asp',
              videoUrl: 'https://www.youtube.com/watch?v=rIO5326FgPE',
              children: {},
            },
            cssGrid: {
              Logo: CssGrid,
              priority: lp.Priority.gold,
              color: 'blue',
              label: 'CSS Grid',
              description: 'What can one do with rows and columns?',
              url: 'https://www.w3schools.com/css/css_grid.asp',
              videoUrl: 'https://www.youtube.com/watch?v=jV8B24rSN5o',
              children: {},
            },
            flexBox: {
              Logo: FlexBox,
              priority: lp.Priority.gold,
              color: 'cornflowerBlue',
              label: 'Flex Box',
              description:
                'Nowadays, it may be the most common and easiest way to build great layouts.',
              url: 'https://www.w3schools.com/css/css3_flexbox.asp',
              videoUrl: 'https://www.youtube.com/watch?v=JJSoEo8JSnc',
              children: {},
            },
          },
        },
        responsiveDesign: {
          Logo: ResponsiveDesign,
          priority: lp.Priority.gold,
          color: 'dodgerBlue',
          label: 'Responsive Design',
          description:
            'The majority of people access the internet through a mobile device.',
          url: 'https://www.w3schools.com/css/css_rwd_intro.asp',
          videoUrl: 'https://www.youtube.com/watch?v=srvUrASNj0s',
          children: {},
        },
      },
    },
    javascript,
    versionControl: {
      Logo: VersionControl,
      priority: lp.Priority.platinum,
      color: 'tomato',
      label: 'Version Control',
      description: 'A game changer.',
      url:
        'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control',
      videoUrl: 'https://www.youtube.com/watch?v=zbKdDsNNOhg',
      children: {
        git: {
          Logo: Git,
          priority: lp.Priority.platinum,
          color: '#F44D27',
          label: 'Git',
          description: 'The history of your code in the palm of your hand.',
          url: 'https://git-scm.com/about',
          videoUrl: 'https://www.youtube.com/watch?v=USjZcfj8yxE',
          children: {},
        },
        remoteRepositories: {
          Logo: RemoteRepositories,
          priority: lp.Priority.gold,
          color: '#404448',
          label: 'Remote Repositories',
          description: 'Partying alone is not much fun.',
          url: 'https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes',
          videoUrl: 'https://www.youtube.com/watch?v=Gg4bLk8cGNo',
          children: {
            github: {
              Logo: Github,
              priority: lp.Priority.platinum,
              color: '#24292e',
              label: 'Github',
              description: 'The home of Open Source and many more goodies.',
              url: 'https://guides.github.com/activities/hello-world/',
              videoUrl: 'https://www.youtube.com/watch?v=nhNq2kIvi9s',
              children: {},
            },
            gitLab: {
              Logo: GitLab,
              priority: lp.Priority.bronze,
              color: '#fa7035',
              label: 'GitLab',
              description: 'Github is not alone either.',
              url: 'https://docs.gitlab.com/ee/gitlab-basics/',
              videoUrl: 'https://www.youtube.com/watch?v=gbJUasioKiI',
              children: {},
            },
            bitbucket: {
              Logo: Bitbucket,
              priority: lp.Priority.bronze,
              color: '#0052CC',
              label: 'Bitbucket',
              description: "Jira's cousin.",
              url:
                'https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud',
              videoUrl: 'https://www.youtube.com/watch?v=M44nEyd_5To',
              children: {},
            },
          },
        },
      },
    },
    webSecurity: {
      Logo: WebSecurity,
      priority: lp.Priority.platinum,
      color: 'steelBlue',
      label: 'Web Security',
      description: "Without security there wouldn't be the Web",
      url: 'https://developer.mozilla.org/en-US/docs/Web/Security',
      videoUrl: 'https://www.youtube.com/watch?v=wIRVn2dZkaA',
      children: {
        https: {
          Logo: Https,
          priority: lp.Priority.gold,
          color: '#DB5912',
          label: 'Https',
          description: "Don't let other listen in to your conversations.",
          url: 'https://en.wikipedia.org/wiki/HTTPS',
          videoUrl: 'https://www.youtube.com/watch?v=hExRDVZHhig',
          children: {},
        },
        cors: {
          Logo: Cors,
          priority: lp.Priority.gold,
          color: '#F2B104',
          label: 'CORS',
          description: 'Request resources from other origins.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
          videoUrl: 'https://www.youtube.com/watch?v=Ka8vG5miErk',
          children: {},
        },
        contentSecurityPolicy: {
          Logo: ContentSecurityPolicy,
          priority: lp.Priority.gold,
          color: 'lightSkyBlue',
          label: 'Content Security Policy ',
          description: 'XSS no more.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
          videoUrl: 'https://www.youtube.com/watch?v=mr230uotw-Y',
          children: {},
        },
        owaspSecurityRisks: {
          Logo: OwaspSecurityRisks,
          priority: lp.Priority.gold,
          color: 'goldenRod',
          label: 'OWASP Security Risks',
          description: 'Treat it as a checklist for security.',
          url: 'https://owasp.org/www-project-top-ten/',
          videoUrl: 'https://www.youtube.com/watch?v=-7B9Ej4BFgw',
          children: {},
        },
      },
    },
    rest: {
      Logo: Rest,
      priority: lp.Priority.platinum,
      color: 'teal',
      label: 'REST',
      description: "Knock, knock - Who's there?",
      url: 'https://restfulapi.net/',
      videoUrl: 'https://www.youtube.com/watch?v=Q-BpqyOT3a8',
      children: {},
    },
    packageManagers: {
      Logo: PackageManagers,
      priority: lp.Priority.platinum,
      color: 'firebrick',
      label: 'Package Managers',
      description: 'Sharing is caring.',
      url:
        'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management',
      videoUrl: 'https://www.youtube.com/watch?v=-SaZiADGLHs',
      children: {
        npm: {
          Logo: Npm,
          priority: lp.Priority.platinum,
          color: '#C42329',
          label: 'NPM',
          description: "Node's de facto package manager.",
          url: 'https://www.w3schools.com/nodejs/nodejs_npm.asp',
          videoUrl: 'https://www.youtube.com/watch?v=jHDhaSSKmB0',
          children: {},
        },
        yarn: {
          Logo: Yarn,
          priority: lp.Priority.gold,
          color: '#2188B6',
          label: 'Yarn',
          description: 'A fresh perspective on package managers.',
          url: 'https://yarnpkg.com/getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=g9_6KmiBISk',
          children: {},
        },
      },
    },
    cssArchitecture: {
      Logo: CssArchitecture,
      priority: lp.Priority.gold,
      color: 'midnightBlue',
      label: 'CSS Architecture',
      description: 'Avoid maintainability headaches.',
      url: 'https://philipwalton.com/articles/css-architecture/',
      videoUrl: 'https://www.youtube.com/watch?v=Nxnp-JLgo5I',
      children: {
        bem: {
          Logo: Bem,
          priority: lp.Priority.gold,
          color: '#8A8A9A',
          label: 'BEM',
          description: 'Block-Element-Modifier',
          url: 'http://getbem.com/introduction/',
          videoUrl: 'https://www.youtube.com/watch?v=er1JEDuPbZQ',
          children: {},
        },
      },
    },
    cssPreprocessors: {
      Logo: CssPreprocessors,
      priority: lp.Priority.gold,
      color: 'navy',
      label: 'CSS Preprocessors',
      description: 'Ever wanted to get more out of CSS?',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor',
      videoUrl: 'https://www.youtube.com/watch?v=mAHUT1aXUfQ',
      children: {
        sass: {
          Logo: Sass,
          priority: lp.Priority.gold,
          color: '#CF649A',
          label: 'Sass',
          description: 'Nesting, modules, debugging and more.',
          url: 'https://sass-lang.com/guide',
          videoUrl: 'https://www.youtube.com/watch?v=Zz6eOVaaelI',
          children: {},
        },
        less: {
          Logo: Less,
          priority: lp.Priority.bronze,
          color: '#1d365d',
          label: 'Less',
          description: 'Leaner Style Sheets',
          url: 'http://lesscss.org/',
          videoUrl: 'https://www.youtube.com/watch?v=YD91G8DdUsw',
          children: {},
        },
      },
    },
    buildTools: {
      Logo: BuildTools,
      priority: lp.Priority.platinum,
      color: 'powderBlue',
      label: 'Build Tools',
      description: 'Be in control of your workflow.',
      url: 'https://survivejs.com/webpack/appendices/comparison/',
      videoUrl: 'https://www.youtube.com/watch?v=rSTR4uET2EA',
      children: {
        linters: {
          Logo: Linters,
          priority: lp.Priority.gold,
          color: 'lavender',
          label: 'Linters',
          description: 'Avoid shooting yourself in the foot.',
          url: 'https://www.codereadability.com/what-are-javascript-linters/',
          videoUrl: 'https://www.youtube.com/watch?v=bkrapYrmRLc',
          children: {
            eslint: {
              Logo: Eslint,
              priority: lp.Priority.gold,
              color: '#4B32C3',
              label: 'Eslint',
              description: 'Powerful, fast and flexible.',
              url: 'https://eslint.org/docs/user-guide/getting-started',
              videoUrl: 'https://www.youtube.com/watch?v=qhuFviJn-es',
              children: {},
            },
          },
        },
        prettier: {
          Logo: Prettier,
          priority: lp.Priority.gold,
          color: '#f8bc45',
          label: 'Prettier',
          description: 'Configurable formatter, but with good defaults.',
          url: 'https://prettier.io/docs/en/index.html',
          videoUrl: 'https://www.youtube.com/watch?v=hPI9UnE4dws',
          children: {},
        },
        npmScripts: {
          Logo: NpmScripts,
          priority: lp.Priority.gold,
          color: 'indianRed',
          label: 'NPM Scripts',
          description: 'Easy and simple.',
          url:
            'https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/',
          videoUrl: 'https://www.youtube.com/watch?v=hHt3oVk3XVk',
          children: {},
        },
        moduleBundlers: {
          Logo: ModuleBundlers,
          priority: lp.Priority.gold,
          color: 'azure',
          label: 'Module Bundlers',
          description: 'Having a great many modules is no longer a problem.',
          url:
            'https://www.freecodecamp.org/news/javascript-modules-part-2-module-bundling-5020383cf306/',
          videoUrl: 'https://www.youtube.com/watch?v=OhPUaEuEaXk',
          children: {
            webpack: {
              Logo: Webpack,
              priority: lp.Priority.gold,
              color: '#75AFCC',
              description: 'The most popular, widespread bundler out there.',
              label: 'Webpack',
              url: 'https://webpack.js.org/guides/getting-started/',
              videoUrl: 'https://www.youtube.com/watch?v=TzdEpgONurw',
              children: {},
            },
            rollup: {
              Logo: Rollup,
              priority: lp.Priority.silver,
              color: '#FF3333',
              label: 'Rollup',
              description: 'The bundler that popularized tree-shaking',
              url: 'https://rollupjs.org/guide/en/',
              videoUrl: 'https://www.youtube.com/watch?v=ZGa_a164aeM',
              children: {},
            },
            parcel: {
              Logo: Parcel,
              priority: lp.Priority.silver,
              color: '#F3BC83',
              label: 'Parcel',
              description: 'Blazing fast with zero configuration.',
              url: 'https://parceljs.org/getting_started.html',
              videoUrl: 'https://www.youtube.com/watch?v=OK6akGZCC88',
              children: {},
            },
          },
        },
      },
    },
    frameworks: {
      Logo: Frameworks,
      priority: lp.Priority.platinum,
      color: 'cyan',
      label: 'Frameworks',
      description: 'Say goodbye to JQuery.',
      url: 'https://en.wikipedia.org/wiki/JavaScript_framework',
      videoUrl: 'https://www.youtube.com/watch?v=_P2fGeg9I5o',
      children: {
        react,
        angular: {
          Logo: Angular,
          priority: lp.Priority.gold,
          color: '#DD0031',
          label: 'Angular',
          description: 'A framework in the real sense of the word.',
          url: 'https://angular.io/docs',
          videoUrl: 'https://www.youtube.com/watch?v=Fdf5aTYRW0E',
          children: {
            rxjs: {
              Logo: Rxjs,
              priority: lp.Priority.gold,
              color: '#DF0090',
              label: 'RxJS',
              description: 'Reactive extensions for JS',
              url: 'https://www.learnrxjs.io/',
              videoUrl: 'https://www.youtube.com/watch?v=PhggNGsSQyg',
              children: {},
            },
            ngrx: {
              Logo: Ngrx,
              priority: lp.Priority.gold,
              color: '#a829c3',
              label: 'NgRX',
              description:
                'Manage state and collections easily, while isolating side effects.',
              url: 'https://ngrx.io/docs',
              videoUrl: 'https://www.youtube.com/watch?v=f97ICOaekNU',
              children: {},
            },
          },
        },
        vue: {
          Logo: Vue,
          priority: lp.Priority.gold,
          color: '#4fc08d',
          label: 'Vue',
          description: 'The best of both worlds.',
          url: 'https://vuejs.org/v2/guide/',
          videoUrl: 'https://www.youtube.com/watch?v=Wy9q22isx3U',
          children: {
            vueX: {
              Logo: VueX,
              priority: lp.Priority.gold,
              color: '#62C19E',
              label: 'VueX',
              description: 'The power of Redux for Vue.',
              url: 'https://vuex.vuejs.org/',
              videoUrl: 'https://www.youtube.com/watch?v=5lVQgZzLMHc',
              children: {},
            },
          },
        },
      },
    },
    cssInJs: {
      Logo: CssInJs,
      priority: lp.Priority.platinum,
      color: 'limeGreen',
      label: 'CSS in JS',
      description: 'CSS and JS unite!',
      url: 'https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757',
      videoUrl: 'youtube.com/watch?v=NMiEREulVLc',
      children: {
        styledComponents,
        emotion,
        jss,
        cssModules,
      },
    },
    webComponents: {
      Logo: WebComponents,
      priority: lp.Priority.gold,
      color: 'darkOrange',
      label: 'Web Components',
      description: 'Custom components for everybody.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components',
      videoUrl: 'https://www.youtube.com/watch?v=PCWaFLy3VUo',
      children: {
        htmlTemplates: {
          Logo: HtmlTemplates,
          priority: lp.Priority.gold,
          color: 'coral',
          label: 'HTML Templates',
          description: 'Reusable HTML.',
          url: 'https://www.w3schools.com/tags/tag_template.asp',
          videoUrl: 'https://www.youtube.com/watch?v=mfN-EOkj13Q',
          children: {},
        },
        customElements: {
          Logo: CustomElements,
          priority: lp.Priority.gold,
          color: 'lightCoral',
          label: 'Custom Elements',
          description: 'Create your personal HTML tag.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements',
          videoUrl: 'https://www.youtube.com/watch?v=iVJA-lGkEFw',
          children: {},
        },
      },
    },
    componentLibraries,
    cssLibraries: {
      Logo: CssLibraries,
      priority: lp.Priority.gold,
      color: 'rebeccaPurple',
      label: 'CSS Libraries',
      description: "Don't start from scratch.",
      url: 'https://github.com/troxler/awesome-css-frameworks',
      videoUrl: 'https://www.youtube.com/watch?v=vmXIGdP8KN8',
      children: {
        bootstrap: {
          Logo: Bootstrap,
          priority: lp.Priority.gold,
          color: '#7952b3',
          label: 'Bootstrap',
          description: 'A hugely popular front-end toolkit',
          url:
            'https://getbootstrap.com/docs/4.5/getting-started/introduction/',
          videoUrl: 'https://www.youtube.com/watch?v=5GcQtLDGXy8',
          children: {},
        },
      },
    },
    testing: {
      Logo: Testing,
      priority: lp.Priority.platinum,
      color: 'green',
      label: 'Testing',
      description: 'The proof of your code.',
      url: 'https://testingjavascript.com/',
      videoUrl: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI',
      children: {
        jest,
        testingLibrary,
        cypress: {
          Logo: Cypress,
          priority: lp.Priority.platinum,
          color: '#192635',
          label: 'Cypress',
          description: 'The web has evolved, finally testing has too.',
          url: 'https://www.cypress.io/how-it-works',
          videoUrl: 'https://www.youtube.com/watch?v=7N63cMKosIE',
          children: {},
        },
        cucumber: {
          Logo: Cucumber,
          priority: lp.Priority.gold,
          color: '#00a818',
          label: 'Cucumber',
          description: 'BDD - Example mapping and TDD.',
          url: 'https://cucumber.io/docs/installation/javascript/',
          videoUrl: 'https://www.youtube.com/watch?v=lC0jzd8sGIA',
          children: {},
        },
        mochaAndChai: {
          Logo: MochaAndChai,
          priority: lp.Priority.bronze,
          color: '#8d6748',
          label: 'Mocha And Chai',
          description: 'The famous test runner and assertion lib duo.',
          url: 'https://mochajs.org/#getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=MLTRHc5dk6s',
          children: {},
        },
      },
    },
    typeCheckers: {
      Logo: TypeCheckers,
      priority: lp.Priority.platinum,
      color: 'royalBlue',
      label: 'Type Checkers',
      description: 'Streamline your development and make refactoring a breeze.',
      url: 'https://advancedweb.dev/static-type-checkers',
      videoUrl: 'https://www.youtube.com/watch?v=YHvqbeh_n9U',
      children: {
        typescript: {
          Logo: Typescript,
          priority: lp.Priority.gold,
          color: '#3178c6',
          label: 'TypeScript',
          description: 'Typed JavScript at scale.',
          url:
            'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
          videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
          children: {},
        },
      },
    },
    progressiveWebApps: {
      Logo: ProgressiveWebApps,
      priority: lp.Priority.platinum,
      color: 'indigo',
      label: 'Progressive Web Apps',
      description: 'Websites that took all the right vitamins.',
      url: 'https://web.dev/progressive-web-apps/#introduction',
      videoUrl: 'https://www.youtube.com/watch?v=VmKePMB0C8Q',
      children: {
        serviceWorkers: {
          Logo: ServiceWorkers,
          priority: lp.Priority.platinum,
          color: 'mediumPurple',
          label: 'Service Workers',
          description: 'Offline support for your apps and more.',
          url:
            'https://developers.google.com/web/fundamentals/primers/service-workers',
          videoUrl: 'https://www.youtube.com/watch?v=ksXwaWHCW6k',
          children: {},
        },
        manifest: {
          Logo: Manifest,
          priority: lp.Priority.platinum,
          color: 'rosyBrown',
          label: 'Manifest',
          description: 'Have users install your web app like a native app.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/Manifest',
          videoUrl: 'https://www.youtube.com/watch?v=AlEdGOLhuM8',
          children: {},
        },
        pushNotifications: {
          Logo: PushNotifications,
          priority: lp.Priority.gold,
          color: 'paleVioletRed',
          label: 'Push Notifications',
          description: 'Keep your users engaged.',
          url:
            'https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications',
          videoUrl: 'https://www.youtube.com/watch?v=N9zpRvFRmj8',
          children: {},
        },
        deviceApis: {
          Logo: DeviceApis,
          priority: lp.Priority.gold,
          color: 'blueViolet',
          label: "Device API's",
          description: 'Access to camera, bluetooth and more.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API',
          videoUrl: 'https://www.youtube.com/watch?v=06MV79PPMEo',
          children: {},
        },
      },
    },
    debugging: {
      Logo: Debugging,
      priority: lp.Priority.platinum,
      color: 'maroon',
      label: 'Debugging',
      description: 'Complexity has nowhere to hide.',
      url: 'https://www.w3schools.com/js/js_debugging.asp',
      videoUrl: 'https://www.youtube.com/watch?v=gaminoBsQx0',
      children: {
        chromeDevTools: {
          Logo: ChromeDevTools,
          priority: lp.Priority.platinum,
          color: 'sandyBrown',
          label: 'Chrome DevTools',
          description: "See what's under the hood of a website.",
          url:
            'https://developers.google.com/web/tools/chrome-devtools/javascript',
          videoUrl: 'https://www.youtube.com/watch?v=x4q86IjJFag',
          children: {
            lighthouse: {
              Logo: Lighthouse,
              priority: lp.Priority.platinum,
              color: 'salmon',
              label: 'LightHouse',
              description: 'Does your app measure up?',
              url: 'https://developers.google.com/web/tools/lighthouse',
              videoUrl: 'https://www.youtube.com/watch?v=d98CAgQNeaM',
              children: {},
            },
          },
        },
      },
    },
    performanceOptimization: {
      Logo: PerformanceOptimization,
      priority: lp.Priority.platinum,
      color: 'hotPink',
      label: 'Performance Optimization',
      description: 'Performance can make or break a site.',
      url:
        'https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization',
      videoUrl: 'https://www.youtube.com/watch?v=YJGCZCaIZkQ',
      children: {
        lazyLoading: {
          Logo: LazyLoading,
          priority: lp.Priority.gold,
          color: 'Moccasin',
          label: 'Lazy Loading',
          description: "'Cuz users don't like to wait for websites to load.",
          url: 'https://en.wikipedia.org/wiki/Lazy_loading',
          videoUrl: 'https://www.youtube.com/watch?v=AActXSWxsRo',
          children: {},
        },
      },
    },
    serverless: {
      Logo: Serverless,
      priority: lp.Priority.platinum,
      color: 'whiteSmoke',
      label: 'Serverless',
      description:
        "Pay only for what you use, don't worry scalability and more.",
      url: 'https://www.cloudflare.com/learning/serverless/what-is-serverless/',
      videoUrl: 'https://www.youtube.com/watch?v=wWEID0d6wfo',
      children: {
        firebase: {
          Logo: Firebase,
          priority: lp.Priority.gold,
          color: '#FFCA2A',
          label: 'Firebase',
          description: 'Authentication, database, file storage and much more.',
          url: 'https://firebase.google.com/docs/web/setup',
          videoUrl: 'https://www.youtube.com/watch?v=9kRgVxULbag',
          children: {},
        },
        aws: {
          Logo: Aws,
          priority: lp.Priority.gold,
          color: '#EC912D',
          label: 'Amazon Web Services',
          description: "World's most popular cloud infrastructure.",
          url: 'https://aws.amazon.com/what-is-aws/?nc2=h_ql_le_int',
          videoUrl: 'https://www.youtube.com/watch?v=3hLmDS179YE',
          children: {},
        },
        netlify: {
          Logo: Netlify,
          priority: lp.Priority.silver,
          color: '#00a396',
          label: 'Netlify',
          description:
            'All-in-one platform for automating modern web projects.',
          url: 'https://docs.netlify.com/',
          videoUrl: 'https://www.youtube.com/watch?v=FMhVXOA54x8',
          children: {},
        },
      },
    },
    websockets: {
      Logo: Websockets,
      priority: lp.Priority.gold,
      color: 'black',
      label: 'Websockets',
      description: 'Real time updates on all of your users devices.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      videoUrl: 'https://www.youtube.com/watch?v=8ARodQ4Wlf4',
      children: {
        socketIo: {
          Logo: SocketIo,
          priority: lp.Priority.gold,
          color: '#555',
          label: 'Socket IO',
          description:
            'Featuring the fastest and most reliable real time engine.',
          url: 'https://socket.io/get-started/chat/',
          videoUrl: 'https://www.youtube.com/watch?v=9HFwJ9hrmls',
          children: {},
        },
      },
    },
    analytics: {
      Logo: Analytics,
      priority: lp.Priority.platinum,
      color: 'orchid',
      label: 'Analytics',
      description: 'Measure what matters.',
      url: 'https://www.usability.gov/what-and-why/web-analytics.html',
      videoUrl: 'https://www.youtube.com/watch?v=PnVZ7_OA7Qo',
      children: {
        googleAnalytics: {
          Logo: GoogleAnalytics,
          priority: lp.Priority.gold,
          color: '#F9AB00',
          label: 'Google Analytics',
          description: 'The OG Analytics toolkit.',
          url: 'https://support.google.com/analytics/answer/1008015?hl=en',
          videoUrl: 'https://www.youtube.com/watch?v=gBeMELnxdIg',
          children: {},
        },
        mixpanel: {
          Logo: Mixpanel,
          priority: lp.Priority.gold,
          color: '#4284fb',
          label: 'Mix Panel',
          description: 'The new-gen of analytics.',
          url: 'https://mixpanel.com/',
          videoUrl: 'https://www.youtube.com/watch?v=i9GooWBbeyc',
          children: {},
        },
      },
    },
    ssr: {
      Logo: Ssr,
      priority: lp.Priority.gold,
      color: 'dimGrey',
      label: 'Server Side Rendering',
      description: 'Achieve great loading speeds, SEO and more.',
      url:
        'https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38',
      videoUrl: 'https://www.youtube.com/watch?v=RAhYnK0v3rk',
      children: {
        next,
        angularUniversal: {
          Logo: AngularUniversal,
          priority: lp.Priority.gold,
          color: '#C3002F',
          label: 'Angular Universal',
          description: 'Hybrid static & server rendering for Angular.',
          url: 'https://angular.io/guide/universal',
          videoUrl: 'https://www.youtube.com/watch?v=wij2-gyG12E',
          children: {},
          associations: ['frontend/frameworks/angular'],
        },
        nuxt,
      },
    },
    graphql: {
      Logo: Graphql,
      priority: lp.Priority.gold,
      color: 'deepPink',
      label: 'GraphQL',
      description: "Type safe and developer friendly API's.",
      url: 'https://graphql.org/learn/',
      videoUrl: 'https://www.youtube.com/watch?v=ed8SzALpx1Q',
      children: {
        apollo: {
          Logo: Apollo,
          priority: lp.Priority.gold,
          color: '#7156d9',
          label: 'Apollo',
          description: 'GraphQL tooling.',
          url:
            'https://www.apollographql.com/docs/tutorial/introduction/?_ga=2.159108154.1681055173.1599939917-1685203629.1599939917',
          videoUrl: 'https://www.youtube.com/watch?v=mSzUb7f47qk',
          children: {},
        },
        relay: {
          Logo: Relay,
          priority: lp.Priority.silver,
          color: '#f26b00',
          label: 'Relay',
          description: 'GraphQL client for React',
          url: 'https://relay.dev/docs/en/experimental/introduction-to-relay',
          videoUrl: 'https://www.youtube.com/watch?v=xnvzz7Z658I',
          associations: ['frontend/frameworks/react'],
          children: {},
        },
      },
    },
    staticSiteGenerators: {
      Logo: StaticSiteGenerators,
      priority: lp.Priority.gold,
      color: 'purple',
      label: 'Static Site Generators',
      description: 'Perfect for blogs, documentation, landing pages and more.',
      url:
        'https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/',
      videoUrl: 'https://www.youtube.com/watch?v=_wFJj94kSTU',
      children: {
        next,
        gatsby,
        nuxt,
        jekyll: {
          Logo: Jekyll,
          priority: lp.Priority.bronze,
          color: '#D91111',
          label: 'Jekyll',
          description:
            'Transform your text or markdown into static websites or blogs.',
          url: 'https://jekyllrb.com/docs/',
          videoUrl: 'https://www.youtube.com/watch?v=jTlfPfTX64E',
          children: {},
        },
        hugo: {
          Logo: Hugo,
          priority: lp.Priority.bronze,
          color: '#FF4088',
          label: 'Hugo',
          description: 'Promises speed, flexibility and fun.',
          url: 'https://gohugo.io/getting-started/quick-start/',
          videoUrl: 'https://www.youtube.com/watch?v=927wgzzNMEA',
          children: {},
        },
      },
    },
    documentation: {
      Logo: Documentation,
      priority: lp.Priority.gold,
      color: 'sienna',
      label: 'Documentation',
      description:
        'Keep in mind that programmers spend much more time reading code than writing code.',
      url:
        'https://flatlogic.com/blog/writing-documentation-for-your-javascript-project/',
      videoUrl: 'https://www.youtube.com/watch?v=a4L9GhldTHo',
      children: {
        jsDoc: {
          Logo: JsDoc,
          priority: lp.Priority.gold,
          color: '#006FBB',
          label: 'JSDOc',
          description:
            'Pro tip - VSCode has special interactions with your JSDoc annotations.',
          url: 'https://jsdoc.app/about-getting-started.html',
          videoUrl: 'https://www.youtube.com/watch?v=YK-GurROGIg',
          children: {},
        },
        typeDoc: {
          Logo: TypeDoc,
          priority: lp.Priority.gold,
          color: '#9600FF',
          label: 'TypeDOc',
          description: 'Like JSDoc but specially adapted for TypeScript.',
          url: 'https://typedoc.org/',
          videoUrl: 'https://www.youtube.com/watch?v=A2TZg_EDSGQ',
          children: {},
        },
        docusaurus: {
          Logo: Docusaurus,
          priority: lp.Priority.bronze,
          color: '#2e8555',
          label: 'Docosaurus',
          description:
            'Tool for easily maintaining documentation. Powered by markdown, built by React.',
          url: 'https://docusaurus.io/docs/en/installation',
          videoUrl: 'https://www.youtube.com/watch?v=Hl_4Le_0LOc',
          associations: ['frontend-frameworks/react'],
          children: {},
        },
      },
    },
    codeEditors: {
      Logo: CodeEditors,
      priority: lp.Priority.platinum,
      color: 'silver',
      label: 'Code Editors',
      description: 'Your trusted steed.',
      url: 'https://javascript.info/code-editors',
      videoUrl: 'https://www.youtube.com/watch?v=AJnhqf5IRC4',
      children: {
        vsCode: {
          Logo: VsCode,
          priority: lp.Priority.platinum,
          color: '#0066B8',
          label: 'Visual Studio Code',
          description: 'Code editing. Redefined.',
          url: 'https://code.visualstudio.com/',
          videoUrl: 'https://www.youtube.com/watch?v=fnPhJHN0jTE',
          children: {},
        },
      },
    },
    mobileApps: {
      Logo: MobileApps,
      priority: lp.Priority.gold,
      color: 'turquoise',
      label: 'Mobile Apps',
      description: 'Building native mobile apps with web technologies.',
      url:
        'https://www.thedroidsonroids.com/blog/what-is-a-mobile-app-app-development-basics-for-businesses',
      videoUrl: 'https://www.youtube.com/watch?v=ZikVtdopsfY',
      children: {
        reactNative,
        flutter: {
          Logo: Flutter,
          priority: lp.Priority.silver,
          color: '#075b9a',
          label: 'Flutter',
          description:
            'Beautiful, natively compiled applications for mobile and more.',
          url: 'https://flutter.dev/docs',
          videoUrl: 'https://www.youtube.com/watch?v=x0uinJvhNxI',
          children: {},
        },
        ionic: {
          Logo: Ionic,
          priority: lp.Priority.bronze,
          color: '#3880ff',
          label: 'Ionic',
          description: 'Mobile UI toolkit for multiple frameworks.',
          url: 'https://ionicframework.com/getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=qTdwUpQRptc',
          children: {},
        },
      },
    },
    electron: {
      Logo: Electron,
      priority: lp.Priority.silver,
      color: 'cadetBlue',
      label: 'Electron',
      description: 'Cross-platform desktop apps with JS, HTML and CSS.',
      url: 'https://www.electronjs.org/docs',
      videoUrl: 'https://www.youtube.com/watch?v=2RxHQoiDctI',
      children: {},
    },
    webAssembly: {
      Logo: WebAssembly,
      priority: lp.Priority.gold,
      color: 'darkSlateBlue',
      label: 'Web Assembly',
      description:
        'Portable compilation target for programming languages, enabling deployment on the web.',
      url: 'https://webassembly.org/getting-started/developers-guide/',
      videoUrl: 'https://www.youtube.com/watch?v=jGKjKx2vous',
      children: {
        rust: {
          Logo: Rust,
          priority: lp.Priority.gold,
          color: 'sienna',
          label: 'Rust',
          description:
            'Rust is syntactically similar to C++ and provides memory safety without using garbage collection.',
          url: 'https://www.rust-lang.org/learn/get-started',
          videoUrl: 'https://www.youtube.com/watch?v=zF34dRivLOw',
          children: {},
        },
        cpp: {
          Logo: Cpp,
          priority: lp.Priority.silver,
          color: '#6295CB',
          label: 'C++',
          description:
            'Year after year, one of the 5 programming languages - known for exceptional performance and reliability.',
          url: 'https://www.w3schools.com/cpp/',
          videoUrl: 'https://www.youtube.com/watch?v=1v_4dL8l8pQ',
          children: {},
        },
      },
    },
  },
} as lp.IVertex;

export default frontend;
