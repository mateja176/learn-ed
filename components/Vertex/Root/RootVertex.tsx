import * as Icons from 'grommet-icons';
import { Button } from 'grommet/components/Button';
import Link from 'next/link';
import React from 'react';
import urljoin from 'url-join';
import { WithOrigin } from '../../../models/models';
import Share from '../../Share';
import Vertex from '../Vertex';

const RootVertex: React.FC<
  Omit<React.ComponentProps<typeof Vertex>, 'Footer'> & WithOrigin
> = ({ origin, parentPathname, pathname, learningPath }) => {
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
            icon={<Icons.CirclePlay color={'brand'} />}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick={openVideo ?? (() => {})}
            hoverIndicator
            disabled={!openVideo}
          />
          <Share
            pathname={pathname}
            url={urljoin(origin, parentPathname, pathname)}
            label={learningPath.label}
          />
          <a
            href={learningPath.url}
            target="__blank"
            rel="noopener noreferrer"
            title={`${learningPath.label} documentation`}
          >
            <Button icon={<Icons.ShareRounded />} hoverIndicator />
          </a>
        </>
      )}
    />
  );
};

export default RootVertex;
