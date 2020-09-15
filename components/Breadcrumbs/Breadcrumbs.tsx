import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { startCase } from 'lodash';
import Link from 'next/link';
import React from 'react';
import urljoin from 'url-join';

export interface BreadcrumbsProps {
  pathname: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const segments = props.pathname.split('/').slice(1);
  return (
    <Box>
      <Text color="gray">
        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1;
          const formattedSegment = startCase(segment);
          return (
            <span key={segment.concat(i.toString())}>
              &nbsp;
              {isLast ? (
                formattedSegment
              ) : (
                <Link href={urljoin('/', ...segments.slice(0, i + 1))}>
                  {formattedSegment}
                </Link>
              )}
              &nbsp;
              {!isLast && '/'}
            </span>
          );
        })}
      </Text>
    </Box>
  );
};

export default Breadcrumbs;
