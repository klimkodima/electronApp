import { ReactElement } from 'react';
import { Footer } from './Footer';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import './Home.css';

function Home(): ReactElement {
  return (
    <div className="home">
      <div id="svg" className="svg" />
      <div className="main">
        <LeftSide />
        <RightSide />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
