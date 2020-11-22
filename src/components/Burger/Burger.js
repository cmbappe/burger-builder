import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = props => {
    //let ingredients = null;
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default Burger
