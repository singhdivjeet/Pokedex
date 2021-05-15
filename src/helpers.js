function shorten(statName) {
  switch (statName) {
    case 'attack':
      return 'atk';
    case 'defense':
      return 'def';
    case 'special-attack':
      return 'sp. atk'
    case 'special-defense':
      return 'sp. def'
    case 'speed':
      return 'spd'
    default:
      return statName;
  }
}

function addPadding(id) {
  return id.toString().padStart(3, '0');
}

export { shorten, addPadding };
