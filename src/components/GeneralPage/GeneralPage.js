import React from 'react';
import classes from './GeneralPage.css';
//import { NavLink } from 'react-router-dom';

const General = props => (
  <div className={classes.container}>
    <div className={classes.main}>
			<section></section>
			<section className={classes.make_pizza}>
				<div>
					<h1>
					Pizza
				Factory
				</h1>
				<button className={classes.button} onClick={props.nextPage}>CREATE</button>
				</div>
			</section>
		</div>
  </div>
  )

export default General

