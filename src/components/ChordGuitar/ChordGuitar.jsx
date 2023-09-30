import { nanoid } from 'nanoid';
import {
  StyledChordGuitarWrapper,
  StyledChordGuitar,
} from './ChordGuitar.styled';
import * as Tone from 'tone';
import { getMidiNote } from 'utilites/getMidiNote';
import { midiToNote } from 'utilites/midiToNote';
import { useChord } from 'context/chordContext';
import { Finger } from 'components/Finger/Finger';
import { Dot } from 'components/Dot/Dot';

const positions = {
  1: '5px',
  2: '21.5px',
  3: '37.5px',
  4: '54.5px',
  5: '71px',
  6: '88px',
};

const String = ({ status, pos }) => {
  let symbol = '';

  if (status === -1) {
    symbol = 'Х';
  } else if (status === 0) {
    symbol = 'О';
  } else if (status > 0) {
    symbol = ' ';
  }
  return (
    <div
      className="string"
      style={{
        position: 'absolute',
        transform: `translate(${positions[pos]}, -12px)`,
      }}
    >
      {symbol}
    </div>
  );
};

export const ChordGuitar = ({ steps, midi, play, setNotes, baseFret }) => {
  const { rotation } = useChord();
  let i = 0;
  const fingerboard = {
    1: false,
    2: false,
    3: true,
    4: false,
    5: true,
    6: false,
    7: true,
    8: false,
    9: false,
    10: false,
    11: false,
    12: true,
  };
  let dots = [];
  for (let i = baseFret; i < baseFret + 4; i++) {
    if (fingerboard.hasOwnProperty(i)) {
      dots.push(fingerboard[i]);
    }
  }
  return (
    <StyledChordGuitarWrapper>
      <div>
        <StyledChordGuitar r={rotation}>
          {steps.map((element, index) => {
            return <String status={element.fret} key={index} pos={index + 1} />;
          })}
          {dots.map((element, index) => {
            return <Dot key={index} visible={element} step={index + 1} />;
          })}
          {steps.map(step => {
            i += 1;
            const midi = getMidiNote(step, i).toString();
            const note = midiToNote[midi];

            return (
              <Finger
                onClick={e => {
                  const synth = new Tone.Synth().toDestination();
                  synth.triggerAttackRelease(note, '8n');
                }}
                key={nanoid()}
                step={step}
                rotation={rotation}
              ></Finger>
            );
          })}
        </StyledChordGuitar>
      </div>
    </StyledChordGuitarWrapper>
  );
};
