class Banner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        //poniżej podajemy kod HTML naszego componentu
        this.innerHTML = `
        <div class="banner-orange">
              <img class="banner-orange__img" src="./images/block-man.png">
              <h3 class="banner-orange__title--white">We’re Help 
                To Build Your 
                Dream Project</h3>
              <span class="banner-orange__txt--light">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</span>
              <button class="banner-orange__btn--white">Contact Us</button>
            </div>
        `;
    }
}

customElements.define('banner-component', Banner);
//pierwszy argument to nazwa twojego componentu, którą będziesz używać w HTML
//drugi argument to nazwa klasy twojego componentu (jest powyżej)