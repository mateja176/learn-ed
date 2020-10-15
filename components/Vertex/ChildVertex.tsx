import * as Icons from 'grommet-icons';
import { Button } from 'grommet/components/Button';
import Link from 'next/link';
import React from 'react';
import urljoin from 'url-join';
import { useAnalytics } from '../../hooks/analytics';
import { WithOrigin } from '../../models/models';
import Share from '../Share';
import Vertex from './Vertex';

const ChildVertex: React.FC<
  Omit<React.ComponentProps<typeof Vertex>, 'Footer'> & WithOrigin
> = ({ origin, parentPathname, pathname, learningPath }) => {
  const analytics = useAnalytics();

  const hasChildren = React.useMemo(
    () => Object.values(learningPath.children).length,
    [learningPath.children],
  );

  const fullPathname = React.useMemo(() => urljoin(parentPathname, pathname), [
    parentPathname,
    pathname,
  ]);

  const url = React.useMemo(() => urljoin(origin, fullPathname), [
    origin,
    fullPathname,
  ]);

  const handleExplore = React.useCallback(() => {
    analytics.event({ type: 'explore', payload: { learningPath: pathname } });
  }, [analytics, pathname]);

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
            title="See more"
          >
            <Button icon={<Icons.ShareRounded />} hoverIndicator />
          </a>
          <Button
            icon={<Icons.CirclePlay color={'brand'} />}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick={openVideo ?? (() => {})}
            hoverIndicator
            disabled={!openVideo}
          />
          <Share pathname={pathname} url={url} label={learningPath.label} />
          <Link href={fullPathname}>
            <Button
              disabled={!hasChildren}
              title={`${hasChildren ? 'Explore' : 'No subsections'}`}
              icon={<Icons.FormNext />}
              hoverIndicator
              onClick={handleExplore}
            />
          </Link>
        </>
      )}
    />
  );
};

export default ChildVertex;
