const { I } = inject();

module.exports = {
  fields: {
    scrollToColor: '.color_pick',
    selectSize: '#group_1',
    scrollToPrice: '#total_price',
    waitForPrice: '#total_price'
  },

  button: {
    selectWomen: 'Women',
    selectBlouse: 'Blouse',
    selectColor: '#color_8',
    addToCartButton: '#add_to_cart',
    proceedToCheckout: 'Proceed to checkout',
    selectStandardCheckout: '.standard-checkout'


  },

  messages: {

  },

 firstPurchaseAddres() {
    I.click(this.button.selectWomen)
    I.scrollTo(this.fields.scrollToColor)
    I.click(this.button.selectBlouse)
    I.selectOption(this.fields.selectSize, '2')
    I.click(this.button.selectColor)
    I.click(this.button.addToCartButton)
    I.click(this.button.proceedToCheckout)
    I.scrollTo(this.fields.scrollToPrice);
    I.waitForElement(this.fields.waitForPrice, 10)
    I.click(this.button.selectStandardCheckout)
 }
}
