const { I } = inject();

module.exports = {
  fields: {
    emailLogin: '#email',
    emailPassword: '#passwd'

  },

  button: {
    loginButton: '.login',
    signInButton: '#SubmitLogin'



  },

  messages: {
    errorMessage: 'There is 1 error',
    successMessage: 'AUTHENTICATION'

  },

  noEmailLogin() {
    I.click(this.button.loginButton)
    I.fillField(this.fields.emailPassword, secret(123456))
    I.click(this.button.signInButton)
    I.see(this.messages.errorMessage)
  },

  noPasswordLogin() {
    I.click(this.button.loginButton)
    I.fillField(this.fields.emailLogin, 'isa123@teste.com')
    I.click(this.button.signInButton)
    I.see(this.messages.errorMessage)
  },

  emptyLogin() {
    I.click(this.button.loginButton)
    I.click(this.button.signInButton)
    I.see(this.messages.errorMessage)
  },

  successLogin() {
    I.click(this.button.loginButton)
    I.fillField(this.fields.emailLogin, 'isa123@teste.com')
    I.fillField(this.fields.emailPassword, secret(123456))
    I.click(this.button.signInButton)
    I.see(this.messages.successMessage)
  }
}
