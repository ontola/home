import { GetStaticProps } from 'next';

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
    marginBottom: '1rem',
    borderRadius: '20px',
    padding: '1rem',
    border: 'none',
    fontSize: '1rem',
  },
});

function ContactForm() {
  return (
    <Form action="https://formspree.io/info@ontola.io" method="POST">
      <label htmlFor="email">Your email address</label>
      <input
        id="email"
        type="email"
        name="_replyto"
        placeholder="email@example.com"
      />
      <label htmlFor="message">Message</label>
      <textarea
        rows={5}
        id="message"
        name="message"
        placeholder="Tell us about your project or ask a question."
      ></textarea>
      <Button style={{ flex: '0' }} type="submit" value="Send">
        Send
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
  const props = await getPage('contact', locale);
  return {
    props,
  };
};
