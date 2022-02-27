import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

class View {
  constructor() {}

  listenNavigateTo(handler, setTheView, routes) {
    document.body.addEventListener('click', (e) => {
      const navLink = e.target.closest('.nav-link');
      if (navLink) {
        e.preventDefault();
        handler(navLink);
        setTheView(routes);
        const pageNavLinks = document.querySelectorAll('.pageNav .nav-link');
        const clickedLink = [...pageNavLinks].find((navLink) => navLink.href.endsWith(window.location.pathname));
        clickedLink?.classList.toggle('active');
      }
    });
  }

  smoothScroll() {
    const pageMainContent = document.querySelector('.pageContent');
    const pageMainContentContainer = document.querySelector('.pageContent__container');
    const chatsBoxes = document.querySelector('.chatsBoxes');
    Scrollbar.use(OverscrollPlugin);
    if (pageMainContent) {
      Scrollbar.init(pageMainContent, { damping: 0.05, plugins: { overscroll: { effect: 'bounce' } } });
      pageMainContentContainer?.classList.add('fade');
    }
    if (chatsBoxes) {
      Scrollbar.init(chatsBoxes, { damping: 0.05, plugins: { overscroll: { effect: 'bounce' } } });
    }
  }
}

export default new View();
