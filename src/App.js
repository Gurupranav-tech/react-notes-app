import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Notes from './pages/Notes/Notes';
import { motion } from 'framer-motion';
import Note from './pages/Note/Note';
import NotesProvider from './contexts/NotesProvider';

function App() {
  return (
    <BrowserRouter>
      <NotesProvider>
        <div className='container'>
          <motion.div
            key={window.location.pathname}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Routes>
              <Route path='/notes' element={<Notes />}>
                <Route path='/notes/:id' element={<Note />} />
              </Route>
            </Routes>
          </motion.div>
        </div>
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
