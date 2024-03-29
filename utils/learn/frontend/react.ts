import AdvancedTopics from '../../../assets/advancedTopics.svg';
import ApiCalls from '../../../assets/apiCalls.svg';
import Axios from '../../../assets/axios.svg';
import Basics from '../../../assets/basics.svg';
import Braid from '../../../assets/braid.svg';
import BundleSplitting from '../../../assets/bundleSplitting.svg';
import Components from '../../../assets/components.svg';
import ConditionalRendering from '../../../assets/conditionalRendering.svg';
import Context from '../../../assets/context.svg';
import Cra from '../../../assets/cra.svg';
import Declarativity from '../../../assets/declarativity.svg';
import DesignSystems from '../../../assets/designSystems.svg';
import Enzyme from '../../../assets/enzyme.svg';
import ErrorBoundaries from '../../../assets/errorBoundaries.svg';
import Fiber from '../../../assets/fiber.svg';
import Formik from '../../../assets/formik.svg';
import Forms from '../../../assets/forms.svg';
import FunctionalProgramming from '../../../assets/functionalProgramming.svg';
import HigherOrderComponents from '../../../assets/higherOrderComponents.svg';
import HigherOrderFunctions from '../../../assets/higherOrderFunctions.svg';
import Immutability from '../../../assets/immutability.svg';
import Jsx from '../../../assets/jsx.svg';
import ListsAndKeys from '../../../assets/listsAndKeys.svg';
import MobX from '../../../assets/mobX.svg';
import Monads from '../../../assets/monads.svg';
import Philosophy from '../../../assets/philosophy.svg';
import Portals from '../../../assets/portals.svg';
import Props from '../../../assets/props.svg';
import ReachRouter from '../../../assets/reachRouter.svg';
import React from '../../../assets/react.svg';
import ReactHookForm from '../../../assets/reactHookForm.svg';
import ReactHooks from '../../../assets/reactHooks.svg';
import ReactQuery from '../../../assets/reactQuery.svg';
import ReactRouter from '../../../assets/reactRouter.svg';
import Rebass from '../../../assets/rebass.svg';
import Redux from '../../../assets/redux.svg';
import RefForwarding from '../../../assets/refForwarding.svg';
import Refs from '../../../assets/refs.svg';
import RenderProps from '../../../assets/renderProps.svg';
import Routing from '../../../assets/routing.svg';
import Rxjs from '../../../assets/rxjs.svg';
import Ssr from '../../../assets/ssr.svg';
import State from '../../../assets/state.svg';
import StateManagement from '../../../assets/stateManagement.svg';
import StyledSystem from '../../../assets/styledSystem.svg';
import Styling from '../../../assets/styling.svg';
import Swr from '../../../assets/swr.svg';
import Testing from '../../../assets/testing.svg';
import UseContext from '../../../assets/useContext.svg';
import UseReducer from '../../../assets/useReducer.svg';
import UseState from '../../../assets/useState.svg';
import * as lp from '../../../models/learning-path';
import componentLibraries from './componentLibraries';
import cssModules from './cssModules';
import emotion from './emotion';
import fetch from './fetch';
import gatsby from './gatsby';
import jest from './jest';
import jss from './jss';
import next from './next';
import reactNative from './reactNative';
import styledComponents from './styledComponents';
import testingLibrary from './testingLibrary';

