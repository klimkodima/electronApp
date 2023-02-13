import { ReactElement, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import './TimeLine.css';

type eventInfoProps = {
  start: string;
  end: string;
  organizer: string;
  remain: string;
};

dayjs.locale('ru');

const getTimeLine = () => {
  let currentDate ;
  if(dayjs().minute() < 30) {
    currentDate =dayjs().minute(0);
  } else {
    currentDate =dayjs().minute(30);
  }
  const timeLine = [];
  for (let i = 0; i < 10; i++) {
    timeLine[i] = currentDate.add(30 * i, 'm');
  }
  return timeLine;
}



function TimeLine({ eventInfo }: { eventInfo: eventInfoProps }): ReactElement {
  const [timeLine, setTimeLine] = useState<any[]>();
  setInterval(() => setTimeLine(getTimeLine()), 1800)

  return (
    <div className="time-line">
      {timeLine?.map((time, index) => <button key={index}>{time.format('HH.mm')}</button>
      )}
    </div>
  );
}

export default TimeLine;
