import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import PokemonList from "./components/PokemonList.jsx";
import Footer from "./components/Footer.jsx";
import PokemonModal from "./components/PokemonModal.jsx";
import Store from "./store/store.jsx";

export default function App() {
	return (
		<Store>
			<div className="dark:bg-gray-900">
				<Header />
				<Banner />
				<PokemonList />
				<Footer />
				<PokemonModal />
			</div>
		</Store>
	);
}
