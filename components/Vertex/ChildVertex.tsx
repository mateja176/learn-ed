import * as Icons from 'grommet-icons';
import { Button } from 'grommet/components/Button';
import Link from 'next/link';
import React from 'react';
import urljoin from 'url-join';
import Vertex from './Vertex';

const ChildVertex: React.FC<Omit<
  React.ComponentProps<typeof Vertex>,
  'Footer'
>> = ({ parentPathname, pathname, learningPath }) => {
  const hasChildren = Object.values(learningPath.children).length;

  return (
    <Vertex
      parentPathname={parentPathname}
      pathname={pathname}
      learningPath={learningPath}
      Footer={({ openVideo }) => (
        <>
          <a
            href={learningPath.url}
            target="__blank"
            rel="noopener noreferrer"
            title={`${learningPath.label} documentation`}
          >
            <Button icon={<Icons.Book />} hoverIndicator />
          </a>
          <Button
            icon={<Icons.Video color={'brand'} />}
            onClick={openVideo}
            hoverIndicator
          />
          <Link href={urljoin(parentPathname, pathname)}>
            <Button
              disabled={!hasChildren}
              title={`${hasChildren ? 'Explore' : 'No subsections'}`}
              icon={<Icons.Next />}
              hoverIndicator
            />
          </Link>
        </>
      )}
    />
  );
};

export default ChildVertex;
