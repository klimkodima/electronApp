import { useEffect, useState, ReactElement } from 'react';
import {Helmet} from "react-helmet";
import { formatDate } from './helper';
import AnalogClock from './Clock';
import useScript from '../../../../hooks/useScript';
import './RightSide.css';
import logo from '../../../../../../assets/icons/avectis/logo-AVECTIS5.svg';

function RightSide(): ReactElement {
  const [date, setDate] = useState(new Date());
  useScript('https://static1.meteolabs.ru/widgetjs/?id=id4bf8fb25f60c9');

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="right-side">
      <div className="logo">
        <img src={logo} alt="professional logo" />
      </div>
      <div className="current-date">
        <div className="clock-container">
          <AnalogClock date={date} />
        </div>
        <hr />
        <p className="day">{formatDate(date)}</p>
      </div>
      <div className="weather-container">
        <div id="id4bf8fb25f60c9" a='{"t":"a","v":"1.2","lang":"ru","locs":[1323],"ssot":"c","sics":"ds","cbkg":"#FFFFFF","cfnt":"#000000","cprb":"#1976D2","cprf":"#FFFFFF"}'>
          Источник данных о погоде:
          <a href="https://meteolabs.ru/погода_минск/">Минск прогноз погоды</a>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
