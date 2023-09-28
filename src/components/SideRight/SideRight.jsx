import { GuitarTabsList } from 'components/GuitarTabsList/GuitarTabsList';
import { useChord } from 'context/chordContext';

export const SideRight = () => {
  const { chord } = useChord();
  return (
    <div className="right">
      <button type="button">vertical</button>
      <button type="button">horizontal L</button>
      <button type="button">horizontal R</button>
      <div className="right">
        <GuitarTabsList chord={chord} />
      </div>
    </div>
  );
};
