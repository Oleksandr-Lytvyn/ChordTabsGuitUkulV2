import { nanoid } from 'nanoid';
import {
  StyledChordGuitarWrapper,
  StyledChordGuitar,
} from './ChordGuitar.styled';
import * as Tone from 'tone';
import { getMidiNote } from 'utilites/getMidiNote';
import { midiToNote } from 'utilites/midiToNote';
import { useChord } from 'context/chordContext';

const Finger = ({ step, onClick, rotation }) => {
  // console.log(rotation);
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
        // rotate: '90deg',
      }}
    >
      <span style={{ transform: rotation === 'horizontal' && 'rotate(90deg)' }}>
        {finger.finger}
      </span>
    </div>
  );
};

const positions = {
  1: '5px',
  2: '21.5px',
  3: '37.5px',
  4: '54.5px',
  5: '71px',
  6: '88px',
};

const Dot = ({ visible, step }) => {
  let height = '';
  switch (step) {
    case 1:
      height = '0';
      break;
    case 2:
      height = '25px';
      break;
    case 3:
      height = '50px';
      break;
    case 4:
      height = '75px';
      break;

    default:
      break;
  }
  return (
    <div
      style={{
        position: 'absolute',
        width: '14px',
        height: '14px',
        background: `white`,
        transform: `translate(42px, ${height})`,
        textAlign: 'center',
        borderRadius: '50%',
        marginTop: '5px',
        color: 'white',
        display: `${visible ? 'flex' : 'none'}`,
        alignItems: 'center',
        justifyContent: 'center',
        border: '7px solid transparent',
        boxSizing: 'border-box',
      }}
    ></div>
  );
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
