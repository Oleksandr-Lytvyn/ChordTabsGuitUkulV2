import { useChord } from 'context/chordContext';

export const NavInstr = () => {
  const { instrSet } = useChord();

  const handleInstr = e => {
    instrSet(e.target.value);
  };

  return (
    <div className="buttons">
      <button className="button" value="guitar" onClick={handleInstr}>
        guitar
      </button>
      <button className="button" value="ukulele" onClick={handleInstr}>
        ukulele
      </button>
    </div>
  );
};
