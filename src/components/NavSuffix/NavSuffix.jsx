import { useChord } from 'context/chordContext';
import dbGuitar from '../../db/guitar.json';
import dbUkulele from '../../db/ukulele.json';

console.log(dbGuitar);

export const NavSuffix = () => {
  const { key, suffixSet } = useChord();

  const resultSuffixes = [];
  if (key && key !== 'C#' && key !== 'F#') {
    dbGuitar.chords[key].map(i => {
      return resultSuffixes.push(i.suffix);
    });
  }

  if (key === 'C#' || key === 'F#') {
    switch (key) {
      case 'C#':
        dbGuitar.chords.Csharp.map(i => {
          return resultSuffixes.push(i.suffix);
        });
        break;
      case 'F#':
        dbGuitar.chords.Fsharp.map(i => {
          return resultSuffixes.push(i.suffix);
        });
        break;

      default:
        break;
    }

    console.log(resultSuffixes);
  }

  const handleKey = e => {
    suffixSet(e.target.value);
  };

  return (
    <form onChange={handleKey}>
      {key &&
        resultSuffixes.map(i => {
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
