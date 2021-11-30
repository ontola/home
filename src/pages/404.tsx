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
