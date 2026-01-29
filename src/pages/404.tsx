import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Header } from '../components/Header';
import { Main } from '../templates/Main';

export default function Custom404() {
  return (
    <Main>
      <Header title="404 - not found">
        <p>Page not found</p>
      </Header>
    </Main>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
};
