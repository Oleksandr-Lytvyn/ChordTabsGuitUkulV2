import { StyledPosition } from './GuitarTabsList.styled';
import { ChordGuitar } from '../ChordGuitar/ChordGuitar';

export const Position = ({ pos, play, setNotes }) => {
  const steps = [];
  for (let index = 0; index < pos.fingers.length; index++) {
    steps.push({
      fret: pos.frets[index],
      finger: pos.fingers[index],
      baseFret: pos.baseFret,
    });
  }
  return (
    <>
      <StyledPosition>
        <h3>base fret {pos.baseFret}</h3>
        <ChordGuitar
          steps={steps}
          midi={pos.midi}
          play={play}
          setNotes={setNotes}
          baseFret={pos.baseFret}
        />
      </StyledPosition>
    </>
  );
};
