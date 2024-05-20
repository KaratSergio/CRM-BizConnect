import React from 'react';

import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';
import CompanyTable from '@/app/components/company-table';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
