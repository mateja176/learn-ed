import { IVertex, Priority } from '../../../models/learning-path';
import fetch from './fetch';

const javascript: IVertex = {
  priority: Priority.platinum,
  color: '#EFD81D',
  label: '{ } JavaScript',
  description: 'The first language of the web.',
  url: 'https://www.w3schools.com/js/',
  videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
  children: {
    dom: {
      priority: Priority.platinum,
      color: '#4CAF50',
      label: 'DOM',
      description: 'The virtual representation of your web page.',
      url: 'https://www.w3schools.com/js/js_htmldom.asp',
      videoUrl: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
      children: {
        history: {
          priority: Priority.platinum,
          color: 'limeGreen',
          label: 'History',
          description: 'Basis for of single page routing.',
          url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
          videoUrl: 'https://www.youtube.com/watch?v=C9vsQkMu5gk',
          children: {},
        },
      },
    },
    dataFetching: {
      priority: Priority.platinum,
      color: 'tomato',
      label: 'Data Fetching',
      description: "Can't get enough of data.",
      url:
        'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data',
      videoUrl: 'https://www.youtube.com/watch?v=PoRJizFvM7s',
      children: {
        ajax: {
          priority: Priority.gold,
          color: 'orange',
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
      priority: Priority.platinum,
      color: 'royalBlue',
      label: 'ES6',
      description: 'The modern JavaScript.',
      url: 'http://es6-features.org/',
      videoUrl: 'https://www.youtube.com/watch?v=IEf1KAcK6A8',
      children: {
        es6Modules: {
          priority: Priority.gold,
          color: 'steelBlue',
          label: 'ES6 Modules',
          description: "Don't pollute the global scope.",
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
          videoUrl: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          children: {},
        },
        arrayMethods: {
          priority: Priority.gold,
          color: 'mediumOrchid',
          label: 'Array methods',
          description: "You'll be using these all the time.",
          url: 'https://www.w3schools.com/jsref/jsref_obj_array.asp',
          videoUrl: 'https://www.youtube.com/watch?v=rRgD1yVwIvE',
          children: {},
        },
        variableDeclaration: {
          priority: Priority.gold,
          color: 'teal',
          label: 'Variable Declaration',
          description: 'Know your scope.',
          url:
            'https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/',
          videoUrl: 'https://www.youtube.com/watch?v=1mgLWu69ijU',
          children: {},
        },
        promises: {
          priority: Priority.gold,
          color: 'plum',
          label: 'Promises',
          description: 'One of the most beloved JS features.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
          videoUrl: 'https://www.youtube.com/watch?v=DHvZLI7Db8E',
          children: {},
        },
        templateLiterals: {
          priority: Priority.gold,
          color: 'paleTurquoise',
          label: 'Template Literals',
          description: 'Before template string people used the "+" operator.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals',
          videoUrl: 'https://www.youtube.com/watch?v=NgF9-pdTDGs',
          children: {},
        },
        restAndSpread: {
          priority: Priority.gold,
          color: 'midnightBlue',
          label: 'Rest and Spread',
          description: 'Mix and match.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
          videoUrl: 'https://www.youtube.com/watch?v=iLx4ma8ZqvQ',
          children: {},
        },
        destructuring: {
          priority: Priority.gold,
          color: 'slateBlue',
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
      priority: Priority.gold,
      color: 'darkGoldenRod',
      label: 'Utility Libraries',
      description: 'The swiss army knife of JavaScript.',
      url:
        'https://blog.bitsrc.io/11-javascript-utility-libraries-you-should-know-in-2018-3646fb31ade',
      videoUrl: 'https://www.youtube.com/watch?v=dM-Zj6J0fBY',
      children: {
        lodash: {
          priority: Priority.gold,
          color: '#3492ff',
          label: 'Lodash',
          description:
            'A modern JavaScript utility library delivering modularity, performance & extras.',
          url: 'https://lodash.com/',
          videoUrl: 'https://www.youtube.com/watch?v=cqw2i0HIj74',
          children: {},
        },
        underscore: {
          priority: Priority.gold,
          color: '#0071B5',
          label: 'Underscore',
          description: 'Useful functional programming helpers',
          url: 'https://underscorejs.org/',
          videoUrl: 'https://www.youtube.com/watch?v=ywa8BseljUM',
          children: {},
        },
        ramda: {
          priority: Priority.gold,
          color: '#884499',
          label: 'Ramda',
          description:
            'A practical functional library for JavaScript programmers.',
          url: 'https://ramdajs.com/',
          videoUrl: 'https://www.youtube.com/watch?v=AINnOyUVEyI',
          children: {},
        },
        moment: {
          priority: Priority.gold,
          color: '#6782DA',
          label: 'Moment',
          description: 'Take a moment to look at how it is to work with dates.',
          url: 'https://momentjs.com/',
          videoUrl: 'https://www.youtube.com/watch?v=n80RRNS1k64',
          children: {},
        },
        faker: {
          priority: Priority.gold,
          color: '#D90000',
          label: 'Faker',
          description: 'Generate as much testing data as you need.',
          url: 'https://github.com/Marak/faker.js',
          videoUrl: 'https://www.youtube.com/watch?v=16p3LC1bFZc',
          children: {},
        },
        chart: {
          priority: Priority.gold,
          color: '#FE767A',
          label: 'Chart JS',
          description: 'Simple yet flexible JavaScript charting.',
          url: 'https://github.com/chartjs/Chart.js',
          videoUrl: 'https://www.youtube.com/watch?v=sE08f4iuOhA',
          children: {},
        },
        immutable: {
          priority: Priority.gold,
          color: '#2C3E50',
          label: 'Immutable JS',
          description:
            'Data which cannot be changed once created leads to much simpler application development.',
          url: 'https://immutable-js.github.io/immutable-js/',
          videoUrl: 'https://www.youtube.com/watch?v=9M-r8p9ey8U',
          children: {},
        },
      },
    },
    regularExpression: {
      priority: Priority.gold,
      color: 'dodgerBlue',
      label: 'Regular Expression',
      description: 'Patterns used to match character combinations in strings.',
      url:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
      videoUrl: 'https://www.youtube.com/watch?v=rhzKDrUiJVk',
      children: {},
    },
    beyondEs6: {
      priority: Priority.gold,
      color: 'navy',
      label: 'Beyond ES6',
      description: 'The present and future of JavaScript.',
      url: 'https://github.com/tc39/proposals',
      videoUrl: 'https://www.youtube.com/watch?v=hCenHYqE7R4',
      children: {
        asyncAwait: {
          priority: Priority.gold,
          color: 'crimson',
          label: 'Async Await',
          description: 'A long awaited feature.',
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
          videoUrl: 'https://www.youtube.com/watch?v=vn3tm0quoqE',
          children: {},
        },
        optionalChaining: {
          priority: Priority.gold,
          color: 'yellow',
          label: 'Optional Chaining',
          description:
            "I didn't know how much I missed this feature until I started using it.",
          url:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining',
          videoUrl: 'https://www.youtube.com/watch?v=FKRVqtP8o48',
          children: {},
        },
        objectEntries: {
          priority: Priority.gold,
          color: 'lavender',
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
      priority: Priority.gold,
      color: 'cornflowerBlue',
      label: 'Data Structures',
      description: 'This application is a tree.',
      url:
        'https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c',
      videoUrl: 'https://www.youtube.com/watch?v=41GSinwoMYA',
      children: {},
    },
    algorithms: {
      priority: Priority.gold,
      color: 'fireBrick',
      label: 'Algorithms',
      description:
        "The majority of which you don't have to know by heart, but it's helpful to know that they exist.",
      url:
        'https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c',
      videoUrl: 'https://www.youtube.com/watch?v=41GSinwoMYA',
      children: {},
    },
    eventLoop: {
      priority: Priority.gold,
      color: '#0099FF',
      label: 'Event Loop',
      description: 'If it where easy, everyone would do it.',
      url: 'https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop',
      videoUrl: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
      children: {},
    },
    theWeirdParts: {
      priority: Priority.gold,
      color: 'gray',
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
