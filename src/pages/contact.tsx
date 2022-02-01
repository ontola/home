import { useForm, ValidationError } from '@formspree/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { styled, theme } from '../../stitches.config';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { MDXItem, getPage } from '../utils/getPosts';

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5rem',

  label: {
    color: theme.colors.text,
    marginBottom: '1rem',
  },

  'input, textarea': {
    background: theme.colors.bg0,
    marginBottom: '1rem',
    borderRadius: '20px',
    padding: '1rem',
    border: `1px solid ${theme.colors.bg2}`,
    fontSize: '1rem',
    color: theme.colors.text,
    '&:focus': {
      outline: `1px solid ${theme.colors.text}`,
    },
  },
});

function ContactForm() {
  const { t } = useTranslation('contact');

  const [state, handleSubmit] = useForm('xvolzevw');
  if (state.succeeded) {
    return <p>{t('thanks')}</p>;
  }
  return (
    <Form
      action="https://formspree.io/f/xvolzevw"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">{t('email')}</label>
      <input
        required={true}
        id="email"
        type="email"
        name="_replyto"
        placeholder="email@example.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">{t('messageTitle')}</label>
      <textarea
        rows={5}
        id="message"
        name="message"
        required={true}
        placeholder={t('messagePlaceholder')}
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        style={{ flex: '0' }}
        type="submit"
        value="Send"
        disabled={state.submitting}
      >
        {t('send')}
      </Button>
      <input type="hidden" name="_next" value="/wellbeintouch" />
      <input type="hidden" name="_subject" value="Ontola.io" />
      <input type="hidden" name="_format" value="plain" />
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
    </Form>
  );
}

export default function Contact({ data }: MDXItem) {
  return (
    <Main meta={<Meta title={data.title} description={data.description} />}>
      <Header title={data.title} image="photos/thom-joep-jur.jpg">
        <p>{data.description}</p>
      </Header>
      <Container>
        <ContactForm />
      </Container>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const contact = await getPage('contact', locale);
  return {
    props: {
      ...contact,
      ...(await serverSideTranslations(locale as string, [
        'common',
        'contact',
      ])),
    },
  };
};
