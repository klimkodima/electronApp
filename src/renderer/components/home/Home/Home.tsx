import { ReactElement } from 'react';
import { Footer } from './Footer';
import { EventsList } from './EventsList';
import { Widgets } from './Widgets';
import './Home.css';

function Home(): ReactElement {
  return (
    <div className="home">
      <div className="svg" />
      <div className="main">
        <EventsList />
        <Widgets />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
