// import { useChord } from 'context/chordContext';

export const MainWindow = ({ children }) => {
  //   const chord = useChord();
  //   console.log(chord);
  //   const onClick = () => {
  //     chord.keySet();
  //   };
  return (
    <section className="main-section">
      <div className="container">{children}</div>
    </section>
  );
};
