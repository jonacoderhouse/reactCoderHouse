// Itemlist modifica mi array de objetos, RECIBE ESE ARRAY DE PRODUCTOS, y se lo pasa 
//Item para que arme una cart en forma de un objeto

import React from 'react';
import Item from "../Item/Item"
const ItemList = ({productsList}) => {
     
    return (
        <>  
       {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
        </>
    );
}

export default ItemList;
