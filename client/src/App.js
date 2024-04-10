import logo from './logo.svg';
import './App.css';
import ChatBot from './component/ChatBot';
import Heading from './component/Heading';
import Main from './component/Main';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
