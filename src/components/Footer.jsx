export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer
				className="w-full flex justify-between items-center p-1"
				style={{ borderTop: "1px solid gray" }}
			>
				<div className="pl-4 text-gray-700 dark:text-gray-500 ">
					<a href="https://pokeapi.co/" target="_blank">
						{" "}
						Datasource
					</a>
				</div>
				<div className=" text-xs text-center text-gray-700 dark:text-gray-500">
					<p>
						©{currentYear} Pokémon. ©1995 - {currentYear} Nintendo/Creatures
						Inc./GAME FREAK inc.
					</p>

					<p>
						©1997 Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku.
						©Pokémon. TM and ® are trademarks of Nintendo.
					</p>
				</div>
				<div className="text-right pr-4  text-gray-700 dark:text-gray-400">
					Made with ❤ by{" "}
					<a href="https://www.linkedin.com/in/divjeet-singh/" target="_blank">
						Divjeet
					</a>
		& 
					<a href="https://www.linkedin.com/in/shubhammohapatra/" target="_blank">
						Shubham
					</a>
				</div>
			</footer>
		</>
	);
}
