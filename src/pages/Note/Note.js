/* eslint-disable react-hooks/exhaustive-deps */
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useCallback, useEffect, useState } from 'react';
import { useNotes } from '../../contexts/NotesProvider';
import styles from './Note.module.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
];

function Note() {
  const [quill, setQuill] = useState(null);
  const [note, setNote] = useState('');
  const { id } = useParams();
  const { registerCallback, getNote, setSourceSaved } = useNotes();
  const editorRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.textContent = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: 'snow',
      // modules: { toolbar: TOOLBAR_OPTIONS },
    });
    const note = getNote(parseInt(id));
    q.setText(note);
    setQuill(q);
  }, []);

  useEffect(() => {
    if (quill === null) return;

    const handler = () => {
      const source = quill.getText();
      setNote(source);
      if (source === '') return;
      setSourceSaved(false);
    };

    quill.on('text-change', handler);

    return () => quill.off('text-change', handler);
  }, [quill]);

  useEffect(() => {
    registerCallback(({ createOrUpdateNote }) => {
      createOrUpdateNote({
        id: parseInt(id),
        text: note,
      });
      setSourceSaved(true);
      toast.info('Saved the note');
    });
  }, [id, note, registerCallback]);

  return <div className={styles.editor} ref={editorRef}></div>;
}

export default Note;
