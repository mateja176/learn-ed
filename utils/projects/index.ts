import BugTracker from '../../assets/bugTracker.svg';
import Chat from '../../assets/chat.svg';
import HackerNews from '../../assets/hackerNews.svg';
import Projects from '../../assets/projects.svg';
import RockPaperScissors from '../../assets/rockPaperScissors.svg';
import SocialMedia from '../../assets/socialMedia.svg';
import { IVertex, Priority } from '../../models/learning-path';

const projects: IVertex = {
  Logo: Projects,
  priority: Priority.platinum,
  label: '💡 Projects Ideas',
  description: 'Relevant project ideas to boost your resume.',
  url: 'https://github.com/florinpop17/app-ideas',
  videoUrl: 'https://www.youtube.com/watch?v=oEjqdodOWOk',
  children: {
    hackerNews: {
      Logo: HackerNews,
      priority: Priority.platinum,
      label: 'Hacker News Clone',
      description:
        'Hacker news has a Firebase Firestore based open api which apparently has no rate limit.',
      url: 'https://github.com/karlhadwen/newsreader',
      videoUrl: 'https://www.youtube.com/watch?v=LN6Dol_fX0w',
      children: {},
      difficulty: 'intermediate',
    },
    socialMedia: {
      Logo: SocialMedia,
      priority: Priority.platinum,
      label: 'Social Media App',
      description:
        'Users, comments, likes and the stuff we are already familiar with.',
      url: 'https://github.com/hidjou/classsed-react-firebase-client',
      videoUrl: 'https://www.youtube.com/watch?v=m_u6P5k0vP0',
      children: {},
      difficulty: 'advanced',
    },
    rockPaperScissors: {
      Logo: RockPaperScissors,
      priority: Priority.gold,
      label: 'Rock Paper Scissors',
      description: 'A simple concept, but it will test your fundamentals.',
      url: 'https://codepen.io/255994/pen/qQaByN',
      videoUrl: 'https://www.youtube.com/watch?v=jaVNP3nIAv0',
      children: {},
      difficulty: 'beginner',
    },
    bugTracker: {
      Logo: BugTracker,
      priority: Priority.gold,
      label: 'Bug Tracker',
      description:
        'The 1 coding project guaranteed to get you a job - in the words of the author',
      url:
        'https://dzone.com/articles/how-to-write-an-own-bug-tracker-in-javascript',
      videoUrl: 'https://www.youtube.com/watch?v=oC483DTjRXU',
      children: {},
      difficulty: 'intermediate',
    },
    chat: {
      Logo: Chat,
      priority: Priority.platinum,
      label: 'Chat App',
      description: 'A good way to get familiar with real-time applications.',
      url: 'https://github.com/adrianhajdin/project_chat_application',
      videoUrl: 'https://github.com/adrianhajdin/project_chat_application',
      children: {},
      difficulty: 'advanced',
    },
  },
};

export default projects;
