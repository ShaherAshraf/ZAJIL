import model from './Model';
import view from './Views/View';
import homePage from './Views/HomePage';
import signupPage from './Views/SignupPage';
import loginPage from './Views/LoginPage';
import profilePage from './Views/ProfilePage';
import networkPage from './Views/NetworkPage';
import inboxPage from './Views/InboxPage';
import notificationsPage from './Views/NotificationsPage';
import settingsPage from './Views/SettingsPage';

class Controller {
  constructor(model, view) {
    model;
    view;
    this.routes = [
      {
        path: '/',
        view: homePage.generateMarkup(),
      },
      {
        path: '/signup',
        view: signupPage.generateMarkup(),
      },
      {
        path: '/login',
        view: loginPage.generateMarkup(),
      },
      {
        path: '/profile',
        view: profilePage.generateMarkup(),
      },
      {
        path: '/network',
        view: networkPage.generateMarkup(),
      },
      {
        path: '/inbox',
        view: inboxPage.generateMarkup(),
      },
      {
        path: '/notifications',
        view: notificationsPage.generateMarkup(),
      },
      {
        path: '/settings',
        view: settingsPage.generateMarkup(),
      },
    ];
    this.setTheView(this.routes);
    view.listenNavigateTo(this.handleNavigateTo, this.setTheView, this.routes);
    window.addEventListener('popstate', this.setTheView.bind(this, this.routes));
  }

  setTheView = (routes) => {
    document.getElementById('root').innerHTML = routes.find((route) => route.path === window.location.pathname).view;
    view.smoothScroll();
    this.handleFormSubmit();
  };

  handleNavigateTo(navLink) {
    window.history.pushState({}, '', navLink.href);
  }

  handleSignupForm(user) {
    model.addDocument(user);
  }

  handleFormSubmit() {
    signupPage.listenFormSubmit(this.handleSignupForm);
  }
}

export default new Controller(model, view);
