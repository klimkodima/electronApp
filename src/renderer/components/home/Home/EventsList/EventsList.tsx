import { ReactElement } from 'react';
import { EventInfo } from './EventInfo';
import { TimeLine } from './Timeline';
import './EventsList.css';

function EventsList(): ReactElement {
  const meetingEvent = {
    noEvent: 1,
    start: '2023-02-11 19:30',
    end: '2023-02-11 21:30',
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
      <TimeLine eventInfo={eventInfo} />
    </div>
  );
}

export default EventsList;
