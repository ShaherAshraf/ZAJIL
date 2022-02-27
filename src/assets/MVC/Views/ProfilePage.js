import { createIcon, createPageBio, createPageNav } from '../Helpers';

class ProfilePage {
  constructor() {}

  generateMarkup() {
    const profilePage = `
      <div class="page page--inner profilePage">
        <div class="wrapper">

          <header class="pageHeader">
            <h2>Anna Dormun</h2>
          </header>

          <nav class="pageNav">${createPageNav()}</nav>

          <aside class="pageBio">${createPageBio()}</aside>

          <main class="pageContent">
            <div class="pageContent__container">
              <div class="avatar">
                <button class="btn--yellow">${createIcon('image')}</button>
                <div class="avatar__img">
                  <img src="./images/avatar.png" />
                </div>
                <button class="btn--red">${createIcon('delete')}</button>
              </div>
              <form class="form" id="profileForm">
                <fieldset>
                  <div class="fieldInput">
                    <input type="text" placeholder="Name"><span>${createIcon('edit')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="text" placeholder="City, Country"><span>${createIcon('map-pin')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="email" placeholder="Email"><span>${createIcon('mail')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="tel" placeholder="Phone"><span>${createIcon('phone2')}</span>
                  </div>
                </fieldset>
                <fieldset>
                  <div class="fieldInput">
                    <input type="text" placeholder="About"><span>${createIcon('about')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="url" placeholder="Facebook"><span>${createIcon('facebook2')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="url" placeholder="Twitter"><span>${createIcon('twitter2')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="url" placeholder="Instagram"><span>${createIcon('instagram2')}</span>
                  </div>
                  <div class="fieldInput">
                    <input type="url" placeholder="Website"><span>${createIcon('website')}</span>
                  </div>
                </fieldset>
              </form>
            </div>
          </main>

          <footer class="pageFooter">
            <div class="footer__container">
              <div class="footer__container__buttons">
                <button type="submit" form="profileForm" class="btn--large btn--yellow">Save</button>
              </div>
            </div>
          </footer>

        </div>
      </div>
    `;
    return profilePage;
  }
}

export default new ProfilePage();
