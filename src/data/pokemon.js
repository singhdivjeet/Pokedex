import axios from "axios";
import {getEvolution} from '../helpers';

const URL = "https://pokeapi.co/api/v2";




async function getAllPokemon() {
	try {
		const allPokemon = await axios
			.get(`${URL}/pokemon?limit=151`)
			.then((response) => {
				const promises = response.data.results.map((result) => {
					return axios.get(result.url);
				});

				return Promise.all(promises);
			});
		return allPokemon;
	} catch (err) {
		throw new Error(err);
	}
}

async function getPokemonProfile(id) {
	try {
		const pokemonProfile = await Promise.all([
			axios.get(`${URL}/pokemon/${id}`),
			axios.get(`${URL}/pokemon-species/${id}`),
			// axios.get(`${URL}/evolution-chain/${id}`),
		]).then(async (results) => {
			const promise  = await axios.get(results[1].data.evolution_chain.url);
			results.push(promise);
			return results});
		let  x =  await getAllPokemon();
		var temp = pokemonProfile[2].data;
		pokemonProfile.push(getEvolution(temp,x));
		return pokemonProfile;
	} catch (err) {
		throw new Error(err);
	}
}

export { getAllPokemon, getPokemonProfile };
