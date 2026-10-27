import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/page/Login';
import Welcome from './component/page/Welcome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
