import { nanoid } from 'nanoid';
import { Position } from '../Position/Position';

export const GuitarTabsList = ({ chord, play, setNotes }) => {
  return (
    <>
      {!chord && <div>no results</div>}

      <div>
        <h2>
          {chord.key} {chord.suffix}
        </h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {Object.keys(chord).length > 0 &&
            chord.positions.map(position => {
              return (
                <li key={nanoid()}>
                  <Position pos={position} play={play} setNotes={setNotes} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
