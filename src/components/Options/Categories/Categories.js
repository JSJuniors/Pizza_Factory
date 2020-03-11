import React from 'react';
import Categorie from './Categorie/Categorie';
import classes from './Categories.css'

const Categories = (props) => {
    return ( 
		<div className={classes.block}>
					<div className={classes.item}>
                        <Categorie img={props.value} />
					</div>
		</div>
     );
}

 
export default Categories; 