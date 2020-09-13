import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import React from 'react';

export interface BreadcrumbsProps {
  pathname: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const segments = props.pathname.split('/');
  return (
    <Box>
      <Text color="gray">
        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1;
          const formattedSegment = capitalize(segment);
          return (
            <>
              &nbsp;
              {isLast ? (
                formattedSegment
              ) : (
                <Link href={segments.slice(0, i + 1).join('/')}>
                  {formattedSegment}
                </Link>
              )}
              &nbsp;{!isLast && '/'}
            </>
          );
        })}
      </Text>
    </Box>
  );
};

export default Breadcrumbs;
