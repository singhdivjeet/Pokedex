import { useContext,useState } from "react";
import { Context } from "../store/store";
import { shorten, getPokemonid, returnid } from "../helpers";
import PokemonThumbnail from "./PokemonThumbnail";
import PokemonId from "./PokemonId";
import EmptyMessage from "./EmptyMessage";
import InGameCry from "./InGameCry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function PokemonModal() {
	const [state, dispatch] = useContext(Context);
	
	const { id, name, types, height, weight, stats, flavor_text_entries,order } =
		state.pokemonProfile;
	const evolution = state.evolutionList;

	const Name = () => {
		return (
			<div className="inline-block text-xl md:text-3xl text-center lg:text-left font-bold capitalize">
				{name}
			</div>
		);
	};


	const Evolution = () =>{
		// console.log(evolution);
		// console.log(state.pokemonProfile);
		console.log(evolution);
		return(
			<h1> Evolution
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 dark:bg-gray-900"> 
				{evolution.map((value) => {
				return(<div><PokemonThumbnail
					classes="w-3/4 mx-auto"
					imgPath={`/pokemon/${value[0].data.id}.webp`}
				/>
				<p> {value[0].data.name}</p></div>)}
				)}


			</div></h1>
		)

	}

	const Types = () => {
		return (
			<ul className="mb-2 text-center lg:text-left">
				<strong>Type : </strong>
				{types.map((typeData, i) => {
					return (
						<li
							key={i}
							className={`inline rounded mr-2 px-2 py-1 bg-gray-500 text-white text-xs bg-${typeData.type.name}`}
						>
							{typeData.type.name}
						</li>
					);
				})}
			</ul>
		);
	};

	const Stats = () => {
		return (
			<div className="mb-2 text-center lg:text-left">
				<div className="inline-block mr-3">
					<strong>Height :</strong> {height / 10}m
				</div>
				<div className="inline-block mr-3">
					<strong>Weight :</strong> {weight / 10}kg
				</div>
			</div>
		);
	};

	const BaseStats = () => {
		return (
			<table
				className="table-fixed mx-auto mb-2 lg:mx-0"
				cellSpacing="2"
				cellPadding="2"
			>
				<tbody>
					<tr>
						{stats.map((st, i) => {
							return (
								<td width="80" key={i}>
									<div className="rounded py-2 bg-gray-50 text-center border-solid border-2 border-gray-100 dark:bg-gray-700 dark:border-gray-800">
										<div>{st.base_stat}</div>
										<div className="text-xs font-bold whitespace-nowrap uppercase">
											{shorten(st.stat.name)}
										</div>
									</div>
								</td>
							);
						})}
					</tr>
				</tbody>
			</table>
		);
	};

	const Description = () => (
		<p className="text-gray-500 dark:text-gray-200">
			{
				flavor_text_entries.find((fte) => fte.language.name === "en")
					.flavor_text
			}
		</p>
	);

	function hideModal() {
		dispatch({ type: "SET_MODAL", payload: false });
	}

	return (
		<div
			className={`${
				state.modal
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none delay-200"
			} flex fixed justify-center items-center inset-0 z-10 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur transform-gpu transition duration-150`}
		>
			<div
				className={`${
					state.modal ? "scale-100 opacity-100 delay-150" : "scale-95 opacity-0"
				} container h-full lg:h-auto rounded shadow-xl overflow-hidden bg-white dark:bg-gray-900 transform-gpu transition duration-200 ease-in-out`}
			>
				<div className="flex justify-between p-6 bg-red-600 dark:bg-red-800 text-white">
					<PokemonId classes="font-bold" id={id} />
					<button
						type="button"
						className="focus:outline-none"
						onClick={hideModal}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
				{Object.keys(state.pokemonProfile).length > 0 ? (
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
						<div>
							<PokemonThumbnail
								classes="w-3/4 mx-auto"
								imgPath={`/pokemon/${id}.webp`}
							/>
						</div>
						<div className="col-span-2 text-gray-700 dark:text-gray-200">
							<div className="flex justify-center md:justify-start mb-3">
								<Name />
								<InGameCry id={id} />
							</div>
							<Types />
							<Stats />
							<BaseStats />
							<Description />
							<Evolution />
						</div>
					</div>
				) : (
					<div className="flex p-6 justify-center">
						<EmptyMessage
							classes="text-gray-500"
							message="Pokémon data not found"
						/>
					</div>
				)}
			</div>
		</div>
	);
}
