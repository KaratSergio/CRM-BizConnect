import React from 'react';

import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageCompaniesProps {}

export default function PageCompanies({}: PageCompaniesProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'18.05.2024'}
        />
      </CompanyTable>
    </>
  );
}
