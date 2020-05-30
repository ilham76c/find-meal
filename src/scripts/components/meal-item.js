class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        [this._meal, this._no] = meal;
        this.render();
    }

    render() {
        let section;        
        
        if (this._no % 2 == 1) {
            section = `
            <img src="${this._meal.strMealThumb}">
            <div class="wrap">
                <div class="meal-description">
                    <h3>${this._meal.strMeal}</h3>
                    <p>${this._meal.strInstructions}</p>
                </div>
            </div>`;
        } else {
            section = `            
            <div class="wrap">
                <div class="meal-description">
                    <h3>${this._meal.strMeal}</h3>
                    <p>${this._meal.strInstructions}</p>
                </div>
            </div>
            <img src="${this._meal.strMealThumb}">`;            
        }
        this.shadowDOM.innerHTML = `
        <style>
            .flex-row {
                display: flex;    
                flex-grow: 1;    
            }
            .meal {    
                display: flex;
                justify-content: space-between;
                margin: 10px;
                padding: 20px;    
                align-items: center;      
                border: 2px solid rgba(50, 150, 140, 0.8);                    
            }
            .meal img {           
                height: 230px;   
            }
            .meal-description {    
                text-align: justify;    
                overflow: hidden;    
                margin: 0 40px;
            }
            .meal-description p {    
                margin: 0;        
            }
            .meal-description h3 {    
                margin: 0 0 20px 0;                
            }
            
            .wrap {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 9; 
                -webkit-box-orient: vertical;
                margin-top: 10px;
            }
        </style>
        <div class="flex-row">
            <article class="meal">
               ${section}
            </article>
        </div>`;    
    }
}

customElements.define('meal-item', MealItem);