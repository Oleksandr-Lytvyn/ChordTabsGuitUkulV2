import { BoxPosition, StyledPosition, TextPosition } from './Position.styled';
import { ChordGuitar } from '../ChordGuitar/ChordGuitar';
import { FretGuitar } from 'components/FretGuitar/FretGuitar';

export const Position = ({ pos, setNotes }) => {
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
        <TextPosition>base fret {pos.baseFret}</TextPosition>
        <BoxPosition>
          <FretGuitar fret={pos.baseFret} />
          <ChordGuitar
            steps={steps}
            midi={pos.midi}
            setNotes={setNotes}
            baseFret={pos.baseFret}
          />
        </BoxPosition>
      </StyledPosition>
    </>
  );
};
