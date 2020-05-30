import './categories-item.js';

class CategoriesList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set categories(categories) {
        this._categories = categories;
        this.render();        
    }

    render() {        
        this.shadowDOM.innerHTML = "";        
        let no = 1;
        this._categories.forEach(category => {
            const categoryItemElement = document.createElement('categories-item');
            categoryItemElement.category = category;
            this.shadowDOM.appendChild(categoryItemElement);                        
        });        
    }


    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }
}

customElements.define('categories-list', CategoriesList);