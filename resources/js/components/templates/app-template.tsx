import FooterLayout from '@/components/layouts/footer-layout';
import HeaderLayout from '@/components/layouts/header-layout';
import NavbarLayout from '@/components/layouts/navbar-layout';
import React from 'react';

type AppTemplate = {
  children: React.ReactNode;
};

const AppTemplate: React.FC<AppTemplate> = ({ children }) => {
  return (
    <>
      <HeaderLayout className="flex justify-between items-center mx-16 h-14 bg-neutral-200 rounded-b-2xl" />
      <NavbarLayout className="flex justify-between items-center mx-16 my-5 font-bold" />
        {children}
      <FooterLayout className="mt-10" />
    </>
  );
};

export default AppTemplate;
