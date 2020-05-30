class NavMenu extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set clickEvent(event) {
        [this._index, this._categories] = event;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            #menu li {        
                display: inline;    
                list-style: none;     
            }
            
            #menu a {
                text-decoration: none;
                color: rgb(240, 240, 240);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: bold;
                margin-right: 10px;
            }
            
            #menu a:hover {
                color: rgb(255, 255, 255);
                cursor: pointer;
            }
        </style>
        <ul id="menu">
            <li><a id="btn_index">Home</a></li>
            <li><a id="btn_categories">Categories</a></li>
        </ul>
        `;
        
        this.shadowDOM.querySelector('#btn_index').addEventListener('click', this._index);               
        this.shadowDOM.querySelector('#btn_categories').addEventListener('click', this._categories);                       
    }    
}

customElements.define('nav-menu', NavMenu);