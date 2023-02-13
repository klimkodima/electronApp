import { ReactElement } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import './EventInfo.css';

type eventInfoProps = {
  start: string;
  end: string;
  organizer: string;
  remain: string;
};

dayjs.extend(relativeTime);
dayjs.extend(duration);

function EventInfo({ eventInfo }: { eventInfo: eventInfoProps }): ReactElement {
  return (
    <div className="info">
      <div className="time">
        <div className="duration">
          <span className="duration-label">Время:</span>
          <span className="duration-info">{`${dayjs(eventInfo.start).format(
            'HH.mm'
          )} - ${dayjs(eventInfo.end).format('HH.mm')}`}</span>
        </div>
        <div className="first">
          <span className="first-label">Собрание началось:</span>
          <span className="first-info">
            {dayjs
              .duration(
                dayjs(eventInfo.start).diff(dayjs(), 'minute'),
                'minutes'
              )
              .humanize(true)}
          </span>
        </div>
        <div className="remaining">
          <span className="remaining-label">Собрание закончится:</span>
          <span className="remaining-info">
            {dayjs
              .duration(dayjs(eventInfo.end).diff(dayjs(), 'minute'), 'minutes')
              .humanize(true)}
          </span>
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
