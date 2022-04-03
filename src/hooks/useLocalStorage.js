import { useState, useEffect } from 'react';

const PREFIX_KEY = 'notesapp:';

export default function useLocalStorage(name, initialValue) {
  const key = PREFIX_KEY + name;
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    if (typeof initialValue === 'function') return initialValue();
    return initialValue;
  });

  useEffect(() => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }, [value, key]);

  return [value, setValue];
}
