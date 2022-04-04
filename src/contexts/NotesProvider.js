import { createContext, useContext, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const context = createContext(null);

export function useNotes() {
  return useContext(context);
}

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [sourceSaved, setSourceSaved] = useState(false);
  const callback = useRef(null);

  const createOrUpdateNote = ({ id, text }) => {
    const note = notes.findIndex((note) => note.id === id);
    if (note === -1) {
      setNotes((prevNotes) => [...prevNotes, { id, text }]);
    } else {
      setNotes((prevNote) => {
        const notes = prevNote;
        notes[note].text = text;
        return notes;
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

  const getNote = (id) => {
    const note = notes.find((note) => note.id === id);
    if (note == null) return '';
    return note.text;
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((prevNote) => prevNote.id !== id));
  };

  const value = {
    notes,
    sourceSaved,
    save,
    registerCallback,
    getNote,
    deleteNote,
    setSourceSaved,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
