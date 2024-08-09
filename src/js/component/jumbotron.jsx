import React from "react"; //1. Importar react como librerias

//2. crear componentes jsx
function Jumbotron ( ) {
    return (
    <div className="p-5 mb-4 mt-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, culpa quam. Aliquid accusamus, animi rerum, distinctio debitis omnis voluptate neque nesciunt saepe hic illo delectus tempora voluptatum quidem.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div> )
}

//3. exportacion del componente
export default Jumbotron


