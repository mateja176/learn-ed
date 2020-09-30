import Ajax from '../../../assets/ajax.svg';
import Algorithms from '../../../assets/algorithms.svg';
import ArrayMethods from '../../../assets/arrayMethods.svg';
import AsyncAwait from '../../../assets/asyncAwait.svg';
import BeyondEs6 from '../../../assets/beyondEs6.svg';
import Chart from '../../../assets/chart.svg';
import DataFetching from '../../../assets/dataFetching.svg';
import DataStructures from '../../../assets/dataStructures.svg';
import Destructuring from '../../../assets/destructuring.svg';
import Dom from '../../../assets/dom.svg';
import Es6 from '../../../assets/es6.svg';
import Es6Modules from '../../../assets/es6Modules.svg';
import EventLoop from '../../../assets/eventLoop.svg';
import Faker from '../../../assets/faker.svg';
import History from '../../../assets/history.svg';
import Immutable from '../../../assets/immutable.svg';
import Javascript from '../../../assets/javascript.svg';
import Lodash from '../../../assets/lodash.svg';
import Moment from '../../../assets/moment.svg';
import ObjectEntries from '../../../assets/objectEntries.svg';
import OptionalChaining from '../../../assets/optionalChaining.svg';
import Promises from '../../../assets/promises.svg';
import Ramda from '../../../assets/ramda.svg';
import Regex from '../../../assets/regex.svg';
import RestAndSpread from '../../../assets/restAndSpread.svg';
import TemplateLiterals from '../../../assets/templateLiterals.svg';
import TheWeirdParts from '../../../assets/theWeirdParts.svg';
import Underscore from '../../../assets/underscore.svg';
import UtilityLibraries from '../../../assets/utilityLibraries.svg';
import VariableDeclaration from '../../../assets/variableDeclaration.svg';
import { IVertex, Priority } from '../../../models/learning-path';
import fetch from './fetch';

