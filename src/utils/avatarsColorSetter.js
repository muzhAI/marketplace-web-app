import randomColor from 'randomcolor';

export function colorSetter(data) {
  const background = randomColor({
    luminosity: 'dark',
    hue: 'random',
  });
  const color = randomColor({
    luminosity: 'light',
    hue: 'random',
  });
  const styles = { background, color };
  // TODO: add better colors
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
