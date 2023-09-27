import { nanoid } from 'nanoid';
import {
  StyledChordGuitarWrapper,
  StyledChordGuitar,
} from './ChordGuitar.styled';
import * as Tone from 'tone';
console.log(Tone);
const synth = new Tone.Synth().toDestination();
//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n');

const Finger = ({ step, onClick }) => {
  const finger = {};
  if (step.fret === -1) {
    finger.vertical = '0';
  } else if (step.fret === 0) {
    finger.vertical = '0';
  } else if (step.fret === 1) {
    finger.vertical = '0px';
  } else if (step.fret === 2) {
    finger.vertical = '25px';
  } else if (step.fret === 3) {
    finger.vertical = '50px';
  } else if (step.fret === 4) {
    finger.vertical = '75px';
  }

  if (step.finger === 0) {
    finger.isFinger = false;
  } else if (step.finger === 1) {
    finger.isFinger = true;
    finger.finger = 1;
  } else if (step.finger === 2) {
    finger.isFinger = true;
    finger.finger = 2;
  } else if (step.finger === 3) {
    finger.isFinger = true;
    finger.finger = 3;
  } else if (step.finger === 4) {
    finger.isFinger = true;
    finger.finger = 4;
  }

  return (
    <div
      onClick={onClick}
      style={{
        width: '16px',
        height: '16px',
        background: `${finger.isFinger ? 'green' : 'transparent'}`,
        transform: `translateY(${finger.vertical})`,
        textAlign: 'center',
        borderRadius: '50%',
        marginTop: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '7px solid transparent',
        boxSizing: 'border-box',
      }}
    >
      {finger.finger}
    </div>
  );
};

export const ChordGuitar = ({ steps, midi, play, setNotes, baseFret }) => {
  console.log(midi);
  // let i = 0;
  return (
    <StyledChordGuitarWrapper>
      <div>
        <StyledChordGuitar>
          {steps.map(step => {
            // i += 1;
            // const note = getMidiNote(step, i).toString();

            return (
              <Finger
                onClick={e => {
                  // setNotes(note);
                  setTimeout(() => {
                    play();
                  }, 50);
                }}
                key={nanoid()}
                step={step}
                // note={note}
              ></Finger>
            );
          })}
        </StyledChordGuitar>
      </div>
    </StyledChordGuitarWrapper>
  );
};
