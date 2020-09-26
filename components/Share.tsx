import * as Icons from 'grommet-icons';
import { Menu } from 'grommet/components/Menu';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { useAnalytics } from '../hooks/analytics';
import { IVertex } from '../models/learning-path';

export interface ShareProps extends Pick<IVertex, 'label'> {
  pathname: string;
  url: string;
}

const iconSize = 25;

const shareConfig = {
  facebook: {
    label: 'Facebook',
    Button: FacebookShareButton,
    Icon: FacebookIcon,
  },
  twitter: {
    label: 'Twitter',
    Button: TwitterShareButton,
    Icon: TwitterIcon,
  },
  reddit: {
    label: 'Reddit',
    Button: RedditShareButton,
    Icon: RedditIcon,
  },
  linkedin: {
    label: 'Linkedin',
    Button: LinkedinShareButton,
    Icon: LinkedinIcon,
  },
  whatsapp: {
    label: 'Whatsapp',
    Button: WhatsappShareButton,
    Icon: WhatsappIcon,
  },
  viber: {
    label: 'Viber',
    Button: ViberShareButton,
    Icon: ViberIcon,
  },
};

const Share: React.FC<ShareProps> = (props) => {
  const analytics = useAnalytics();

  return (
    <Menu
      icon={<Icons.Share color="status-critical" />}
      items={Object.entries(shareConfig).map(([provider, config]) => ({
        label: (
          <config.Button
            url={props.url}
            title={config.label}
            style={{ height: iconSize }}
            onShareWindowClose={() => {
              analytics.event({
                type: 'share',
                payload: { provider, learningPath: props.pathname },
              });
            }}
          >
            <config.Icon size={iconSize} round />
          </config.Button>
        ),
      }))}
    />
  );
};

export default Share;
