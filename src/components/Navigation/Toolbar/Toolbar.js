import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems'
const toolbar = () => {
    return ( 
        <header className={classes.Toolbar}>
            <nav>
                <NavigationItems />
            </nav>
        </header>
     );
}
 
export default toolbar;