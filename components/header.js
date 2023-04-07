class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <div class="header__logo">
          <img class="header__logo__img" src="./images/logo.png" />
          <a class="header__logo__txt" href="main.html">Agency</h2>
        </div>
        <nav class="header__navmenu">
          <ul class="header__navmenu__list">
            <li><a class="header__navmenu__list__txt" href="aboutus.html">About</a></li>
            <li><a class="header__navmenu__list__txt" href="services.html">Services</a></li>
            <li><a class="header__navmenu__list__txt" href="#">Pricing</a></li>
            <li><a class="header__navmenu__list__txt" href="blog.html">Blog</a></li>
          </ul>
        </nav>
        <button class="header__btn--black"><a class="nav-text" href="contact.html">Contact</a></button>
        <div class="header__hamburger">
          <img class="header__hamburger__img" src="./images/hamburger.png" />
        </div>
      </header>
        `;
    }
}

customElements.define('header-component', Header);
