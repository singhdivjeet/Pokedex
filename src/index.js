import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/themeContext";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<main className="dark:bg-gray-900" style={{ height: "100vh" }}>
				<App />
			</main>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
