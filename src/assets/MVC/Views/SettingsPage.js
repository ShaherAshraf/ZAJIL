import { createIcon, createPageBio, createPageNav } from '../Helpers';

class SettingsPage {
  constructor() {}

  generateMarkup() {
    const settingsPage = `
      <div class="page page--inner settingsPage">
        <div class="wrapper">
          <header class="pageHeader">
            <h2>Settings</h2>
          </header>
          
          <nav class="pageNav">${createPageNav()}</nav>

          <aside class="pageBio">${createPageBio()}</aside>
          
          <main class="pageContent">
            <div class="pageContent__container">
              <form class="form" id="profileForm">
                <div class="fieldInput">
                  <input type="text" placeholder="Current Email"><span>${createIcon('mail')}</span>
                </div>
                <div class="fieldInput">
                  <input type="url" placeholder="New Email"><span>${createIcon('mail')}</span>
                </div>
                <div class="fieldInput">
                  <input type="url" placeholder="Current Password"><span>${createIcon('key')}</span>
                </div>
                <div class="fieldInput">
                  <input type="url" placeholder="New Password"><span>${createIcon('key')}</span>
                </div>
                <div class="fieldInput">
                  <input type="url" placeholder="Confirm Password"><span>${createIcon('key')}</span>
                </div>
              </form>
              <button class="btn--large btn--red">Delete this account</button>
            </div>
          </main>

          <footer class="pageFooter">
            <div class="footer__container">
              <div class="footer__container__buttons">
                <button class="btn--large btn--yellow">Save</button>
              </div>
            </div>
          </footer>

          </div>
      </div>
    `;
    return settingsPage;
  }
}

export default new SettingsPage();
