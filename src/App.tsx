import { Background } from './components/Background';
import { Card } from './components/Card';
import { CardContainer } from './components/CardContainer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Screen } from './components/Screen';

const App = () => (
  <Background>
    <Screen>
      <Header></Header>
      <CardContainer>
        <Card></Card>
      </CardContainer>
      <Footer></Footer>
    </Screen>
  </Background>
);

export default App;
