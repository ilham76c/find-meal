class SearchNav extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    // connectedCallback() {
    //     this.render();
    // }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#search").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            #btn-search {
                background: url('../.././assets/icon/search-outline.svg');
                height: 30px;
                width: 30px;
                border-style: none;
                background-repeat: no-repeat;
                background-size: cover;    
                vertical-align: middle;
                margin: 5px;
                cursor: pointer;
            }
            
            #btn-search:hover {
                background: url('../.././assets/icon/search-bold.svg');    
                background-size: cover;            
                background-repeat: no-repeat;
            }
            
            #search {    
                height: 40px;    
                border-style: none;
                margin-left: 10px;
            }
            
            #search-container {        
                background-color: white;        
                width: max-content;    
                margin: auto;    
                border: 2px solid cornflowerblue;
                padding: 2px 5px;
            }
            #search, #search-container {
                border-radius: 22px;
            }
            #bar-search {
                width: 100%;    
                position: absolute;
                top: 165px;    
                text-align: center;
            }
        </style>        
        <div id="bar-search">
            <div id="search-container">                
                <input id="search" type="text" placeholder="Search meal...">
                <button id="btn-search" type="submit"></button>                
            </div>  
        </div>             
        `;
        this.shadowDOM.querySelector("#btn-search").addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-nav', SearchNav);