import React from "react"; // 1. Importar react como libreria
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";

//2. create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<Cards/>
			</div>
			
		</div>
		
	);
};

//3. exportacion de componentes
export default Home;
