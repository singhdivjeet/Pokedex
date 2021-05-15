import SearchBar from "./SearchBar";
import logo from "../assets/pokemon.png";

import logo1 from "../assets/pokeball.png";
import Toggle from "./themeToggle";

export default function Header() {
	return (
		<header className="sticky top-0 z-10 shadow-md bg-red-600 dark:bg-red-800">
			<div className="flex justify-between items-center container mx-auto p-3">
				<a href="/">
					<img className="inline w-12" src={logo1} alt="Logo" />
					<img className="inline w-32 " src={logo} alt="Logo" />
				</a>
				<div className="mr-12 pb-1 ">
					<SearchBar />
				</div>
			</div>
			<div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 ">
				<Toggle />
			</div>
		</header>
	);
}
