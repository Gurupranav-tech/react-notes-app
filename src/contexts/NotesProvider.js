import { createContext, useContext, useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const context = createContext(null);

export function useNotes() {
  return useContext(context);
}

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const callback = useRef(null);

  const createOrUpdateNote = ({ id, text }) => {
    const note = notes.findIndex((note) => note.id === id);
    if (note === -1) {
      setNotes((prevNotes) => [...prevNotes, { id, text }]);
    } else {
      setNotes((prevNote) => {
        prevNote[note].text = text;
        return prevNote;
      });
    }
  };

  const save = () => {
    if (callback === null) throw new TypeError('No callback set');
    callback.current({ createOrUpdateNote });
  };

  const registerCallback = (cb) => {
    callback.current = cb;
  };

  const value = {
    notes,
    save,
    registerCallback,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
