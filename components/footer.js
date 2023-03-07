class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
              <div class="footer__navfooter">
                <h4 class="footer__navfooter__title">Agency</h4>
                <div class="footer__navfooter__list mb-48">
                  <ul>
                    <li class="footer__navfooter__list__title">Menu</li>
                    <li class="footer__navfooter__list__txt">About</li>
                    <li class="footer__navfooter__list__txt">Services</li>
                    <li class="footer__navfooter__list__txt">Blog</li>
                    <li class="footer__navfooter__list__txt">Contact</li>
                  </ul>
                </div>
                <div class="footer__navfooter__list mb-52">
                  <ul>
                    <li class="footer__navfooter__list__title">Service</li>
                    <li class="footer__navfooter__list__txt">Design</li>
                    <li class="footer__navfooter__list__txt">Development</li>
                    <li class="footer__navfooter__list__txt">Marketing</li>
                    <li class="footer__navfooter__list__txt">See More</li>
                  </ul>
                </div>
                <div class="footer__navfooter__socialmedia">
                  <img class="footer__navfooter__socialmedia__icon mr-8" src="./images/icon-facebook.png">
                  <img class="footer__navfooter__socialmedia__icon mr-8" src="./images/icon-twitter.png">
                  <img class="footer__navfooter__socialmedia__icon" src="./images/icon-instagram.png">
                </div>
              </div>
              <div class="footer__copyright">
                <span class="footer__copyright__txt--shadow">Copyright &copy; 2022 Laaqiq. 
                  All Rights Reserved.</span>
                <div class="txt-box"><span class="footer__copyright__txt--small">Terms of Use</span>
                <span class="footer__copyright__txt--small">Privacy Policy</span></div>

              </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
