import * as lp from '../../../models/learning-path';

const react = {
  priority: lp.Priority.platinum,
  color: '#61DAFB',
  label: 'React',
  description: 'Widely popular, functional and declarative.',
  url: 'https://reactjs.org/docs/getting-started.html',
  videoUrl: 'https://www.youtube.com/watch?v=9U3IhLAnSxM',
  children: {
    basics: {
      priority: lp.Priority.platinum,
      color: 'slateGray',
      label: 'Basics',
      description: 'After some practice, this will become second nature.',
      url: 'https://reactjs.org/docs/hello-world.html',
      videoUrl: 'https://www.youtube.com/watch?v=hQAHSlTtcmY',
      children: {
        jsx: {
          priority: lp.Priority.platinum,
          color: 'darkMagenta',
          label: 'JSX',
          description: 'Learn the rules, to know how to break them properly.',
          url: 'https://reactjs.org/docs/introducing-jsx.html',
          videoUrl: 'https://www.youtube.com/watch?v=yc8fg7gWbBA',
          children: {},
        },
        components: {
          priority: lp.Priority.platinum,
          color: '#353B45',
          label: 'Components',
          description: 'Everything is a component.',
          url: 'https://www.w3schools.com/react/react_components.asp',
          videoUrl: 'https://www.youtube.com/watch?v=fd2Cayhez58',
          children: {},
        },
        props: {
          priority: lp.Priority.platinum,
          color: 'antiqueWhite',
          label: 'Props',
          description: 'Basic data flow.',
          url: 'https://reactjs.org/docs/components-and-props.html',
          videoUrl: 'https://www.youtube.com/watch?v=GIU8ekYndKw',
          children: {},
        },
        state: {
          priority: lp.Priority.platinum,
          color: 'fuchsia',
          label: 'State',
          description: 'Yin and yang, state and props.',
          url: 'https://reactjs.org/docs/faq-state.html',
          videoUrl: 'https://www.youtube.com/watch?v=e5n9j9n83OM',
          children: {},
        },
        conditionalRendering: {
          priority: lp.Priority.platinum,
          color: 'lightgray',
          label: 'Conditional rendering',
          description: "Now you see it, and now you don't.",
          url: 'https://reactjs.org/docs/conditional-rendering.html',
          videoUrl: 'https://www.youtube.com/watch?v=3wvdq_j5S1c',
          children: {},
        },
        listsAndKeys: {
          priority: lp.Priority.platinum,
          color: 'seaGreen',
          label: 'Lists and Keys',
          description: 'Yin and yang, state and props.',
          url: 'https://reactjs.org/docs/lists-and-keys.html',
          videoUrl: 'https://www.youtube.com/watch?v=tJYBMSuOX3s',
          children: {},
        },
        reactHooks: {
          priority: lp.Priority.platinum,
          color: '#20232A',
          label: 'React Hooks',
          description:
            'Use state and other React features without writing a class.',
          url: 'https://reactjs.org/docs/hooks-intro.html',
          videoUrl: 'https://www.youtube.com/watch?v=mxK8b99iJTg',
          children: {},
        },
        cra: {
          priority: lp.Priority.gold,
          color: 'darkGoldenRod',
          label: 'Create React App',
          description: 'The React CLI.',
          url: 'https://reactjs.org/docs/create-a-new-react-app.html',
          videoUrl: 'https://www.youtube.com/watch?v=eCz3rhsDG5s',
          children: {},
        },
      },
    },
    advancedTopics: {
      priority: lp.Priority.platinum,
      color: 'royalBlue',
      label: 'Advanced Topics',
      description: 'Learn the rules, to know how to break them properly.',
      url: 'https://reactresources.com/topics/advanced-concepts',
      videoUrl: 'https://www.youtube.com/watch?v=lG6Z0FQj_SI',
      children: {
        context: {
          priority: lp.Priority.platinum,
          color: 'crimson',
          label: 'Context API',
          description: 'Just like words, components can depend on the context.',
          url: 'https://reactjs.org/docs/context.html',
          videoUrl: 'https://www.youtube.com/watch?v=XLJN4JfniH4',
          children: {},
        },
        renderProps: {
          priority: lp.Priority.gold,
          color: 'mediumTurquoise',
          label: 'Render Props',
          description: 'Inversion of control ala React.',
          url: 'https://reactjs.org/docs/render-props.html',
          videoUrl: 'https://www.youtube.com/watch?v=3ic-f1AYLWU',
          children: {},
        },
        higherOrderComponents: {
          priority: lp.Priority.gold,
          color: 'mistyRose',
          label: 'Higher order components.',
          description: 'A component which returns a component.',
          url: 'https://reactjs.org/docs/higher-order-components.html',
          videoUrl: 'https://www.youtube.com/watch?v=A9_9gQIkfx4',
          children: {},
        },
        refs: {
          priority: lp.Priority.platinum,
          color: 'rebeccaPurple',
          label: 'Refs',
          description:
            'A powerful pattern borrowed from imperative programming. Use with caution.',
          url: 'https://reactjs.org/docs/refs-and-the-dom.html',
          videoUrl: 'https://www.youtube.com/watch?v=tiytyGEodl0',
          children: {},
        },
        refForwarding: {
          priority: lp.Priority.platinum,
          color: 'rosyBrown',
          label: 'Ref forwarding',
          description: 'Pass on the torch.',
          url: 'https://reactjs.org/docs/forwarding-refs.html',
          videoUrl: 'https://www.youtube.com/watch?v=ScT4ElKd6eo',
          children: {},
        },
        errorBoundaries: {
          priority: lp.Priority.gold,
          color: 'mediumVioletRed',
          label: 'Error Boundaries',
          description: "Catch 'em by surprise.",
          url: 'https://reactjs.org/docs/error-boundaries.html',
          videoUrl: 'https://www.youtube.com/watch?v=DNYXgtZBRPE',
          children: {},
        },
        portals: {
          priority: lp.Priority.silver,
          color: 'thistle',
          label: 'Portals',
          description: "I'll take your brain to another dimension.",
          url: 'https://reactjs.org/docs/portals.html',
          videoUrl: 'https://www.youtube.com/watch?v=LyLa7dU5tp8',
          children: {},
        },
        codeSplitting: {
          priority: lp.Priority.gold,
          color: 'peru',
          label: 'Bundle Splitting',
          description: 'Simple way to increase load performance of you app.',
          url: 'https://reactjs.org/docs/code-splitting.html',
          videoUrl: 'https://www.youtube.com/watch?v=tV9gvls8IP8',
          children: {},
        },
        fiber: {
          priority: lp.Priority.gold,
          color: 'mintCream',
          label: 'Fiber Architecture',
          description: "Freakin' React and how does it work?",
          url: 'https://reactjs.org/docs/reconciliation.html',
          videoUrl: 'https://www.youtube.com/watch?v=ZCuYPiUIONs',
          children: {},
        },
      },
    },
    philosophy: {
      priority: lp.Priority.platinum,
      color: 'snow',
      label: 'React Philosophy',
      description: 'Philosophy is not just for philosophers.',
      url: 'https://reactjs.org/docs/thinking-in-react.html',
      videoUrl: 'https://www.youtube.com/watch?v=H1vW1w8k7J0',
      children: {},
    },
    stateManagement: {
      priority: lp.Priority.platinum,
      color: '#C6332B',
      label: 'State Management',
      description: 'A React app is a function of its state',
      url: 'https://reactjs.org/docs/state-and-lifecycle.html',
      videoUrl: 'https://www.youtube.com/watch?v=4ORZ1GmjaMc',
      children: {
        useState: {
          priority: lp.Priority.platinum,
          color: 'maroon',
          label: 'useState Hook',
          description: 'The new standard for local component state.',
          url: 'https://reactjs.org/docs/hooks-state.html',
          videoUrl: 'https://www.youtube.com/watch?v=O6P86uwfdR0',
          children: {},
        },
        useReducer: {
          priority: lp.Priority.platinum,
          color: 'purple',
          label: 'useReducer',
          description: 'Redux in a hook.',
          url: 'https://reactjs.org/docs/hooks-reference.html#usereducer',
          videoUrl: 'https://www.youtube.com/watch?v=kK_Wqx3RnHk',
          children: {},
        },
        useContext: {
          priority: lp.Priority.platinum,
          color: 'yellow',
          label: 'useContext',
          description: 'Prop drill, no more.',
          url: 'https://reactjs.org/docs/hooks-reference.html#usecontext',
          videoUrl: 'https://www.youtube.com/watch?v=lhMKvyLRWo0',
          children: {},
        },
        redux: {
          priority: lp.Priority.gold,
          color: '#1C1E21',
          label: 'Redux',
          description: 'Manage global state, the easy way',
          url: 'https://redux.js.org/introduction/getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=poQXNp9ItL4',
          children: {},
        },
        mobX: {
          priority: lp.Priority.gold,
          color: '#E15F12',
          description: 'State management with functional reactive programming.',
          label: 'MobX',
          url: 'https://mobx.js.org/README.html#getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=oQiMXRsO4o4',
          children: {},
        },
      },
    },
    routing: {
      priority: lp.Priority.platinum,
      color: '#CA4245',
      label: 'React Router',
      description: 'Learn once, route anywhere.',
      url:
        'https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e',
      videoUrl: 'https://www.youtube.com/watch?v=sLobT_UKKdw',
      children: {
        reactRouter: {
          priority: lp.Priority.platinum,
          color: '#CA4245',
          label: 'React Router',
          description: 'Learn once, route anywhere.',
          url: 'https://reactrouter.com/web/guides/quick-start',
          videoUrl: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
          children: {},
        },
      },
    },
    styling: {
      priority: lp.Priority.platinum,
      color: 'lightPink',
      label: 'Styling',
      description: 'The great artist is the simplifier.',
      url: 'https://reactjs.org/docs/faq-styling.html',
      videoUrl: 'https://www.youtube.com/watch?v=NMiEREulVLc&t=108s',
      children: {},
    },
    forms: {
      priority: lp.Priority.platinum,
      color: 'lightBlue',
      label: 'Forms',
      description: 'Can be a nightmare, if not done right.',
      url: 'https://reactjs.org/docs/forms.html',
      videoUrl: 'https://www.youtube.com/watch?v=qH4pJISKeoI',
      children: {},
    },
    testing: {
      priority: lp.Priority.platinum,
      color: 'gold',
      label: 'Testing in React',
      description: 'A good test suite can be your best friend.',
      url: 'https://reactjs.org/docs/testing.html',
      videoUrl: 'https://www.youtube.com/watch?v=D9DdY2WmM-s',
      children: {},
    },
    apiCalls: {
      priority: lp.Priority.platinum,
      color: 'orangeRed',
      label: 'API Calls in React',
      description: 'Where does data come from?',
      url: 'https://reactjs.org/docs/faq-ajax.html',
      videoUrl: 'https://www.youtube.com/watch?v=T3Px88x_PsA',
      children: {},
    },
    designSystem: {
      priority: lp.Priority.gold,
      color: 'coral',
      label: 'Design Systems',
      description: 'The discipline pays back more than double.',
      url: 'https://github.com/jbranchaud/awesome-react-design-systems',
      videoUrl: 'https://www.youtube.com/watch?v=W81dlS5G8Gs',
      children: {},
    },
    componentLibraries: {
      priority: lp.Priority.gold,
      color: '#1976D2',
      label: 'React Component Libraries',
      description: 'Sometimes all the puzzle pieces fall into place.',
      url: 'https://github.com/brillout/awesome-react-components',
      videoUrl: 'https://www.youtube.com/watch?v=N8d-CLmg3hw',
      children: {},
    },
    serverRendering: {
      priority: lp.Priority.gold,
      color: 'lightSeaGreen',
      label: 'Server Rendering',
      description: 'Rendering React apps on the server is easy.',
      url: 'https://reactjs.org/docs/react-dom-server.html',
      videoUrl: 'https://www.youtube.com/watch?v=tsEHfL-Ul1Y',
      children: {},
    },
    reactNative: {
      priority: lp.Priority.silver,
      color: 'darkBlue',
      label: 'React Native',
      description: 'The power of React applied to native apps.',
      url: 'https://reactnative.dev/docs/getting-started',
      videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
      children: {},
    },
  },
} as lp.Vertex;

export default react;