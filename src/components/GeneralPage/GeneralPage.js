import React from 'react';
import classes from './GeneralPage.css';
import {NavLink} from 'react-router-dom'

const General = props => {
 
  return (
<div>
  <div className={classes.box}>
    <div className="w3-display-bottomleft w3-padding-large w3-opacity">
    </div>

  </div>
  <div className={classes.round} onClick={props.nextPage}><div className={classes.roundButton}><NavLink to="/dough" className={classes.round}>CREATE</NavLink></div></div> 
</div>
    )
}
export default General

