import { GuitarTabsList } from 'components/GuitarTabsList/GuitarTabsList';
import { useChord } from 'context/chordContext';

export const SideRight = () => {
  const { chord } = useChord();
  console.log(chord.positions);
  return (
    <div className="right">
      <GuitarTabsList chord={chord} />
    </div>
  );
};
