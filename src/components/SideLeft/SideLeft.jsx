import { NavInstr } from 'components/NavInstr/NavInstr';
import { NavKey } from 'components/NavKey/NavKey';
import { NavSuffix } from 'components/NavSuffix/NavSuffix';
// import { useChord } from 'context/chordContext';

export const SideLeft = () => {
  return (
    <div className="left">
      <NavInstr />
      <div className="radio-inputs">
        <NavKey />
        <NavSuffix />
      </div>
    </div>
  );
};
