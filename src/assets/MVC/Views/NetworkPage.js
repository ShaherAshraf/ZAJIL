import { createIcon, createPageBio, createPageNav } from '../Helpers';

class NetworkPage {
  constructor() {}

  generateMarkup() {
    const networkPage = `
      <div class="page page--inner networkPage">
        <div class="wrapper">
          <header class="pageHeader">
            <h2>My Network</h2>
          </header>

          <nav class="pageNav">${createPageNav()}</nav>

          <aside class="pageBio">${createPageBio()}</aside>

          <main class="pageContent">
            <div class="pageContent__container">
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
              <div class="connectionCard">
                <div>
                  <img src="./images/avatar.png" />
                  <h3>Anna Dormun</h3>
                </div>
                <button class="btn--yellow">Connect</button>
              </div>
            </div>
          </main>

          <footer class="pageFooter">
            <div class="footer__container">
              <form class="footer__container__form">
                <input type="search" placeholder="Search.." name="search">
                <button type="submit">${createIcon('search')}</button>
              </form>
              <div class="footer__container__buttons">
                <button class="btn--yellow">All</button>
                <button>Connections</button>
              </div>
            </div>
          </footer>

        </div>
      </div>
    `;
    return networkPage;
  }
}

export default new NetworkPage();
