import React from "react"; // 1. Importar react como libreria
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

//2. create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="row">
					<div className="col-12 col-md-6 col-lg-3">
						<Cards/>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Cards/>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Cards/>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Cards/>
					</div>
				</div>	
			</div>

			<Footer/>
			
			
		</div>
	);
};

//3. exportacion de componentes
export default Home;
