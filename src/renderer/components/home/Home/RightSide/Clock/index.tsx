import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function AnalogClock({ date }: { date: Date }) {
  return <Clock value={date} size={100} />;
}
export default AnalogClock;