const javascript: IVertex = {
  Logo: Javascript,
  priority: Priority.platinum,
  label: '{ } JavaScript',
  description: 'The first language of the web.',
  url: 'https://www.w3schools.com/js/',
  videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
  children: {
    dom: {
      Logo: Dom,
      priority: Priority.platinum,
      label: 'DOM',
      description: 'The virtual representation of your web page.',
      url: 'https://www.w3schools.com/js/js_htmldom.asp',
      videoUrl: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
      children: {
        history: {
          Logo: History,
          priority: Priority.platinum,
          label: 'History API',
          description: 'Basis for single page app routing.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
          videoUrl: 'https://www.youtube.com/watch?v=C9vsQkMu5gk',
          children: {},
        },
      },
    },
    dataFetching: {
      Logo: DataFetching,
      priority: Priority.platinum,
      label: 'Data Fetching',
      description: "Can't get enough of data.",
      url:
        'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data',
      videoUrl: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
      children: {
        ajax: {
          Logo: Ajax,
          priority: Priority.gold,
          label: 'AJAX',
          description:
            "To get data from the server, you don't have to fetch a whole new page.",
          url: 'https://www.w3schools.com/js/js_ajax_intro.asp',
          videoUrl: 'https://www.youtube.com/watch?v=82hnvUYY6QA',
          children: {},
        },
        fetch,
      },
    },
    es6: {
      Logo: Es6,
      priority: Priority.platinum,
      label: 'ES6',
      description: 'The modern JavaScript.',
      url: 'http://es6-features.org/',
      videoUrl: 'https://www.youtube.com/watch?v=IEf1KAcK6A8',
      children: {
        es6Modules: {
          Logo: Es6Modules,
          priority: Priority.gold,
          label: 'ES6 Modules',
          description: "Don't pollute the global scope.",
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
          videoUrl: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          children: {},
        },
        arrayMethods: {
          Logo: ArrayMethods,
          priority: Priority.gold,
          label: 'Array methods',
          description: "You'll be using these all the time.",
          url: 'https://www.w3schools.com/jsref/jsref_obj_array.asp',
          videoUrl: 'https://www.youtube.com/watch?v=rRgD1yVwIvE',
          children: {},
        },
        variableDeclaration: {
          Logo: VariableDeclaration,
          priority: Priority.gold,
          label: 'Variable Declaration',
          description: 'Know your scope.',
          url:
            'https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/',
          videoUrl: 'https://www.youtube.com/watch?v=1mgLWu69ijU',
          children: {},
        },
        promises: {
          Logo: Promises,
          priority: Priority.gold,
          label: 'Promises',
          description: 'One of the most beloved JS features.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
          videoUrl: 'https://www.youtube.com/watch?v=DHvZLI7Db8E',
          children: {},
        },
        templateLiterals: {
          Logo: TemplateLiterals,
          priority: Priority.gold,
          label: 'Template Literals',
          description: 'Before template string people used the "+" operator.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals',
          videoUrl: 'https://www.youtube.com/watch?v=NgF9-pdTDGs',
          children: {},
        },
        restAndSpread: {
          Logo: RestAndSpread,
          priority: Priority.gold,
          label: 'Rest and Spread',
          description: 'Mix and match.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
          videoUrl: 'https://www.youtube.com/watch?v=iLx4ma8ZqvQ',
          children: {},
        },
        destructuring: {
          Logo: Destructuring,
          priority: Priority.gold,
          label: 'Destructuring',
          description: 'You better add this word to your dictionary.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
          videoUrl: 'https://www.youtube.com/watch?v=NIq3qLaHCIs',
          children: {},
        },
      },
    },
    utilityLibraries: {
      Logo: UtilityLibraries,
      priority: Priority.gold,
      label: 'Utility Libraries',
      description: 'The swiss army knife of JavaScript.',
      url:
        'https://blog.bitsrc.io/11-javascript-utility-libraries-you-should-know-in-2018-3646fb31ade',
      videoUrl: 'https://www.youtube.com/watch?v=dM-Zj6J0fBY',
      children: {
        lodash: {
          Logo: Lodash,
          priority: Priority.gold,
          label: 'Lodash',
          description:
            'A modern JavaScript utility library delivering modularity, performance & extras.',
          url: 'https://lodash.com/',
          videoUrl: 'https://www.youtube.com/watch?v=cqw2i0HIj74',
          children: {},
        },
        underscore: {
          Logo: Underscore,
          priority: Priority.gold,
          label: 'Underscore',
          description: 'Useful functional programming helpers',
          url: 'https://underscorejs.org/',
          videoUrl: 'https://www.youtube.com/watch?v=ywa8BseljUM',
          children: {},
        },
        ramda: {
          Logo: Ramda,
          priority: Priority.gold,
          label: 'Ramda',
          description:
            'A practical functional library for JavaScript programmers.',
          url: 'https://ramdajs.com/',
          videoUrl: 'https://www.youtube.com/watch?v=AINnOyUVEyI',
          children: {},
        },
        moment: {
          Logo: Moment,
          priority: Priority.gold,
          label: 'Moment',
          description: 'Take a moment to look at how it is to work with dates.',
          url: 'https://momentjs.com/',
          videoUrl: 'https://www.youtube.com/watch?v=n80RRNS1k64',
          children: {},
        },
        faker: {
          Logo: Faker,
          priority: Priority.gold,
          label: 'Faker',
          description: 'Generate as much testing data as you need.',
          url: 'https://github.com/Marak/faker.js',
          videoUrl: 'https://www.youtube.com/watch?v=16p3LC1bFZc',
          children: {},
        },
        chart: {
          Logo: Chart,
          priority: Priority.gold,
          label: 'Chart JS',
          description: 'Simple yet flexible JavaScript charting.',
          url: 'https://github.com/chartjs/Chart.js',
          videoUrl: 'https://www.youtube.com/watch?v=sE08f4iuOhA',
          children: {},
        },
        immutable: {
          Logo: Immutable,
          priority: Priority.gold,
          label: 'Immutable JS',
          description:
            'Data which cannot be changed once created leads to much simpler application development.',
          url: 'https://immutable-js.github.io/immutable-js/',
          videoUrl: 'https://www.youtube.com/watch?v=9M-r8p9ey8U',
          children: {},
        },
      },
    },
    regex: {
      Logo: Regex,
      priority: Priority.gold,
      label: 'Regular Expression',
      description: 'Patterns used to match character combinations in strings.',
      url:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
      videoUrl: 'https://www.youtube.com/watch?v=rhzKDrUiJVk',
      children: {},
    },
    beyondEs6: {
      Logo: BeyondEs6,
      priority: Priority.gold,
      label: 'Beyond ES6',
      description: 'The present and future of JavaScript.',
      url: 'https://github.com/tc39/proposals',
      videoUrl: 'https://www.youtube.com/watch?v=hCenHYqE7R4',
      children: {
        asyncAwait: {
          Logo: AsyncAwait,
          priority: Priority.gold,
          label: 'Async Await',
          description: 'A long awaited feature.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
          videoUrl: 'https://www.youtube.com/watch?v=vn3tm0quoqE',
          children: {},
        },
        optionalChaining: {
          Logo: OptionalChaining,
          priority: Priority.gold,
          label: 'Optional Chaining',
          description:
            "I didn't know how much I missed this feature until I started using it.",
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining',
          videoUrl: 'https://www.youtube.com/watch?v=FKRVqtP8o48',
          children: {},
        },
        objectEntries: {
          Logo: ObjectEntries,
          priority: Priority.gold,
          label: 'Object entries',
          description:
            'Also a  common use case is to assemble an object from key value pairs.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
          videoUrl:
            'https://www.youtube.com/watch?v=VmicKaGcs5https://www.youtube.com/watch?v=cNiYENUlY28g',
          children: {},
        },
      },
    },
    dataStructures: {
      Logo: DataStructures,
      priority: Priority.gold,
      label: 'Data Structures',
      description: 'This application is a tree.',
      url:
        'https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c',
      videoUrl: 'https://www.youtube.com/watch?v=41GSinwoMYA',
      children: {},
    },
    algorithms: {
      Logo: Algorithms,
      priority: Priority.gold,
      label: 'Algorithms',
      description:
        "The majority of which you don't have to know by heart, but it's helpful to know that they exist.",
      url:
        'https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c',
      videoUrl: 'https://www.youtube.com/watch?v=41GSinwoMYA',
      children: {},
    },
    eventLoop: {
      Logo: EventLoop,
      priority: Priority.gold,
      label: 'Event Loop',
      description: 'If it where easy, everyone would do it.',
      url: 'https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop',
      videoUrl: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
      children: {},
    },
    theWeirdParts: {
      Logo: TheWeirdParts,
      priority: Priority.gold,
      label: 'The weird parts',
      description: 'If it where easy, everyone would do it.',
      url:
        'https://github.com/jasonbaciulis/javascript-understanding-the-weird-parts',
      videoUrl: 'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts',
      children: {},
    },
  },
};

export default javascript;
