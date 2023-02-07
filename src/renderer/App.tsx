import { MemoryRouter as Router, Routes,
Route } from 'react-router-dom';
import { Loader } from './components/loader';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
      </Routes>
    </Router>
  );
}
