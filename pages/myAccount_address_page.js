const { I } = inject();

module.exports = {
  button: {
    headerButton: '#header_logo'
    
  },

  messages: {
    myAccountValidation: 'Isa Teste'
  },

 validateLogin() {
    I.see(this.messages.myAccountValidation)
    I.click(this.button.headerButton)
 }
}
