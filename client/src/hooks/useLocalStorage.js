import { useState } from 'react';

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
// const useLocalStorage = (key, value) => {
//   const [data, setData] = useState(() => {
//     if (value) {
//       const savedItem = window.localStorage.setItem(key, value);
//       return savedItem;
//     }
//     const getItem = window.localStorage.getItem(key);
//     return getItem;
//   });

//   const getItem = window.localStorage.getItem(key);
//   const saveData = (newKey, newValue) => {
//     const savedItem = window.localStorage.setItem(newKey, newValue);
//     if (savedItem) {
//       setData(savedItem);
//     }
//   };
//   useEffect(() => {
//     if (value) {
//       setData(getItem);
//     }
//   }, []);

//   return [data, saveData];
// };
