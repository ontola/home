import { Button } from '../components/Button';
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
      <h1>Software Development</h1>
      <Button>Contact</Button>
    </Main>
  );
};

export default Index;
