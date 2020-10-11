import Apollo from '../../../assets/apollo.svg';
import Basics from '../../../assets/basics.svg';
import BestPractices from '../../../assets/bestPractices.svg';
import Codegen from '../../../assets/codegen.svg';
import Execution from '../../../assets/execution.svg';
import Graphql from '../../../assets/graphql.svg';
import GraphqlMesh from '../../../assets/graphqlMesh.svg';
import Pagination from '../../../assets/pagination.svg';
import Relay from '../../../assets/relay.svg';
import SchemasAndTypes from '../../../assets/schemasAndTypes.svg';
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
      Logo: Basics,
      priority: Priority.platinum,
      label: 'Basics',
      description: 'A query language for your API.',
      url: 'https://graphql.org/learn/queries/',
      videoUrl: 'https://www.youtube.com/watch?v=7wzR4Ig5pTI',
      children: {},
    },
    schemasAndTypes: {
      Logo: SchemasAndTypes,
      priority: Priority.platinum,
      label: 'Schemas and Types',
      description: "GraphQL's powerful type system.",
      url: 'https://graphql.org/learn/queries/',
      videoUrl: 'https://www.youtube.com/watch?v=A8vtRvz-lK0',
      children: {},
    },
    execution: {
      Logo: Execution,
      priority: Priority.gold,
      label: 'GraphQL Execution',
      description:
        'Imagine the API as huge JavaScript object which you can query.',
      url: 'https://graphql.org/learn/execution/',
      videoUrl: 'https://www.youtube.com/watch?v=T0zpPO7Ub_s',
      children: {},
    },
    bestPractices: {
      Logo: BestPractices,
      priority: Priority.gold,
      label: 'Best Design Practices',
      description:
        'Imagine the API as huge JavaScript object which you can query.',
      url: 'https://graphql.org/learn/best-practices/',
      videoUrl: 'https://www.youtube.com/watch?v=1Fg_QtzI7SU',
      children: {},
    },
    pagination: {
      Logo: Pagination,
      priority: Priority.gold,
      label: 'Pagination',
      description:
        'You can start with a simple offset or id based model or embrace the power cursors.',
      url: 'https://graphql.org/learn/pagination/',
      videoUrl: 'https://www.youtube.com/watch?v=e1cbhZ5vDGc',
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
    codegen: {
      Logo: Codegen,
      priority: Priority.platinum,
      label: 'GraphQL Codegen',
      description:
        'Automatic React hooks generation complete with Typescript types and more!',
      url:
        'https://graphql-code-generator.com/docs/getting-started/installation',
      videoUrl: 'https://www.youtube.com/watch?v=izriJQeqGUA',
      associations: ['frontend/frameworks/react', 'graphql/apollo'],
      children: {},
    },
    graphqlMesh: {
      Logo: GraphqlMesh,
      priority: Priority.platinum,
      label: 'GraphQL Mesh',
      description: 'Turn a REST or GRPC API into a GraphQL API instantly.',
      url: 'https://graphql-mesh.com/docs/getting-started/introduction',
      videoUrl: 'https://www.youtube.com/watch?v=BUzISj87ovc',
      children: {},
    },
  },
};

export default graphql;
