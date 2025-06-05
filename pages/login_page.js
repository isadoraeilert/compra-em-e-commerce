const { I } = inject();

module.exports = {
  fields: {
    emailAddressRegister: '#email_create'
  },

  button: {
    createAccountButton: '#SubmitCreate'
  },

  messages: {

  },

  submitCreateNewAccount(email) {
    I.fillField(this.fields.emailAddressRegister, email)
    I.click(this.button.createAccountButton)
  }

  
}



