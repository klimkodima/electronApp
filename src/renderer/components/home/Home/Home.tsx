import { ReactElement } from 'react';
import { Footer } from './Footer';
import { Header } from '../../header';
import { EventsList } from './EventsList';
import { Widgets } from './Widgets';
import './Home.css';

function Home(): ReactElement {
  return (
    <div className="app">
      <Header />
      <div className="home">
        <div className="svg" />
        <div className="main">
          <EventsList />
          <Widgets />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
