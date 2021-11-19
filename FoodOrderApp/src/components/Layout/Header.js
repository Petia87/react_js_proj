import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meal.jpg'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Dishes" />
            </div>
        </Fragment>
    )
}
export default Header