import AdvancedTypes from '../../../assets/advancedTopics.svg';
import Types from '../../../assets/basics.svg';
import CuttingEdge from '../../../assets/cuttingEdge.svg';
import DeclarationFiles from '../../../assets/declarationFiles.svg';
import DeclarationMerging from '../../../assets/declarationMerging.svg';
import Enums from '../../../assets/enums.svg';
import Functions from '../../../assets/functions.svg';
import Generics from '../../../assets/generics.svg';
import Interfaces from '../../../assets/interfaces.svg';
import Literals from '../../../assets/literals.svg';
import ProjectConfiguration from '../../../assets/projectConfiguration.svg';
import TripleSlashDirective from '../../../assets/tripleSlashDirective.svg';
import TypeCompatibility from '../../../assets/typeCompatibility.svg';
import TypeInference from '../../../assets/typeInference.svg';
import Typescript from '../../../assets/typescript.svg';
import UnionAndIntersectionTypes from '../../../assets/unionAndIntersectionTypes.svg';
import UtilityTypes from '../../../assets/utilityLibraries.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const typescript: IVertex = {
  Logo: Typescript,
  priority: Priority.platinum,
  label: '🔷 TypeScript',
  description:
    'Typed JavScript at scale. Enabling amazing developer experience through delightful tooling.',
  url:
    'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
  videoUrl: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
  children: {
    types: {
      Logo: Types,
      priority: Priority.platinum,
      label: 'Basic Types',
      description:
        "Javascript has types, the only difference is that with Typescript you find out about type errors before it's too late.",
      url: 'https://www.typescriptlang.org/docs/handbook/basic-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=Q6pePpv-C-E',
      children: {},
    },
    interfaces: {
      Logo: Interfaces,
      priority: Priority.platinum,
      label: 'Interfaces',
      description:
        'Define the shape of your values using "duck typing” or “structural subtyping".',
      url: 'https://www.typescriptlang.org/docs/handbook/interfaces.html',
      videoUrl: 'https://www.youtube.com/watch?v=NeUrwZVi4IE',
      children: {},
    },
    functions: {
      Logo: Functions,
      priority: Priority.platinum,
      label: 'Typescript Functions',
      description:
        'Define the input and define the output or let Typescript figure it out.',
      url: 'https://www.typescriptlang.org/docs/handbook/functions.html',
      videoUrl: 'https://www.youtube.com/watch?v=5fJ2nV3P0XI',
      children: {},
    },
    literals: {
      Logo: Literals,
      priority: Priority.platinum,
      label: 'Literal Types',
      description: '"a" can be a value, but it can also be a type.',
      url: 'https://www.typescriptlang.org/docs/handbook/literal-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=IpP6xbkojy4',
      children: {},
    },
    unionAndIntersectionTypes: {
      Logo: UnionAndIntersectionTypes,
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
      Logo: Enums,
      priority: Priority.gold,
      label: 'Enums',
      description:
        'Be it the days of the week or the directions of a compass, enums are made to represent it.',
      url: 'https://www.typescriptlang.org/docs/handbook/enums.html',
      videoUrl: 'https://www.youtube.com/watch?v=tkPzU-pYErk',
      children: {},
    },
    generics: {
      Logo: Generics,
      priority: Priority.platinum,
      label: 'Generics',
      description: 'One of the most powerful tools in the arsenal.',
      url: 'https://www.typescriptlang.org/docs/handbook/generics.html',
      videoUrl: 'https://www.youtube.com/watch?v=nViEqpgwxHE',
      children: {},
    },
    advancedTypes: {
      Logo: AdvancedTypes,
      priority: Priority.platinum,
      label: 'Advanced Types',
      description:
        'Be it optional parameters, type guards or conditional types, they are used daily.',
      url: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=TtDP6lpSjWc',
      children: {},
    },
    utilityTypes: {
      Logo: UtilityTypes,
      priority: Priority.platinum,
      label: 'Utility Types',
      description: "Why do it the hard way, when there's the easy way.",
      url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=TtDP6lpSjWc',
      children: {},
    },
    declarationMerging: {
      Logo: DeclarationMerging,
      priority: Priority.gold,
      label: 'Declaration Merging',
      description:
        "I don't always use declaration merging, but when you do, it matters.",
      url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
      videoUrl: 'https://www.youtube.com/watch?v=bEwRm_U65Ek',
      children: {},
    },
    tripleSlashDirective: {
      Logo: TripleSlashDirective,
      priority: Priority.gold,
      label: 'Triple Slash Directives',
      description:
        'Mostly used to resolve a clash between two third party type definitions.',
      url:
        'https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html',
      videoUrl: 'https://www.youtube.com/watch?v=GVUPOvCRmSY', // TODO replace with more accurate video
      children: {},
    },
    typeCompatibility: {
      Logo: TypeCompatibility,
      priority: Priority.gold,
      label: 'Type Compatibility',
      description:
        "If you give a diamond to a monkey, it will play with it like it's a rock - don't play with Typescript like it's a rock.",
      url:
        'https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html',
      videoUrl: 'https://www.youtube.com/watch?v=m1CFuWPNEDw', // TODO replace higher quality video
      children: {},
    },
    typeInference: {
      Logo: TypeInference,
      priority: Priority.gold,
      label: 'Type Inference',
      description: 'This is an area where C# or Java lag behind.',
      url: 'https://www.typescriptlang.org/docs/handbook/type-inference.html',
      videoUrl: 'https://www.youtube.com/watch?v=3ui_st7rtfA',
      children: {},
    },
    cuttingEdge: {
      Logo: CuttingEdge,
      priority: Priority.gold,
      label: 'Cutting Edge Typescript',
      description: 'Typescript is literarily getting better by the month.',
      url:
        'https://www.typescriptlang.org/docs/handbook/release-notes/overview.html',
      videoUrl: 'https://www.youtube.com/watch?v=Au-rrY0afe4',
      children: {},
    },
    declarationFiles: {
      Logo: DeclarationFiles,
      priority: Priority.gold,
      label: 'Declaration Files',
      description:
        'Declaration files enable you to gain access to the entirety of the Javascript ecosystem.',
      url:
        'https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html',
      videoUrl: 'https://www.youtube.com/watch?v=s_CZeWuEZ_s',
      children: {},
    },
    projectConfiguration: {
      Logo: ProjectConfiguration,
      priority: Priority.platinum,
      label: 'Typescript Project Configuration',
      description: 'Learn enough to be dangerous.',
      url: 'https://www.typescriptlang.org/docs/handbook/tsconfig-json.html',
      videoUrl: 'https://www.youtube.com/watch?v=dPgAXFcFHCM',
      children: {},
    },
  },
};

export default typescript;
