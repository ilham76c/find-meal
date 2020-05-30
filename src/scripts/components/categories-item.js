class CategoriesItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    render() {       
        this.shadowDOM.innerHTML = `        
        <style>
            .flex-row {
                display: flex;    
                flex-grow: 1;    
                justify-content: space-evenly;
            }
            .card {
                flex: 1;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 250px;    
                margin: 5px 10px 40px 10px;
                padding: 20px;
            }

            .card img {  
                width: 250px;
                border-bottom: 2px dashed gray;
                padding-bottom: 25px;
            }
            .card:hover {
                box-shadow: 0 10px 15px 5px rgba(0,0,0,0.3);                
            }

            .container {
                padding: 2px 16px;
            }

            .flex-column {
                display: flex;
                flex-direction: column;      
            }

            .flex-row {
                display: flex;    
                flex-grow: 1;    
                justify-content: space-evenly;
            }

            summary {
                color: steelblue;
                cursor: pointer;
                font-weight: bold;    
            }

            summary::-webkit-details-marker {
                color: #00ACF3;
                font-size: 125%;
                margin-right: 2px;        
            }

            summary:focus {
                outline-style: none;    
            }

            details > p {
                margin-left: 10px;
            }
        </style>
        
        <div class="card">
            <img src="${this._category.strCategoryThumb}" alt="category-img">
            <div class="container">
                <h4><b>${this._category.strCategory}</b></h4>                                 
                <details>
                    <summary>Description</summary>
                    <p>${this._category.strCategoryDescription}</p>
                </details> 
            </div>
        </div>        
        `;
    }
}

customElements.define('categories-item', CategoriesItem);