import * as Icons from 'grommet-icons';
import { Button } from 'grommet/components/Button';
import Link from 'next/link';
import React from 'react';
import Vertex from '../Vertex';

const RootVertex: React.FC<Omit<
  React.ComponentProps<typeof Vertex>,
  'Footer'
>> = ({ parentPathname, pathname, learningPath }) => {
  return (
    <Vertex
      parentPathname={parentPathname}
      pathname={pathname}
      learningPath={learningPath}
      Footer={({ openVideo }) => (
        <>
          {parentPathname ? (
            <Link href={parentPathname}>
              <Button icon={<Icons.Previous />} hoverIndicator />
            </Link>
          ) : (
            <Button icon={<Icons.Previous />} disabled />
          )}
          <Button
            icon={<Icons.Video color={'brand'} />}
            onClick={openVideo}
            hoverIndicator
          />
          <a
            href={learningPath.url}
            target="__blank"
            rel="noopener noreferrer"
            title={`${learningPath.label} documentation`}
          >
            <Button icon={<Icons.Book />} hoverIndicator />
          </a>
        </>
      )}
    />
  );
};

export default RootVertex;
