const { I } = inject();

module.exports = {
  fields: {
    waitForStandard: '.standard-checkout', 
    waitForPrice: '.delivery_option_price',
    waitForTotalPrice: '#total_price',
    waitForPayment: '.page-subheading'


  },

  button: {
    checkoutButton: '.standard-checkout',
    addressButton: 'processAddress',
    autenticationButton: '#cgv',
    paymentButton: 'Pay by check',
    confirmButton: 'I confirm my order'


    
  },

  messages: {
    orderComplete: 'Your order on My Shop is complete.'
  },

  checkoutFirstPurchase() {

    I.scrollPageToBottom()
    I.waitForElement(this.fields.waitForStandard, 10)
    I.click(this.button.checkoutButton)
    I.scrollPageToBottom()
    I.wait(3)
    I.click(this.button.addressButton)
    I.waitForElement(this.fields.waitForPrice)
    I.scrollPageToBottom()
    I.click(this.button.autenticationButton)
    I.waitForElement(this.fields.waitForStandard, 10)
    I.click(this.button.checkoutButton)
    I.waitForElement(this.fields.waitForTotalPrice)
    I.click(this.button.paymentButton)
    I.waitForElement(this.fields.waitForPayment)
    I.click(this.button.confirmButton)
    I.see(this.messages.orderComplete)
    I.wait(5)
  }
}
