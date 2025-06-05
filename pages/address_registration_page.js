const { I } = inject();

module.exports = {
  fields: {
    address: '#address1',
    city: '#city',
    state: '#id_state',
    postcode: '#postcode',
    country: '#id_country',
    phoneMobile: '#phone_mobile',
  },

  button: {
    saveButton: '#submitAddress',
    checkoutButton: 'Proceed to checkout'
  },

  messages: {
    
  },

  firstAddressRegistration() {
    I.scrollPageToBottom()
    I.fillField(this.fields.address,'Rua de Ngm')
    I.fillField(this.fields.city, 'Qualquer')
    I.selectOption(this.fields.state, '3')
    I.fillField(this.fields.postcode, '00000')
    I.selectOption(this.fields.country, '21')
    I.fillField(this.fields.phoneMobile, '333333333')
    I.scrollTo('#phone_mobile')
    I.click(this.button.saveButton)
    I.wait(10)
    I.click(this.button.checkoutButton)
  }
}
