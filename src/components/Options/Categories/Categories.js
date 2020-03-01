import React from 'react';
import Categorie from './Categorie/Categorie';
import classes from './Categories.css'

const Categories = (props) => {
    return ( 
		<div className={classes.block}>
					<div className={classes.item}>
                       {/*  {props.cat.map(i => {
                           return (
                           <Categorie 
                           key={i}
                           img={i}
                           />
                           )
                        })} */}
                        <Categorie src={props.value} />
					</div>
		</div>
     );
}
 
export default Categories;