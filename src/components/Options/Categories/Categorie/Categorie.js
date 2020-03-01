import React from 'react';
import classes from './Categorie.css';

const Categorie = (props) => {
    return ( 
        <img className={classes.img}
        alt="cat"
        src={props.img}
        />
     );
}
 
export default Categorie;