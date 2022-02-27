import { createIcon, createPageBio, createPageNav } from '../Helpers';

class InboxPage {
  constructor() {}

  generateMarkup() {
    const inboxPage = `
      <div class="page page--inner inboxPage">
        <div class="wrapper">
          <header class="pageHeader">
            <h2>Inbox</h2>
            <div class="conversationHeader">
              <div class="conversationHeader__content">
                <div class="conversationHeader__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="conversationHeader__text">
                  <h3>Anna Dormun</h3>
                  <p>Offline, Last seen 3 hours ago</p>
                </div>
              </div>
              <span class="video__btn">${createIcon('video2')}</span>
            </div>
          </header>
          
          <nav class="pageNav">${createPageNav()}</nav>

          <aside class="pageBio">${createPageBio()}</aside>

          
          <main class="pageContent">
            <div class="messages__container">
              <div class="message">
                <p class="message__text message--yellow">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksvacdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksvacdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksvacdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message sent">
                <p class="message__text message--red">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message">
                <p class="message__text message--yellow">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message sent">
                <p class="message__text message--red">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message">
                <p class="message__text message--yellow">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message sent">
                <p class="message__text message--red">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message sent">
                <p class="message__text message--red">lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
              <div class="message">
                <p class="message__text message--yellow">acdkdkvkv svksvkskv svklsvksvk lskvksvk klsvksv skkvs ksvksvk lsvksv skvksv</p>
                <p class="message__time">Yesterday 14:26 PM</p>
              </div>
            </div>
          </main>

          <section class="chats">
            <div class="chatsBoxes">
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="chatBox">
                <div class="chatBox__img">
                  <img src="./images/avatar.png" />
                  <span></span>
                </div>
                <div class="chatBox__content">
                  <header>
                    <h3>Anna Dormun</h3>
                    <p>2 weeks ago</p>
                  </header>
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <footer class="pageFooter chatsSearchBox">
              <div class="footer__container">
                <form class="footer__container__form chatsSearchForm">
                  <input type="search" placeholder="Search Here..." name="search">
                  <button>${createIcon('search')}</button>
                </form>
              </div>
            </footer>
          </section>
          
         <footer class="pageFooter">
            <div class="footer__container">
              <form class="footer__container__form">
                <input type="search" placeholder="Type your message here..." name="search">
                <button class="btn-emoji">${createIcon('emoji')}</button>
                <button type="submit">${createIcon('send')}</button>
              </form>
            </div>
          </footer> 

          

        </div>
      </div>
    `;
    return inboxPage;
  }
}

export default new InboxPage();
