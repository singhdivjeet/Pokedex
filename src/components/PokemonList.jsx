import { useContext, useEffect, useState } from "react";
import { Context } from "../store/store";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";
import * as pokemonAPI from "../data/pokemon";

export default function PokemonList() {
	const [state, dispatch] = useContext(Context);
	const [loadingList, setLoadingList] = useState(true);
	const pokemonList = state.searchResult;

	useEffect(() => {
		pokemonAPI
			.getAllPokemon()
			.then((allPokemon) => {
				dispatch({ type: "SET_POKEMON_LIST", payload: allPokemon });
				dispatch({ type: "SET_SEARCH_RESULT", payload: allPokemon });
				setLoadingList(false);
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	return (
		<div className="container m-0 mx-auto px-5 pt-16 pb-16 dark:bg-gray-900">
			{loadingList ? (
				<div className="w-1/4 mx-auto dark:bg-gray-900">
					<Loader />
				</div>
			) : pokemonList.length > 0 ? (
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-gray-900 ">
					{pokemonList.map((pokemon) => (
						<PokemonCard
							key={pokemon.data.id}
							name={pokemon.data.name}
							id={pokemon.data.id}
						/>
					))}
				</div>
			) : (
				<EmptyMessage
					classes="text-gray-500 text-center dark:bg-gray-900 dark:text-white"
					message="Pokémon not found"
				/>
			)}
		</div>
	);
}
