import Typescript from '../../../assets/typescript.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const typescript: IVertex = {
  Logo: Typescript,
  priority: Priority.platinum,
  label: 'TypeScript',
  description: 'Typed JavScript at scale.',
  url:
    'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
  videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
  children: {
    types: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Basic Types',
      description:
        "Javascript has types, the only difference is that with Typescript you find out about type errors before it's too late.",
      url: 'https://www.typescriptlang.org/docs/handbook/basic-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=Q6pePpv-C-E',
      children: {},
    },
    interfaces: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Interfaces',
      description:
        'Define the shape of your values using "duck typing” or “structural subtyping".',
      url: 'https://www.typescriptlang.org/docs/handbook/interfaces.html',
      videoUrl: 'https://www.youtube.com/watch?v=NeUrwZVi4IE',
      children: {},
    },
    functions: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Typescript Functions',
      description:
        'Define the input and define the output or let Typescript figure it out.',
      url: 'https://www.typescriptlang.org/docs/handbook/functions.html',
      videoUrl: 'https://www.youtube.com/watch?v=5fJ2nV3P0XI',
      children: {},
    },
    literals: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Literal Types',
      description: '"a" can be a value, but it can also be a type.',
      url: 'https://www.typescriptlang.org/docs/handbook/literal-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=IpP6xbkojy4',
      children: {},
    },
    unionAndIntersectionTypes: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Union and Intersection Types',
      description:
        'Think of Unions as "or" types and intersections as "and" types.',
      url:
        'https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html',
      videoUrl: 'https://www.youtube.com/watch?v=76io0UBS6fA',
      children: {},
    },
    enums: {
      Logo: Typescript,
      priority: Priority.gold,
      label: 'Enums',
      description:
        'Be it the days of the week or the directions of a compass, enums are made to represent it.',
      url: 'https://www.typescriptlang.org/docs/handbook/enums.html',
      videoUrl: 'https://www.youtube.com/watch?v=tkPzU-pYErk',
      children: {},
    },
    generics: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Generics',
      description: 'One of the most powerful tools in the arsenal.',
      url: 'https://www.typescriptlang.org/docs/handbook/generics.html',
      videoUrl: 'https://www.youtube.com/watch?v=nViEqpgwxHE',
      children: {},
    },
    advancedTypes: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Advanced Types',
      description:
        'Be it optional parameters, type guards or conditional types, they are used daily.',
      url: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=TtDP6lpSjWc',
      children: {},
    },
    utilityTypes: {
      Logo: Typescript,
      priority: Priority.platinum,
      label: 'Utility Types',
      description: "Why do it the hard way, when there's the easy way.",
      url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=TtDP6lpSjWc',
      children: {},
    },
  },
};

export default typescript;
