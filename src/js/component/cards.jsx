import React from "react"; //1. Importar react como librerias

//2. crear componentes jsx
function Cards () {
    return(

       
            <div className="card text-center">
                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

    
    )
}

//3. exportacion del componente

export default Cards