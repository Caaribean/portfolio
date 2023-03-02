class Banner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //poniżej podajemy kod HTML naszego componentu
        this.innerHTML = `
        <footer>
        <p>Copyright &copy; 2019 All Rights Reserved.</p>
    </footer>
        `;
    }
}

customElements.define('banner-component', Banner);
//pierwszy argument to nazwa twojego componentu, którą będziesz używać w HTML
//drugi argument to nazwa klasy twojego componentu (jest powyżej)