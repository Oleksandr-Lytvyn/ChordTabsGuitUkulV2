import { useChord } from 'context/chordContext';
import dbGuitar from '../../db/guitar.json';
import dbUkulele from '../../db/ukulele.json';

// console.log(dbGuitar);

export const NavSuffix = () => {
  const { key, suffixSet } = useChord();

  const handleKey = e => {
    suffixSet(e.target.value);
  };

  return (
    <form onChange={handleKey}>
      {key &&
        dbGuitar.suffixes.map(i => {
          return (
            <label key={i} className="custom-radio">
              <input type="radio" id={i} name="suffix" value={i} />
              <span>{i}</span>
            </label>
          );
        })}
    </form>
  );
};
