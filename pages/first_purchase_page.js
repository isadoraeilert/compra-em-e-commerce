const { I } = inject();

module.exports = {
   fields: {
    scrollToCollor: '.color_pick',
    selectSize: '#group_1', 
    scrollToPrice: '.price-percent-reduction',
    

  },

  button: {
    selectBlouse: 'Blouse',
    selectColorBlouse: '#color_8',
    cartButton: '#add_to_cart',
    selectDresses: '.sf-with-ul',
    selectDress: 'Printed Summer Dress',
    selectColorDress: '#color_11',
    proceedToCheckout: 'Proceed to checkout',
    minusButton: '.icon-minus',
    plusButton: '.icon-plus',
    trashButton: '.icon-trash'






  },

  messages: {
    
  },

    firstPurchase() {
    I.scrollTo(this.fields.scrollToCollor)
    I.click(this.button.selectBlouse)
    I.selectOption(this.fields.selectSize, '2')
    I.click(this.button.selectColorBlouse)
    I.click(this.button.cartButton)
    I.click(this.button.selectDresses)
    I.scrollTo(this.fields.scrollToPrice)
    I.click(this.button.selectDress)
    I.click(this.button.selectColorDress)
    I.selectOption(this.fields.selectSize, '3')
    I.click(this.button.cartButton)
    I.click(this.button.proceedToCheckout)
    I.click(this.button.plusButton)
    I.wait(2)
    I.click(this.button.minusButton)
    I.wait(2)
    I.click(this.button.trashButton)
    I.wait(2)
}
}
