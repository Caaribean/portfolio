class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //poniżej podajemy kod HTML naszego componentu
        this.innerHTML = `
        <header>
        <nav class="menu">
            <ul>
            <li><a href="#">TEST</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
        `;
    }
}

customElements.define('header-component', Header);
//pierwszy argument to nazwa twojego componentu, którą będziesz używać w HTML
//drugi argument to nazwa klasy twojego componentu (jest powyżej)