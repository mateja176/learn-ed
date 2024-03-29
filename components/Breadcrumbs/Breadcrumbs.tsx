import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';
import { startCase } from 'lodash';
import Link from 'next/link';
import React from 'react';
import urljoin from 'url-join';

export interface BreadcrumbsProps {
  pathname: string;
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const segments = props.pathname.split('/').filter(Boolean);
  return (
    <nav style={navStyle}>
      <Box margin={{ right: '10px' }}>
        <Link href="/">💻</Link>
      </Box>
      {segments.map((segment, i) => {
        const isLast = i === segments.length - 1;
        const formattedSegment = startCase(segment);
        return (
          <Text color="gray" key={segment.concat(i.toString())}>
            {isLast ? (
              formattedSegment
            ) : (
              <Link href={urljoin('/', ...segments.slice(0, i + 1))}>
                {formattedSegment}
              </Link>
            )}
            &nbsp;
            {!isLast && '/'}
            &nbsp;
          </Text>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
