export const Dot = ({ visible, step }) => {
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
