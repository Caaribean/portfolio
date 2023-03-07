class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <div class="header__logo">
          <img class="header__logo__img" src="./images/logo.png" />
          <h2 class="header__logo__txt">Agency</h2>
        </div>
        <nav class="header__navmenu">
          <ul>
            <li class="header__navmenu__txt"><a href="#">About</a></li>
            <li class="header__navmenu__txt"><a href="#">Services</a></li>
            <li class="header__navmenu__txt"><a href="#">Pricing</a></li>
            <li class="header__navmenu__txt"><a href="#">Blog</a></li>
          </ul>
        </nav>
        <div class="header__hamburger">
          <img class="header__hamburger__img" src="./images/hamburger.png" />
        </div>
      </header>
        `;
    }
}

customElements.define('header-component', Header);
