import React from "react"; //1. Importar react como librerias

//2. crear componentes jsx

function Footer() {
    return(
        <div className="row mt-4">
            <div className="col-12 flex-column text-muted text-bg-dark align-items-center text-center d-flex pt-4 px-0" style={{ height: '80px'}}>
                <p>Copyright © Your Website 2018</p> 
            </div>
        </div>
    )
}

export default Footer 