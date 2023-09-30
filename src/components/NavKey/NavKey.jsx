import { useChord } from 'context/chordContext';
import dbGuitar from '../../db/guitar.json';
// import dbGUkulele from '../../db/ukulele.json';
// console.log(dbGUkulele);

export const NavKey = () => {
  const { instr, keySet, key } = useChord();

  const handleKey = e => {
    if (e.target.value === 'C#') {
      keySet('Csharp');
    } else if (e.target.value === 'F#') {
      keySet('Fsharp');
    } else keySet(e.target.value);
    console.log(key);
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
