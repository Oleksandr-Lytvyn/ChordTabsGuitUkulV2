import { useChord } from 'context/chordContext';
import dbGuitar from '../../db/guitar.json';
import dbGUkulele from '../../db/ukulele.json';
// console.log(dbGUkulele);

export const NavKey = () => {
  const { instr, keySet } = useChord();

  const handleKey = e => {
    keySet(e.target.value);
  };

  return (
    <form onChange={handleKey}>
      {instr &&
        dbGuitar.keys.map(i => {
          return (
            <label key={i} className="custom-radio">
              <input type="radio" id={i} name="key" value={i} />
              <span>{i}</span>
            </label>
          );
        })}
    </form>
  );
};
