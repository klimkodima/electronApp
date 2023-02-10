import { ReactElement } from 'react';
import './EventInfo.css';

type eventInfoProps = {
  start: string;
  end: string;
  organizer: string;
  remain: string;
};

function EventInfo({ eventInfo }: { eventInfo: eventInfoProps }): ReactElement {
  return (
    <div className="info">
      <div className="time">
        <div className="duration">
          <span className="duration-label">Время:</span>
          <span className="duration-info">{`${eventInfo.start} - ${eventInfo.end}`}</span>
        </div>
        <div className="remaining">
          <span className="remaining-label">Осталось:</span>
          <span className="remaining-info">{eventInfo.remain}</span>
        </div>
      </div>
      <div className="responsible">
        <span className="responsible-label">Организатор:</span>
        <span className="responsible-info">{eventInfo.organizer}</span>
      </div>
    </div>
  );
}

export default EventInfo;
