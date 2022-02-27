import { createLogo, createButton } from '../Helpers';

class HomePage {
  constructor() {}

  generateMarkup() {
    const homePage = `
      <div class="page homePage">
        <div class="wrapper">
          <div class="content content--left">
            <div class="logo">
              ${createLogo(359, 245)}
              <h1 class="logo__title">ZAJIL</h1>
            </div>
            <div class="text">
              <h2 class="text__title">Speak Freely</h2>
              <p class="text__paragraph">Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect</p>
            </div>
          </div>
          <div class="content content--right">
            ${createButton('/signup', 'nav-link btn--large btn--red', 'Sign up')}
            <p class="or">or</p>
            ${createButton('/', 'nav-link signup--google btn--large btn--red', 'Sign up with Google')}
            <p class="hint">By signing up, you agree to the <span class="hint__colored">Terms of Service</span> and <span class="hint__colored">Privacy Policy</span>, including <span class="hint__colored">Cookie Use</span>.</p>
            <p class="btn__question">Already have an account?</p>
            ${createButton('/login', 'nav-link btn--large btn--yellow', 'Log in')}
            ${createButton('/profile', 'nav-link btn--large btn--yellow', 'Profile Page =>')}
          </div>
        </div>
      </div>
    `;
    return homePage;
  }
}

export default new HomePage();
