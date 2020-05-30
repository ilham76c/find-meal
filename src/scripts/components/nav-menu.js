class NavMenu extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    changeStyle(btn) {
        this.shadowDOM.querySelector(btn).classList.add('active');
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
                color: rgba(255, 255, 255, 0.9);   
            }
            
            #menu a {
                text-decoration: none;                
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: bold;
                margin-right: 10px;
            }
            
            #menu a:hover {
                color: white;
                cursor: pointer;
            }

            .active {
                border-radius: 10px;
                border: 1px solid white;
                padding: 7px;
                color: rgb(255,255,255);
                background-color: rgba(88, 163, 224, 0.5);
            }
        </style>
        <ul id="menu">
            <li><a id="btn_index" class="">Home</a></li>
            <li><a id="btn_categories" class="">Categories</a></li>
        </ul>
        `;
        
        this.shadowDOM.querySelector('#btn_index').addEventListener('click', this._index);               
        this.shadowDOM.querySelector('#btn_categories').addEventListener('click', this._categories);                       
    }    
}

customElements.define('nav-menu', NavMenu);