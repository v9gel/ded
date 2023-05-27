import { Background } from './components/Background';
import { Card } from './components/Card';
import { CardContainer } from './components/CardContainer';
import { EventText } from './components/EventText';
import { Header } from './components/Header';
import { Screen } from './components/Screen';
import { Footer } from './components/Footer';

const App = () => (
  <Background>
    <Screen>
      <Header></Header>
      <EventText>Сегодня мне 65 лет и я выхожу на пенсию</EventText>
      <CardContainer>
        <Card></Card>
      </CardContainer>
      <Footer></Footer>
    </Screen>
  </Background>
);

export default App;
