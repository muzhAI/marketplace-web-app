import randomColor from 'randomcolor';

export function colorSetter(data) {
  const background = randomColor({
    luminosity: 'dark',
    hue: 'random',
  });
  const styles = { background };
  if (data.hasOwnProperty('owner')) {
    return {
      ...data,
      owner: { ...data.owner, styles },
    };
  }
  return {
    ...data,
    styles,
  };
}
