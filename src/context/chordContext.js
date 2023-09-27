import { createContext, useContext, useState } from 'react';

const ChordContext = createContext();

export const useChord = () => useContext(ChordContext);

export const ChordProvider = ({ children }) => {
  const [instr, setInstr] = useState('');
  const [key, setKey] = useState('');
  const [suffix, setSuffix] = useState('');
  const [chord, setChord] = useState('');

  const keySet = key => {
    setKey(key);
  };

  const suffixSet = suf => {
    setSuffix(suf);
  };

  const instrSet = instr => {
    setInstr(instr);
  };

  const chordSet = arr => {
    setChord(arr);
  };

  return (
    <ChordContext.Provider
      value={{
        instr,
        key,
        suffix,
        chord,
        instrSet,
        keySet,
        suffixSet,
        chordSet,
      }}
    >
      {children}
    </ChordContext.Provider>
  );
};
