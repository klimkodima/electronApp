import { ReactElement } from 'react';
import logo from '../../../../assets/icons/avectis/Logo_blue_Avectis.svg';
import './Loader.css';

function Loader(): ReactElement {
  return (
    <div className="loading">
      <div className="loading-center">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loader;
