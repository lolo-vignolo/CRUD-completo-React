import React from 'react'
import "../Style.css"

export const Pagination = (props) => {

    /// no hace falta, si lo queres hacer ams simple hace un array del uno al 10,
    // serviría en el caso que le des a elegir al usuario cuanso items quiere ver

    let itemsPageArray = []

    for ( let i = 1 ; i <= Math.ceil(props.totalUsers/ props.itemsPerPage); i++) {
        itemsPageArray.push(i)
    }
    // con el map aparte de poner los botones, llamare a la funcion para setaer la pagina actual y se
    //lleve a cabo el calculo inicial. " PONER DENTRO DE CALL BACK, siempre que paso una funcion como props y 
    // a esa funcion le tengo que pasar atributos"
    return (

        <nav>
            <ul className='pagination'>

                {itemsPageArray.map((eachPage) => (
                    <li key = {eachPage} className='page-item'>
                        <a onClick= {()=>props.handlePagination(eachPage)} className='page-link'>
                            {eachPage}
                        </a>

                    </li>
                ))}


            </ul>

        </nav>
    )
}