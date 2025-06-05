const { I } = inject();

module.exports = {
  fields: {
    
  },

  button: {
    homePage: '#header_logo',
    categoryWomen: 'Women'
    
  },

  messages: {
    myAccountValidation: 'Isa Teste'
  },

myAccountFirstPurchase() {
    I.see(this.messages.myAccountValidation)
    I.click(this.button.homePage)
    I.click(this.button.categoryWomen)
}
}
