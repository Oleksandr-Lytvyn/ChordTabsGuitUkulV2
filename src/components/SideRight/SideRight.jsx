import { GuitarTabsList } from 'components/GuitarTabsList/GuitarTabsList';
import { useChord } from 'context/chordContext';

export const SideRight = () => {
  const { chord, rotationSet } = useChord();
  const onClick = e => {
    e.preventDefault();
    console.dir();
    rotationSet(e.target.textContent);
  };
  return (
    <div className="right">
      <button type="button" onClick={onClick}>
        vertical
      </button>
      <button type="button" onClick={onClick}>
        horizontal
      </button>
      <GuitarTabsList chord={chord} />
    </div>
  );
};
