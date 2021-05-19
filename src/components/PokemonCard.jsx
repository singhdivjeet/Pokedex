import { useContext, useState } from "react";
import { Context } from "../store/store";
import * as pokemonAPI from "../data/pokemon";
import Loader from "./Loader";
import PokemonThumbnail from "./PokemonThumbnail";
import PokemonId from "./PokemonId";

export default function PokemonCard({ name, id }) {
	const [state, dispatch] = useContext(Context);
	const [loadingData, setLoadingData] = useState(false);

	function showPokemonModal(id) {
		setLoadingData(true);

		pokemonAPI
			.getPokemonProfile(id)
			.then((obj) => {
				const pokemonData = obj[0].data;
				const pokemonSpecies = obj[1].data;
				const pokemonEvolve = obj[3];

				dispatch({
					type: "SET_POKEMON_PROFILE",
					payload: { ...pokemonData, ...pokemonSpecies },
				});
				dispatch({
					type: "SET_POKEMON_PROFILE",
					payload: { ...pokemonData, ...pokemonSpecies },
				});
				dispatch({ type: "SET_EVOLUTION", payload: pokemonEvolve });
				dispatch({ type: "SET_MODAL", payload: true });
				setLoadingData(false);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div
			className="relative transform-gpu shadow-lg  rounded-3xl p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-gray-800 "
			onClick={() => showPokemonModal(id)}
		>
			<PokemonId
				classes="absolute top-3 right-6 text-gray-400 font-bold dark:text-gray-700"
				id={id}
			/>
			{loadingData ? (
				<Loader />
			) : (
				<PokemonThumbnail
					classes="w-3/4 mx-auto"
					imgPath={`/pokemon/${id}.webp`}
				/>
			)}
			<h2 className="text-xl font-bold capitalize text-gray-700 dark:text-gray-200">
				{name}
			</h2>
		</div>
	);
}
