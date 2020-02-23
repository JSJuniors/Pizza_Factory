import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems';

const NavigationItems = (props) => {
    return (
        <div className={classes.topnav}>
        <h1>PIZZA FACTORY</h1>
            <ul>
                <NavigationItem link="/" active>Create</NavigationItem>
                <NavigationItem link="/">About</NavigationItem>
                <NavigationItem link="/">Gallery</NavigationItem>
                <NavigationItem link="/">Contact</NavigationItem>
            </ul>
        </div>);
}

export default NavigationItems;