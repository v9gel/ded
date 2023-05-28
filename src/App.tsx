import { useStore } from '@nanostores/react';

import { Background } from './components/Background';
import { CardContainer } from './components/CardContainer';
import { CardHolder } from './components/CardHolder';
import { EventText } from './components/EventText';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Screen } from './components/Screen';
import { $event, Event } from './stores/event';

const App = () => {
  const event = useStore($event) as unknown as Event;
  // const isDied = useDied();

  // console.log('🐴', { isDied }); // TODO remove

  return (
    <>
      <Background>
        <Screen>
          <Header></Header>
          <CardContainer>
            <EventText>{event.text}</EventText>
            <CardHolder></CardHolder>
          </CardContainer>
          <Footer></Footer>
        </Screen>
      </Background>
    </>
  );
};

export default App;
