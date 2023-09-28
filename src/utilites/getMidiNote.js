export const getMidiNote = (step, i) => {
  let string = 52;
  switch (i) {
    case 1:
      string = 52;
      break;
    case 2:
      string = 57;
      break;
    case 3:
      string = 62;
      break;
    case 4:
      string = 67;
      break;
    case 5:
      string = 71;
      break;
    case 6:
      string = 76;
      break;

    default:
      break;
  }
  let midiNote = step.fret + string + step.baseFret;
  // console.log(step);
  return midiNote;
};
