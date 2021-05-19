
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

function getEvolution(temp,x) {
	const out = [];
  let init = temp.chain.species.name;
  const y = x.filter(poke => poke.data.name === init);
  out.push(y);
  temp = temp.chain.evolves_to;
	while(temp[0].species){
		// x.forEach((element,id) => {
      
		// 	if ( element.data.name === temp[0].species.name){ 
    //     out.push({...element.data})
		// 	}	
		// });
    const z =   x.filter(poke => poke.data.name === temp[0].species.name);
    out.push(z);
		if (temp[0].evolves_to.length) temp = temp[0].evolves_to;
		else break;
	 
	}
  console.log(out); 
	return out;

}

export { shorten, addPadding, getEvolution};
