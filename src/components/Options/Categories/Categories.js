import React from 'react';
import Categorie from './Categorie/Categorie';
import classes from './Categories.css'

const Categories = (props) => {
  if(props.isOpen){
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
                        <Categorie img={props.value} />
					</div>
		</div>
     );
}else {
  return (<p>Choose something</p>)
}
} 
 
export default Categories;