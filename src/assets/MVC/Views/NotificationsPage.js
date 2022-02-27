import { createIcon, createPageNav } from '../Helpers';

class NotificationsPage {
  constructor() {}

  generateMarkup() {
    const notificationsPage = `
      <div class="page page--inner notificationsPage">
        <div class="wrapper">
          <header class="pageHeader">
            <h2>Notifications</h2>
          </header>
          
          <nav class="pageNav">${createPageNav()}</nav>

          <aside class="pageBio"></aside>

          <main class="pageContent">
            <div class="pageContent__container">
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
              <div class="notification">
                <div class="notification__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate alias ex doloremque saepe laboriosam eos deserunt dolore? Adipisci quisquam animi error corrupti neque, iure ducimus molestiae amet quidem accusantium.</p>
              </div>
            </div>
          </main>

          <footer class="pageFooter">
            <div class="footer__container">
              <div class="footer__container__buttons">
                <button class="btn--large btn--yellow"><span>${createIcon('mute')}</span> Mute</button>
                <button class="btn--large btn--yellow"><span>${createIcon('delete')}</span> Delete</button>
              </div>
            </div>
          </footer>

          </div>
      </div>
    `;
    return notificationsPage;
  }
}

export default new NotificationsPage();
