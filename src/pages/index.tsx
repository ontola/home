import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Ontola Software Development"
          description="Wij schrijven software die ontworpen is om te veranderen. Zo blijven de kosten voor onderhoud en doorontwikkeling zo laag mogelijk."
        />
      }
    >
      <Header title={'Software Development'}>
        <p>
          Wij schrijven software die ontworpen is om te veranderen. Zo blijven
          de kosten voor onderhoud en doorontwikkeling zo laag mogelijk.
        </p>
        <Button>Contact</Button>
      </Header>
    </Main>
  );
};

export default Index;
