import { Priority, Vertex } from '../../../models/learning-path';
import fetch from './fetch';

export default {
  priority: Priority.platinum,
  color: '#EFD81D',
  label: '{ } JavaScript',
  description: 'The first language of the web.',
  url: 'https://www.w3schools.com/js/',
  videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
  children: {
    dom: {
      priority: Priority.gold,
      color: '#4CAF50',
      label: 'DOM',
      description: 'The virtual representation of your web page.',
      url: 'https://www.w3schools.com/js/js_htmldom.asp',
      videoUrl: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
      children: {},
    },
    dataFetching: {
      priority: Priority.gold,
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
      priority: Priority.gold,
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
  },
} as Vertex;
