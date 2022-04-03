import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/notes' element={<Notes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
