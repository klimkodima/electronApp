import { ReactElement } from 'react';
import { EventInfo } from './EventInfo';
import './EventsList.css';

function EventsList(): ReactElement {
  const meetingEvent = {
    noEvent: 1,
    start: '10.30',
    end: '11.30',
    theme: 'Встреча с заказчиком',
    organizer: 'klimko dmitry',
    remain: '20 минут',
    futureEvents: 'futureEvents',
  };

  const { noEvent, start, end, organizer, remain, theme, futureEvents } =
    meetingEvent;

  const eventInfo = {
    start,
    end,
    organizer,
    remain,
  };

  return (
    <div className="events-list">
      <div className="events">
        <div className={!noEvent ? 'status free' : 'status busy'} />
        <div className="current-event">
          <p className="summary">{noEvent ? theme : 'Свободно'}</p>
          {!!noEvent && <EventInfo eventInfo={eventInfo} />}
        </div>
      </div>
      {!!noEvent && <div className="future-event">{futureEvents}</div>}
    </div>
  );
}

export default EventsList;
