import { useContext } from "react";
import { Context } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
	const [state, dispatch] = useContext(Context);

	function searchPokemon(ev) {
		const char = ev.target.value.toLowerCase();
		const result = state.pokemonList.filter((pokemon) =>
			pokemon.data.name.includes(char)
		);

		dispatch({ type: "SET_SEARCH_RESULT", payload: result });
	}

	return (
		<form className="search w-24 md:w-40 lg:w-60">
			<FontAwesomeIcon icon={faSearch} className="text-white" />
			<input
				className="w-full border-b py-1 pl-6 bg-transparent text-white focus:outline-none placeholder-white"
				type="search"
				placeholder="Search Pokémon"
				onInput={searchPokemon}
			/>
		</form>
	);
}