const react = {
  Logo: React,
  priority: lp.Priority.platinum,
  label: '⚛️ React',
  description: 'Widely popular, functional and declarative.',
  url: 'https://reactjs.org/docs/getting-started.html',
  videoUrl: 'https://www.youtube.com/watch?v=9U3IhLAnSxM',
  children: {
    basics: {
      Logo: Basics,
      priority: lp.Priority.platinum,
      label: 'Basics',
      description: 'After some practice, this will become second nature.',
      url: 'https://reactjs.org/docs/hello-world.html',
      videoUrl: 'https://www.youtube.com/watch?v=hQAHSlTtcmY',
      children: {
        philosophy: {
          Logo: Philosophy,
          priority: lp.Priority.platinum,
          label: 'React Philosophy',
          description: 'Philosophy is not just for philosophers.',
          url: 'https://reactjs.org/docs/thinking-in-react.html',
          videoUrl: 'https://www.youtube.com/watch?v=H1vW1w8k7J0',
          children: {},
        },
        jsx: {
          Logo: Jsx,
          priority: lp.Priority.platinum,
          label: 'JSX',
          description: 'Learn the rules, to know how to break them properly.',
          url: 'https://reactjs.org/docs/introducing-jsx.html',
          videoUrl: 'https://www.youtube.com/watch?v=yc8fg7gWbBA',
          children: {},
        },
        components: {
          Logo: Components,
          priority: lp.Priority.platinum,
          label: 'Components',
          description: 'Everything is a component.',
          url: 'https://www.w3schools.com/react/react_components.asp',
          videoUrl: 'https://www.youtube.com/watch?v=fd2Cayhez58',
          children: {},
        },
        props: {
          Logo: Props,
          priority: lp.Priority.platinum,
          label: 'Props',
          description: 'Basic data flow.',
          url: 'https://reactjs.org/docs/components-and-props.html',
          videoUrl: 'https://www.youtube.com/watch?v=GIU8ekYndKw',
          children: {},
        },
        state: {
          Logo: State,
          priority: lp.Priority.platinum,
          label: 'State',
          description: 'Yin and yang, state and props.',
          url: 'https://reactjs.org/docs/faq-state.html',
          videoUrl: 'https://www.youtube.com/watch?v=e5n9j9n83OM',
          children: {},
        },
        conditionalRendering: {
          Logo: ConditionalRendering,
          priority: lp.Priority.platinum,
          label: 'Conditional rendering',
          description: "Now you see it, and now you don't.",
          url: 'https://reactjs.org/docs/conditional-rendering.html',
          videoUrl: 'https://www.youtube.com/watch?v=3wvdq_j5S1c',
          children: {},
        },
        listsAndKeys: {
          Logo: ListsAndKeys,
          priority: lp.Priority.platinum,
          label: 'Lists and Keys',
          description: 'Yin and yang, state and props.',
          url: 'https://reactjs.org/docs/lists-and-keys.html',
          videoUrl: 'https://www.youtube.com/watch?v=tJYBMSuOX3s',
          children: {},
        },
        reactHooks: {
          Logo: ReactHooks,
          priority: lp.Priority.platinum,
          label: 'React Hooks',
          description:
            'Use state and other React features without writing a class.',
          url: 'https://reactjs.org/docs/hooks-intro.html',
          videoUrl: 'https://www.youtube.com/watch?v=mxK8b99iJTg',
          children: {},
        },
        cra: {
          Logo: Cra,
          priority: lp.Priority.gold,
          label: 'Create React App',
          description: 'The React CLI.',
          url: 'https://reactjs.org/docs/create-a-new-react-app.html',
          videoUrl: 'https://www.youtube.com/watch?v=eCz3rhsDG5s',
          children: {},
        },
      },
    },
    advancedTopics: {
      Logo: AdvancedTopics,
      priority: lp.Priority.platinum,
      label: 'Advanced Topics',
      description: 'Learn the rules, to know how to break them properly.',
      url: 'https://reactresources.com/topics/advanced-concepts',
      videoUrl: 'https://www.youtube.com/watch?v=lG6Z0FQj_SI',
      children: {
        context: {
          Logo: Context,
          priority: lp.Priority.platinum,
          label: 'Context API',
          description: 'Just like words, components can depend on the context.',
          url: 'https://reactjs.org/docs/context.html',
          videoUrl: 'https://www.youtube.com/watch?v=XLJN4JfniH4',
          children: {},
        },
        renderProps: {
          Logo: RenderProps,
          priority: lp.Priority.gold,
          label: 'Render Props',
          description: 'Inversion of control ala React.',
          url: 'https://reactjs.org/docs/render-props.html',
          videoUrl: 'https://www.youtube.com/watch?v=3ic-f1AYLWU',
          children: {},
        },
        higherOrderComponents: {
          Logo: HigherOrderComponents,
          priority: lp.Priority.gold,
          label: 'Higher order components.',
          description: 'A component which returns a component.',
          url: 'https://reactjs.org/docs/higher-order-components.html',
          videoUrl: 'https://www.youtube.com/watch?v=A9_9gQIkfx4',
          children: {},
        },
        refs: {
          Logo: Refs,
          priority: lp.Priority.platinum,
          label: 'Refs',
          description:
            'A powerful pattern borrowed from imperative programming. Use with caution.',
          url: 'https://reactjs.org/docs/refs-and-the-dom.html',
          videoUrl: 'https://www.youtube.com/watch?v=tiytyGEodl0',
          children: {},
        },
        refForwarding: {
          Logo: RefForwarding,
          priority: lp.Priority.platinum,
          label: 'Ref forwarding',
          description: 'Pass on the torch.',
          url: 'https://reactjs.org/docs/forwarding-refs.html',
          videoUrl: 'https://www.youtube.com/watch?v=ScT4ElKd6eo',
          children: {},
        },
        errorBoundaries: {
          Logo: ErrorBoundaries,
          priority: lp.Priority.gold,
          label: 'Error Boundaries',
          description: "Catch 'em by surprise.",
          url: 'https://reactjs.org/docs/error-boundaries.html',
          videoUrl: 'https://www.youtube.com/watch?v=DNYXgtZBRPE',
          children: {},
        },
        portals: {
          Logo: Portals,
          priority: lp.Priority.silver,
          label: 'Portals',
          description: "I'll take your brain to another dimension.",
          url: 'https://reactjs.org/docs/portals.html',
          videoUrl: 'https://www.youtube.com/watch?v=LyLa7dU5tp8',
          children: {},
        },
        bundleSplitting: {
          Logo: BundleSplitting,
          priority: lp.Priority.gold,
          label: 'Bundle Splitting',
          description: 'Simple way to increase load performance of you app.',
          url: 'https://reactjs.org/docs/code-splitting.html',
          videoUrl: 'https://www.youtube.com/watch?v=tV9gvls8IP8',
          children: {},
        },
        fiber: {
          Logo: Fiber,
          priority: lp.Priority.gold,
          label: 'Fiber Architecture',
          description: "Freakin' React and how does it work?",
          url: 'https://reactjs.org/docs/reconciliation.html',
          videoUrl: 'https://www.youtube.com/watch?v=ZCuYPiUIONs',
          children: {},
        },
      },
    },
    functionalProgramming: {
      Logo: FunctionalProgramming,
      priority: lp.Priority.platinum,
      label: 'Functional Programming',
      description: "One of React's corner stones.",
      url:
        'https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/',
      videoUrl: 'https://www.youtube.com/watch?v=e-5obm1G_FY',
      children: {
        higherOrderFunctions: {
          Logo: HigherOrderFunctions,
          priority: lp.Priority.platinum,
          label: 'Higher order functions',
          description: 'A function, in a function out.',
          url:
            'https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad',
          videoUrl: 'https://www.youtube.com/watch?v=BMUiFMZr7vk',
          children: {},
        },
        immutability: {
          Logo: Immutability,
          priority: lp.Priority.platinum,
          label: 'Immutability',
          description: 'Information cannot be destroyed.',
          url:
            'https://css-tricks.com/understanding-immutability-in-javascript/',
          videoUrl: 'https://www.youtube.com/watch?v=Wo0qiGPSV-s',
          children: {},
        },
        declarativity: {
          Logo: Declarativity,
          priority: lp.Priority.platinum,
          label: 'Declarativity',
          description: 'Not the How, but the What.',
          url:
            'https://dzone.com/articles/imperative-vs-declarative-javascript',
          videoUrl: 'https://www.youtube.com/watch?v=yGh0bjzj4IQ',
          children: {},
        },
        monads: {
          Logo: Monads,
          priority: lp.Priority.gold,
          label: 'Monads',
          description: 'A is just a monoid in the category of endofunctors.',
          url:
            'https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8',
          videoUrl: 'https://www.youtube.com/watch?v=9QveBbn7t_c',
          children: {},
        },
      },
    },
    stateManagement: {
      Logo: StateManagement,
      priority: lp.Priority.platinum,
      label: 'State Management',
      description: 'A React app is a function of its state',
      url: 'https://reactjs.org/docs/state-and-lifecycle.html',
      videoUrl: 'https://www.youtube.com/watch?v=4ORZ1GmjaMc',
      children: {
        useState: {
          Logo: UseState,
          priority: lp.Priority.platinum,
          label: 'useState Hook',
          description: 'The new standard for local component state.',
          url: 'https://reactjs.org/docs/hooks-state.html',
          videoUrl: 'https://www.youtube.com/watch?v=O6P86uwfdR0',
          children: {},
        },
        useReducer: {
          Logo: UseReducer,
          priority: lp.Priority.platinum,
          label: 'useReducer',
          description: 'Redux in a hook.',
          url: 'https://reactjs.org/docs/hooks-reference.html#usereducer',
          videoUrl: 'https://www.youtube.com/watch?v=kK_Wqx3RnHk',
          children: {},
        },
        useContext: {
          Logo: UseContext,
          priority: lp.Priority.platinum,
          label: 'useContext',
          description: 'Prop drill, no more.',
          url: 'https://reactjs.org/docs/hooks-reference.html#usecontext',
          videoUrl: 'https://www.youtube.com/watch?v=lhMKvyLRWo0',
          children: {},
        },
        redux: {
          Logo: Redux,
          priority: lp.Priority.gold,
          label: 'Redux',
          description: 'Manage global state, the easy way',
          url: 'https://redux.js.org/introduction/getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=poQXNp9ItL4',
          children: {},
        },
        mobX: {
          Logo: MobX,
          priority: lp.Priority.gold,
          description: 'State management with functional reactive programming.',
          label: 'MobX',
          url: 'https://mobx.js.org/README.html#getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=oQiMXRsO4o4',
          children: {},
        },
      },
    },
    routing: {
      Logo: Routing,
      priority: lp.Priority.platinum,
      label: 'React Routing',
      description:
        'Single page apps actually can have more than one page - on the client.',
      url:
        'https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e',
      videoUrl: 'https://www.youtube.com/watch?v=sLobT_UKKdw',
      children: {
        reactRouter: {
          Logo: ReactRouter,
          priority: lp.Priority.platinum,
          label: 'React Router',
          description: 'Learn once, route anywhere.',
          url: 'https://reactrouter.com/web/guides/quick-start',
          videoUrl: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
          children: {},
        },
        reachRouter: {
          Logo: ReachRouter,
          priority: lp.Priority.silver,
          label: 'React Router',
          description: 'Notably used by Gatsby.',
          url: 'https://reactrouter.com/web/guides/quick-start',
          videoUrl: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
          children: {},
        },
      },
    },
    styling: {
      Logo: Styling,
      priority: lp.Priority.platinum,
      label: 'Styling',
      description: 'The world is but a canvas to the imagination.',
      url: 'https://reactjs.org/docs/faq-styling.html',
      videoUrl: 'https://www.youtube.com/watch?v=NMiEREulVLc',
      children: {
        styledComponents,
        emotion,
        jss,
        cssModules,
      },
    },
    forms: {
      Logo: Forms,
      priority: lp.Priority.platinum,
      label: 'Forms',
      description: 'Can be a nightmare, if not done right.',
      url: 'https://reactjs.org/docs/forms.html',
      videoUrl: 'https://www.youtube.com/watch?v=qH4pJISKeoI',
      children: {
        formik: {
          Logo: Formik,
          priority: lp.Priority.platinum,
          label: 'Formik',
          description: 'Build React forms, without the tears.',
          url: 'https://formik.org/docs/overview',
          videoUrl: 'https://www.youtube.com/watch?v=FD50LPJ6bjE',
          children: {},
        },
        reactHookForm: {
          Logo: ReactHookForm,
          priority: lp.Priority.gold,
          label: 'React Hook Form',
          description: 'Simple form validation with React Hook Form.',
          url: 'https://react-hook-form.com/get-started/',
          videoUrl: 'https://www.youtube.com/watch?v=bU_eq8qyjic',
          children: {},
        },
      },
    },
    testing: {
      Logo: Testing,
      priority: lp.Priority.platinum,
      label: 'Testing in React',
      description: 'A good test suite can be your best friend.',
      url: 'https://reactjs.org/docs/testing.html',
      videoUrl: 'https://www.youtube.com/watch?v=D9DdY2WmM-s',
      children: {
        jest,
        testingLibrary,
        enzyme: {
          Logo: Enzyme,
          priority: lp.Priority.silver,
          label: 'Enzyme',
          description: "Test your React Components' output.",
          url: 'https://github.com/enzymejs/enzyme',
          videoUrl: 'https://www.youtube.com/watch?v=nvL2ha0XUYo',
          children: {},
        },
      },
    },
    apiCalls: {
      Logo: ApiCalls,
      priority: lp.Priority.platinum,
      label: 'API Calls in React',
      description: 'Where does data come from?',
      url: 'https://reactjs.org/docs/faq-ajax.html',
      videoUrl: 'https://www.youtube.com/watch?v=T3Px88x_PsA',
      children: {
        fetch,
        axios: {
          Logo: Axios,
          priority: lp.Priority.silver,
          label: 'Axios',
          description: 'Promise based HTTP client for the browser and node.js',
          url: 'https://github.com/axios/axios',
          videoUrl: 'https://www.youtube.com/watch?v=6LyagkoRWYA',
          children: {},
        },
        swr: {
          Logo: Swr,
          priority: lp.Priority.gold,
          label: 'SWR',
          description: 'React hooks for data fetching.',
          url: 'https://swr.vercel.app/getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=oWVW8IqpQ-A',
          children: {},
        },
        reactQuery: {
          Logo: ReactQuery,
          priority: lp.Priority.gold,
          label: 'React Query',
          description:
            'Performant and powerful data synchronization for React.',
          url: 'https://react-query.tanstack.com/docs/overview',
          videoUrl: 'https://www.youtube.com/watch?v=seU46c6Jz7E',
          children: {},
        },
        rxjs: {
          Logo: Rxjs,
          priority: lp.Priority.gold,
          label: 'RxJS',
          description:
            'RxJS is a library for composing asynchronous and event-based programs by using observable sequences.',
          url: 'https://rxjs-dev.firebaseapp.com/guide/overview',
          videoUrl: 'https://www.youtube.com/watch?v=2LCo926NFLI',
          children: {},
        },
      },
    },
    designSystems: {
      Logo: DesignSystems,
      priority: lp.Priority.gold,
      label: 'Design Systems',
      description: 'The discipline pays back more than double.',
      url: 'https://github.com/jbranchaud/awesome-react-design-systems',
      videoUrl: 'https://www.youtube.com/watch?v=W81dlS5G8Gs',
      children: {
        styledSystem: {
          Logo: StyledSystem,
          priority: lp.Priority.gold,
          label: 'Styled System',
          description:
            'Primitive building blocks for component-based design systems.',
          url: 'https://styled-system.com/',
          videoUrl: 'https://www.youtube.com/watch?v=xwZbjsTo2Bo',
          children: {},
        },
        rebass: {
          Logo: Rebass,
          priority: lp.Priority.gold,
          label: 'Rebass',
          description: 'React primitive ui components.',
          url: 'https://rebassjs.org/getting-started',
          videoUrl: 'https://www.youtube.com/watch?v=Iiugb9cV-CM',
          children: {},
        },
        braid: {
          Logo: Braid,
          priority: lp.Priority.gold,
          label: 'Braid Style System',
          description:
            'Primitive building blocks for component-based design systems.',
          url: 'https://github.com/seek-oss/braid-design-system',
          videoUrl: 'https://www.youtube.com/watch?v=W81dlS5G8Gs&t=1284s',
          children: {},
        },
      },
    },
    componentLibraries,
    ssr: {
      Logo: Ssr,
      priority: lp.Priority.gold,
      label: 'Server Rendering',
      description: 'Rendering React apps on the server is easy.',
      url: 'https://reactjs.org/docs/react-dom-server.html',
      videoUrl: 'https://www.youtube.com/watch?v=tsEHfL-Ul1Y',
      children: {
        next,
        gatsby,
      },
    },
    reactNative,
  },
} as lp.IVertex;

export default react;
