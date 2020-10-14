import Facebook from '../../assets/facebook.svg';
import Google from '../../assets/google.svg';
import HelloWorld from '../../assets/helloWorld.svg';
import Infostud from '../../assets/infostud.svg';
import Joberty from '../../assets/joberty.svg';
import Jobs from '../../assets/jobs.svg';
import Linkedin from '../../assets/linkedin.svg';
import Serbia from '../../assets/serbia.svg';
import { Priority, VertexWithoutVideo } from '../../models/learning-path';

const jobs: VertexWithoutVideo = {
  Logo: Jobs,
  priority: Priority.platinum,
  label: '👩‍💻 Programming Jobs',
  description: 'Find the right job for you.',
  url:
    'https://www.freecodecamp.org/news/a-gentler-introduction-to-programming-1f57383a1b2c/',
  children: {
    serbia: {
      Logo: Serbia,
      priority: Priority.platinum,
      label: '🇷🇸 Jobs in Serbia',
      description: 'This is how I found both of my jobs.',
      url: '',
      children: {
        helloWorld: {
          Logo: HelloWorld,
          priority: Priority.platinum,
          label: 'Hello world',
          description: 'IT jobs and positions',
          url: 'https://www.helloworld.rs/',
          children: {},
        },
        infostud: {
          Logo: Infostud,
          priority: Priority.platinum,
          label: 'Infostud',
          description: 'Self-proclaimed best place for finding a job in Serbia',
          url: 'https://poslovi.infostud.com/',
          children: {},
        },
        joberty: {
          Logo: Joberty,
          priority: Priority.platinum,
          label: 'Joberty',
          description:
            'Joberty comments are a useful insight into what you can expect from a company',
          url: 'https://www.joberty.rs/',
          children: {},
        },
        linkedin: {
          Logo: Linkedin,
          priority: Priority.platinum,
          label: 'Linkedin',
          description: 'Easily set up job filtering and alerts',
          url: 'https://www.linkedin.com/notifications/',
          children: {},
        },
        facebook: {
          Logo: Facebook,
          priority: Priority.platinum,
          label: 'Facebook group: IT poslovi i prakse',
          description: 'Community maintained IT job postings',
          url: 'https://www.facebook.com/groups/932234233524028/',
          children: {},
        },
        google: {
          Logo: Google,
          priority: Priority.platinum,
          label: 'Google search',
          description:
            'Search for "Careers" or "Join us" sections on company websites',
          url: 'https://google.com',
          children: {},
        },
      },
    },
  },
};

export default jobs;
