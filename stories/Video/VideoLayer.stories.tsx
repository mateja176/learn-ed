// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react';
import React from 'react';
import VideoLayer from '../../components/Video/VideoLayer';
import frontend from '../../utils/learn/frontend';

type VideoLayerProps = Story<React.ComponentProps<typeof VideoLayer>>;

export default {
  title: 'Video/Layer',
  component: VideoLayer,
  argTypes: {
    videoUrl: {
      name: 'videoUrl',
      defaultValue: frontend.children.web.videoUrl,
    },
    open: { name: 'open', defaultValue: true },
  },
} as Meta<VideoLayerProps>;

const Template: VideoLayerProps = (props) => <VideoLayer {...props} />;

export const Web = Template.bind(null);
