import Apollo from '../../../assets/apollo.svg';
import Graphql from '../../../assets/graphql.svg';
import Relay from '../../../assets/relay.svg';
import { IVertex, Priority } from '../../../models/learning-path';

const graphql: IVertex = {
  Logo: Graphql,
  priority: Priority.platinum,
  label: 'GraphQL',
  description:
    'GraphQL enables easy API integrations, such that it feels like using a library from the same codebase.',
  url: 'https://graphql.org/learn/',
  videoUrl: 'https://www.youtube.com/watch?v=ed8SzALpx1Q',
  children: {
    basics: {
      Logo: Graphql,
      priority: Priority.platinum,
      label: 'Basics',
      description: 'A query language for your API.',
      url: 'https://graphql.org/learn/queries/',
      videoUrl: 'https://www.youtube.com/watch?v=7wzR4Ig5pTI',
      children: {},
    },
    schemasAndTypes: {
      Logo: Graphql,
      priority: Priority.platinum,
      label: 'Schemas and Types',
      description: "GraphQL's powerful type system.",
      url: 'https://graphql.org/learn/queries/',
      videoUrl: 'https://www.youtube.com/watch?v=A8vtRvz-lK0',
      children: {},
    },
    validation: {
      Logo: Graphql,
      priority: Priority.platinum,
      label: 'Validation',
      description: "GraphQL's powerful type system.",
      url: 'https://graphql.org/learn/queries/',
      videoUrl: 'https://www.youtube.com/watch?v=A8vtRvz-lK0',
      children: {},
    },
    apollo: {
      Logo: Apollo,
      priority: Priority.platinum,
      label: 'Apollo',
      description:
        'Delightful graphQL tooling, including a superb client side fetching library.',
      url:
        'https://www.apollographql.com/docs/tutorial/introduction/?_ga=2.159108154.1681055173.1599939917-1685203629.1599939917',
      videoUrl: 'https://www.youtube.com/watch?v=mSzUb7f47qk',
      children: {},
    },
    relay: {
      Logo: Relay,
      priority: Priority.silver,
      label: 'Relay',
      description: 'GraphQL client for React',
      url: 'https://relay.dev/docs/en/experimental/introduction-to-relay',
      videoUrl: 'https://www.youtube.com/watch?v=xnvzz7Z658I',
      associations: ['frontend/frameworks/react'],
      children: {},
    },
  },
};

export default graphql;
