import { createHeader } from '../Helpers';

class SignupPage {
  constructor() {}

  listenFormSubmit(handler) {
    const signUpForm = document.querySelector('.signupPage form');
    console.dir(signUpForm);
    signUpForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('sumitted form');
      const user = {
        name: signUpForm.name.value,
        email: signUpForm.email.value,
        password: signUpForm.password.value,
      };
      handler(user);
      console.log('user => ', user);
      signUpForm.reset();
    });
  }

  generateMarkup() {
    const signupPage = `
      <div class="page signupPage">
        <div class="wrapper">
          ${createHeader('/login', 'nav-link btn btn--yellow', 'Log in')}
          <div class="content">
            <div class="content__form">
              <h1 class="logo__title">ZAJIL</h1>
              <form>
                <input type="text" name="name" placeholder="Name">
                <input type="email" name="email" placeholder="Email">
                <input type="password" name="password" placeholder="Password">
                <button type="submit" class="btn--large btn--red">Sign up</button>
              </form>
              <p class="or">or</p>
              <button type="submit" class="btn--large btn--red">Sign up with Google</button>
              <p class="hint">By signing up, you agree to the <span class="hint__colored">Terms of Service</span> and <span class="hint__colored">Privacy Policy</span>, including <span class="hint__colored">Cookie Use</span>.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return signupPage;
  }
}

export default new SignupPage();
