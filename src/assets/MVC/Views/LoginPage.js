import { createHeader } from '../Helpers';

class LoginPage {
  constructor() {}

  generateMarkup() {
    const loginPage = `
      <div class="page loginPage">
        <div class="wrapper">
          ${createHeader('/signup', 'nav-link btn btn--red', 'Sign up')}
          <div class="content">
            <div class="content__form">
              <h1 class="logo__title">ZAJIL</h1>
              <form>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password">
                <button type="submit" class="btn--large btn--yellow">Log in</button>
              </form>
              <p class="hint">By logging in, you agree to the <span class="hint__colored">Terms of Service</span> and <span class="hint__colored">Privacy Policy</span>, including <span class="hint__colored">Cookie Use</span>.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return loginPage;
  }
}

export default new LoginPage();
