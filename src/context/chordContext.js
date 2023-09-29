import { createContext, useContext, useState } from 'react';

const ChordContext = createContext();

export const useChord = () => useContext(ChordContext);

export const ChordProvider = ({ children }) => {
  const [instr, setInstr] = useState('');
  const [key, setKey] = useState('');
  const [suffix, setSuffix] = useState('');
  const [chord, setChord] = useState('');
  const [rotation, setRotation] = useState('vertical');

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
  const rotationSet = pos => {
    setRotation(pos);
  };

  return (
    <ChordContext.Provider
      value={{
        instr,
        key,
        suffix,
        chord,
        rotation,
        instrSet,
        keySet,
        suffixSet,
        chordSet,
        rotationSet,
      }}
    >
      {children}
    </ChordContext.Provider>
  );
};
