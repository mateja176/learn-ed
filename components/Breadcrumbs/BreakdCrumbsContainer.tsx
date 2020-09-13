import { useRouter } from 'next/router';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export interface BreadcrumbsContainerProps {}

const BreadcrumbsContainer: React.FC<BreadcrumbsContainerProps> = () => {
  const router = useRouter();

  return <Breadcrumbs pathname={router.pathname} />;
};

export default BreadcrumbsContainer;
