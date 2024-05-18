import React from 'react';
import Header from '@/app/components/header';

export interface PageCompanyProps {
  params: { id: string[] };
}

export default function PageCompanies({ params }: PageCompanyProps) {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
