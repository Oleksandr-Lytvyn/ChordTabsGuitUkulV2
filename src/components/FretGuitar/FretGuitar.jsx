import imgFret from '../../images/gitar-fret.png';

export const FretGuitar = ({ fret }) => {
  const baseFreets = {
    1: 'translate(84%, -20%)',
    2: 'translate(84%, 10%)',
    3: 'translate(84%, 35%)',
    4: 'translate(84%, 57%)',
    5: 'translate(84%, 80%)',
    6: 'translate(84%, 100%)',
    7: 'translate(84%, 120%)',
    8: 'translate(84%, 140%)',
    9: 'translate(84%, 157%)',
    10: 'translate(84%, 175%)',
    11: 'translate(84%, 190%)',
  };
  console.log(fret);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          transform: baseFreets[fret],
          width: '30px',
          height: '70px',
          background: 'linear-gradient(to bottom,#10f0d2, rgba(255, 0, 0, 0) )',
          opacity: '0.5',
        }}
      ></div>
      <img src={imgFret} alt="" style={{ width: '80px' }} />
    </>
  );
};
