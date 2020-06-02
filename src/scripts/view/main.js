import '../components/meal-list.js';
import '../components/search-nav.js';
import '../components/nav-menu.js';
import '../components/categories-list.js';
// import barImage from '../../../assets/img/bar-img.png';
import DataSource from '../data/data-source.js';

function main() {    
    let categoryElement; let navMenuElement; let searchElement; let mealListElement;
    
    const onButtonCategoriesClicked = () => {        
        console.log('categories clicked');
        window.location.href = "categories.html#category";                
    };
    const onButtonIndexClicked = () => {        
        console.log('index clicked');                
        window.location.href = "index.html";        
    };
    const onButtonSearchClicked = () => {            
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)            
    };

    const renderResult = result => {
        mealListElement.meals = result;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };
    
    const fallback = message => {
        categoryElement.renderError(message);
    };
    const renderCategories = result => {
        categoryElement.categories = result;
    };

    const category = () => {
        DataSource.getCategories()
            .then(renderCategories)
            .catch(fallback)
    };
    const defaultMeal = () => {
        DataSource.searchMeal('')
            .then(renderResult)
            .catch(fallbackResult)            
    };

    
    document.addEventListener("DOMContentLoaded", () => {
        // document.querySelector("#img-bar").src = barImage;
        navMenuElement = document.querySelector("nav-menu");
        navMenuElement.clickEvent = [onButtonIndexClicked,onButtonCategoriesClicked];    
        if (window.location.hash === '#category') {
            categoryElement = document.querySelector("categories-list");
            category();
            navMenuElement.changeStyle('#btn_categories');
        } else {
            searchElement = document.querySelector("search-nav");            
            mealListElement = document.querySelector("meal-list");
            searchElement.clickEvent = onButtonSearchClicked;
            navMenuElement.changeStyle('#btn_index');
            defaultMeal();
        }        
    
    });
}

export default main;