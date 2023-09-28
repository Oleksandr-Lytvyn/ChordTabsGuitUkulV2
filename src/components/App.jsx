import { useChord } from 'context/chordContext';
import { MainWindow } from './MainWindow/MainWindow';
import { SideLeft } from './SideLeft/SideLeft';
import { SideRight } from './SideRight/SideRight';

import dbGuitar from '../db/guitar.json';
// import dbUkulele from '../db/ukulele.json';

export const App = () => {
  const { key, suffix, instr, chordSet } = useChord();
  if (key && suffix && instr) {
    const result = dbGuitar.chords[key].find(
      (element, index, array) => element.suffix === suffix
    );
    // console.log(result);
    chordSet(result);
  }
  return (
    <MainWindow>
      <SideLeft />
      <SideRight />
    </MainWindow>
  );
};
