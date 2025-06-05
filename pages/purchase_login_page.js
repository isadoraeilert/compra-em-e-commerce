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

  },

  loginWithSuccess() {
    I.click(this.button.loginButton)
    I.fillField(this.fields.emailLogin, 'isa456@teste.com')
    I.fillField(this.fields.emailPassword, secret(123456789))
    I.click(this.button.signInButton)
  }
  
}
  
    
