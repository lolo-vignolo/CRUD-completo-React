
import React from 'react';

export const Search = (props) =>{

    return(
    <div className="containerInput">
        <input
          className="form-control inputBuscar"
          
          value={props.search}
          placeholder="Búsqueda por Nombre"
          onChange={props.handleChange}
        />
        <button className="btn btn-success mt-3">
          Search
        </button>
      </div>

    )


}
