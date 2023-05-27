import { Background } from './components/Background';
import { Card } from './components/Card';
import { CardContainer } from './components/CardContainer';
import { EventText } from './components/EventText';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Screen } from './components/Screen';

const App = () => (
  <Background>
    <Screen>
      <Header></Header>
      <CardContainer>
        <EventText>Сегодня мне 65 лет и я выхожу на пенсию</EventText>
        <Card></Card>
      </CardContainer>
      <Footer></Footer>
    </Screen>
  </Background>
);

export default App;
