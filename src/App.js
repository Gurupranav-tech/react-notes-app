import { HashRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes/Notes';
import { motion } from 'framer-motion';
import Note from './pages/Note/Note';
import NotesProvider from './contexts/NotesProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <HashRouter>
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
              <Route path='/' element={<Home />} />
              <Route path='/notes' element={<Notes />}>
                <Route path='/notes/:id' element={<Note />} />
              </Route>
            </Routes>
          </motion.div>
        </div>
      </NotesProvider>
      <ToastContainer />
    </HashRouter>
  );
}

export default App;
